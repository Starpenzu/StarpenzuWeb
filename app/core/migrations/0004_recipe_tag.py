# Generated by Django 4.0.10 on 2023-02-25 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='tag',
            field=models.ManyToManyField(to='core.tag'),
        ),
    ]
