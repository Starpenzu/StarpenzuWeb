"""
Views for the user API
"""
import secrets

from django.conf import settings
from django.contrib.auth.tokens import default_token_generator, PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage, send_mail
from django.utils.encoding import force_str
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework.decorators import action
from rest_framework import authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import GenericAPIView
from rest_framework.settings import api_settings
from rest_framework.views import APIView
from user.serializers import (UserSerializer, AuthTokenSerializer, UserImageSerializer, PasswordResetSerializer,
                              PasswordResetConfirmSerializer, ResendActivationSerializer, SendEmailSerializer, SubscribeEmailSerializer, MessageSerializer)
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from core.models import User, SubscribeEmail, Message
from django.shortcuts import redirect
from django.http import Http404


class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system."""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user."""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(viewsets.ViewSetMixin, generics.RetrieveUpdateAPIView):
    """Manage the authenticated user and edit data."""
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve and return the authenticated user."""
        return self.request.user

    def get_serializer_class(self):
        if self.action == 'uploaded_image':
            return UserImageSerializer
        return self.serializer_class

    @action(methods=['POST'], detail=True, url_path='upload-image')
    def upload_image(self, request, pk=None):
        """upload an image to user"""
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivateView(generics.GenericAPIView):
    """
    Activates the user's account using the activation token.
    """
    serializer_class = UserSerializer

    def get(self, request, token):
        # Activate the user's account
        user = User.objects.activate(token)
        if user:
            # Redirect to a success page
            return redirect('starpenzu.com')
        else:
            # Return an error response
            return Response({'error': 'Invalid activation token'}, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetView(GenericAPIView):
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        email = user.email

        # Generate a unique token for the password reset
        token_generator = PasswordResetTokenGenerator()
        uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
        token = token_generator.make_token(user)
        reset_url = reverse('user:password_reset_confirm', kwargs={'uidb64': str(uidb64), 'token': str(token)})

        # Send the password reset email to the user
        send_mail(
            'Password Reset Request',
            f'Please click the following link to reset your password: {reset_url}',
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )
        response_data = {
            'detail': 'Password reset email sent.',
            'uidb64': uidb64,
            'token': token,
        }

        return Response(response_data, status=status.HTTP_200_OK)


class PasswordResetConfirmView(generics.GenericAPIView):
    serializer_class = PasswordResetConfirmSerializer

    def post(self, request, uidb64, token):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        password = serializer.validated_data['password']

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({'detail': 'Invalid user.'}, status=status.HTTP_400_BAD_REQUEST)

        token_generator = PasswordResetTokenGenerator()
        if not token_generator.check_token(user, token):
            return Response({'detail': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(password)
        user.save()

        return Response({'detail': 'Password reset successful.'}, status=status.HTTP_200_OK)


class ResendActivationView(APIView):
    """Resend Activation mail"""
    serializer_class = ResendActivationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        if user.is_active:
            return Response({'error': 'User is already activated.'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate a new activation token
        token = secrets.token_hex(16)
        user.activation_token = token
        user.save()

        # Send the activation email to the user
        activation_link = reverse('core:activate', kwargs={'token': token})
        email_subject = 'Activate your account'
        current_site = get_current_site(request)
        email_body = f'Please click the following link to activate your account: http://{current_site.domain}{activation_link}'
        email = EmailMessage(subject=email_subject, body=email_body, to=[email],
                             from_email='landingpage@jaromtravels.com')
        email.send()

        return Response({'detail': 'Activation email sent.'}, status=status.HTTP_200_OK)


class SendEmailView(GenericAPIView):
    """Sends Emails to Specific users"""
    serializer_class = SendEmailSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        data = serializer.validated_data
        name = data['name']
        email = data['email']
        message = data['message']
        subject = 'Test email'
        message = f'From {name} Email: {email}, {message}.'
        from_email = 'landingpage@jaromtravels.com'
        recipient_list = ['landingpage@jaromtravels.com']
        send_mail(subject, message, from_email, recipient_list)

        return Response({'success': 'Email sent'}, status=status.HTTP_200_OK)


class SendMessageToAllUsersView(generics.CreateAPIView):
    serializer_class = MessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Send email to all users in the database
        recipients = User.objects.all()  # Retrieve all users
        subject = serializer.validated_data['subject']
        email_body = serializer.validated_data['content']
        from_email = 'landingpage@jaromtravels.com'  # Specify the "from" email address

        for recipient in recipients:
            # Store the message in the database for each user
            Message.objects.create(user=recipient, subject=subject, content=email_body)
            # Code to send email to recipient.email with the message goes here
            email = EmailMessage(subject, email_body, from_email, to=[recipient.email])
            email.send()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SendMessageToUserView(generics.CreateAPIView):
    serializer_class = MessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        recipient_email = request.data.get('email')
        email_body = serializer.validated_data['content']
        from_email = 'landingpage@jaromtravels.com'  # Specify the "from" email address
        subject = serializer.validated_data['subject']
        try:
            user = User.objects.get(email=recipient_email)
        except User.DoesNotExist:
            return Response({"error": "User with the provided email does not exist."},
                            status=status.HTTP_404_NOT_FOUND)

        Message.objects.create(user=user, subject=subject, content=email_body)
        # user = User.objects.get(email='philipoluseyi@gmail.com')
        # messages = user.messages.all()
        # print(messages)

        email = EmailMessage(subject, email_body, from_email, to=[recipient_email])
        email.send()

        return Response(serializer.data, status=status.HTTP_201_CREATED)



class UserMessagesView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        # Retrieve the user based on the provided email from URL path
        email = self.kwargs['email']
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise Http404("User not found.")  # Return an empty queryset if user not found
        # Retrieve the messages associated with the user
        return Message.objects.filter(user=user)



class SubscribeEmailView(APIView):
    serializer_class = SubscribeEmailSerializer

    def get(self, request):
        emails = SubscribeEmail.objects.all()
        serializer = self.serializer_class(emails, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)