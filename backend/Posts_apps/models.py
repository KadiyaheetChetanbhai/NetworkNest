from django.conf import settings
from django.db import models

# Create your models here.
class Posts(models.Model):
    post_id=models.AutoField(primary_key=True)    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts', default=1)
    title = models.CharField(max_length=100)
    caption = models.TextField(null=True)
    Media_url = models.URLField(max_length=500, null=True)
    blog_content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)
    
    def __str__(self):
        return self.title

