from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['post_id', 'user', 'title', 'caption', 'Media_url', 'blog_content', 'created_at','date_posted']
        read_only_fields = ['post_id', 'created_at', 'user','date_posted']



