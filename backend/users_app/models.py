from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager): 
    def create_user(self, email, username=None, bio=None, password=None, **extra_fields): 
        if not email: 
            raise ValueError('Email is a required field')
        email = self.normalize_email(email)
        
        user = self.model(
            email=email,
            username=username,
            bio=bio,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username=None, bio=None, password=None, **extra_fields): 
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        # Default values for superusers
        if username is None:
            username = 'admin'
        if bio is None:
            bio = 'Admin user'
       
        return self.create_user(email, username, bio, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    birthday = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=200, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


