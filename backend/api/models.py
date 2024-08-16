from django.db import models
from django.conf import settings

# Create your models here.
class api(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_url = models.URLField()  # Assume video is stored in Cloudinary
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # Add tags, likes, and comments fields if needed

def __str__(self):
    return self.title