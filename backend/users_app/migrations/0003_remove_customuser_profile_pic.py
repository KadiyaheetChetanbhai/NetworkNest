# Generated by Django 5.1 on 2024-08-24 08:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users_app', '0002_customuser_bio_customuser_profile_pic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='profile_pic',
        ),
    ]