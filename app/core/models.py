import secrets
import uuid
import os
from django.contrib.sites.shortcuts import get_current_site
from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.conf import settings
from django.core.mail import EmailMessage
from django.urls import reverse


def recipe_image_file_path(instance, filename):
    """Generate file path for new image."""
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads', 'recipe', filename)


class UserManager(BaseUserManager):
    def create_user(self, request, email, password=None, **extra_fields):
        if not email:
            raise ValueError('User must have an email Address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.is_active = False
        # Generate a unique activation token
        token = secrets.token_hex(16)

        # Save the token with the user's email address
        user.activation_token = token
        user.save(using=self._db)
        activation_link = reverse('core:activate', kwargs={'token': token})
        email_subject = 'Activate your account'
        current_site = get_current_site(request)
        email_body = f'Please click the following link to activate your account: http://{current_site.domain}{activation_link}'
        email = EmailMessage(subject=email_subject, body=email_body, to=[email],
                             from_email='landingpage@jaromtravels.com')
        print(activation_link)
        email.send()

        return user

    def create_super_user(self, email, password=None, **extra_fields):

        if not email:
            raise ValueError('User must have an email Address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.is_active = True
        user.save(using=self._db)
        return user

    def activate(self, token):
        try:
            user = self.get(activation_token=token)
        except User.DoesNotExist:
            return None

        user.is_active = True
        user.activation_token = None
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_super_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    COURSE_CHOICES = (
        ('BackEnd','Optimust'),
        ('UI/UX','DesignGuy'),
        ('FrontEnd','Sanni'),
        ('No Course','Starpenzu'),
    )
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255)
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True)
    course = models.CharField(max_length=9, choices=COURSE_CHOICES, null=True,default='No Course')
    whatsapp_number = models.CharField(max_length=14, null=True)
    isPaid = models.BooleanField(default=False)
    activation_token = models.CharField(max_length=32, null=True, blank=True)
    is_active = models.BooleanField(default=None)
    is_staff = models.BooleanField(default=False)
    image = models.ImageField(null=True, upload_to=recipe_image_file_path)


    objects = UserManager()
    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email


class Message(models.Model):
    subject = models.CharField(max_length=255)
    content = models.TextField()
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='messages')

class SubscribeEmail(models.Model):
    email = models.EmailField()

    def __str__(self):
        return self.email
