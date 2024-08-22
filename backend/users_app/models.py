from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver 
from django.urls import reverse 
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags


class CustomUserManager(BaseUserManager): 
    def create_user(self, email, username=None, bio=None, profile_pic=models.ImageField(upload_to='/profile_pics', height_field=None, width_field=None, max_length=None), password=None, **extra_fields): 
        if not email: 
            raise ValueError('Email is a required field')
        email = self.normalize_email(email)
        
        user = self.model(
            email=email,
            username=username,
            bio=bio,
            profile_pic=profile_pic,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username=None, bio=None, profile_pic=None, password=None, **extra_fields): 
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        # Default values for superusers
        if username is None:
            username = 'admin'
        if bio is None:
            bio = 'Admin user'
        if profile_pic is None:
            profile_pic = 'default_profile_pic/photos.jpg'

        return self.create_user(email, username, bio, profile_pic, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    birthday = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=200, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


