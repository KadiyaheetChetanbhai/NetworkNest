from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings

class InvestorProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    investment_preferences = models.CharField(max_length=255)


class InvestorPost(models.Model):
    investor = models.ForeignKey(InvestorProfile, on_delete=models.CASCADE)
    content = models.TextField()
    post_type = models.CharField(max_length=20, choices=(('blog', 'Blog'), ('quote', 'Quote'), ('update', 'Update')))
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.investor.user.username} - {self.post_type}"
