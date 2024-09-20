from rest_framework import serializers, status
from .models import *
from rest_framework.response import Response

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = [ 'user', 'title', 'caption', 'Media_url', 'blog_content', 'created_at','date_posted']
        read_only_fields = [ 'created_at', 'user','date_posted']



