from django.db import models
from crud import settings

# Create your models here.
class Posts(models.Model):
    Post_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True,related_name='posts_as_post_id')
    title = models.CharField(max_length=100)
    caption = models.TextField(null=True)
    Media_url = models.URLField(max_length=500,null=True)
    Blobs_content = models.TextField(null=True)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title