from django.db import models
from django.contrib.auth.models import User
import cloudinary.uploader
import cloudinary.api
from cloudinary.models import CloudinaryField
from crud import settings

# Create your models here.
class Posts(models.Model):
    Post_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True,related_name='posts_as_post_id')
    title = models.CharField(max_length=100)
    caption = models.TextField(null=True)
    Video_content = CloudinaryField('videos',blank=True, null=True)
    Image_content = CloudinaryField('images',blank=True, null=True)
    Blobs_content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title