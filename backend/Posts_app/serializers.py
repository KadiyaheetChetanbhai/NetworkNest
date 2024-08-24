from rest_framework import serializers 
from .models import * 
from .views import *


class PostsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Posts
        fields=('Post_id','title','caption','Video_content','Image_content','Blobs_content','date_posted','createdBy')
    
    def createPost(self, validated_data):
        posts = Posts.objects.Create_Post(**validated_data)
        return posts
    

class UpdatePostSerializer(serializers.ModelSerializer):    
    def updatePost(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.caption = validated_data.get('caption', instance.caption)
        instance.Video_content = validated_data.get('Video_content', instance.Video_content)
        instance.Image_content = validated_data.get('Image_content', instance.Image_content)
        instance.Blobs_content = validated_data.get('Blobs_content', instance.Blobs_content)
        instance.author = validated_data.get('author', instance.author)
        instance.save()
        return instance
    
class DeletePostSerializer(serializers.ModelSerializer):    
    def deletePost(self, instance):
        instance.delete()
        return instance
    