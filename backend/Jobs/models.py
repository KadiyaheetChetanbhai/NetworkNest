
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User


# for hiring 
class Hiring(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    posted_at = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,default=1)  # The user who posted the job
    Hiring_id = models.AutoField(primary_key=True)
    def __str__(self):
        return self.title

class JobApplication(models.Model):
    Jobs_id = models.AutoField(primary_key=True)
    hiring = models.ForeignKey(Hiring, on_delete=models.CASCADE,default=1)
    applicant = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # The user applying for the job
    resume = models.FileField(upload_to='resumes/')  # Path for resume upload

    def __str__(self):
        return f"{self.applicant.username} - {self.hiring.title}"