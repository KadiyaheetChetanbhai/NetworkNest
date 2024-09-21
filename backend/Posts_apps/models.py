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
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_posts', blank=True)

    def __str__(self):
        return self.title

    @property
    def total_likes(self):
        return self.likes.count()
    
    def __str__(self):
        return self.title
    
class Comments(models.Model):
    comment_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.user} on {self.post.title}'

