from django.contrib import admin

from .models import JobApplication, Hiring


# Register your models here.
admin.site.register(Hiring)
admin.site.register(JobApplication)