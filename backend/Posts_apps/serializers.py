from rest_framework import serializers
from .models import Posts, Comments
from django.contrib.auth import get_user_model

User = get_user_model()

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Comments
        fields = ['comment_id', 'post', 'user', 'comment_text', 'created_at']
        read_only_fields = ['comment_id', 'user', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    total_likes = serializers.SerializerMethodField()
    comments = CommentSerializer(many=True, read_only=True)
    likes = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True, required=False)

    class Meta:
        model = Posts
        fields = ['post_id', 'user', 'title', 'caption', 'Media_url', 'blog_content', 'created_at', 'date_posted', 'likes', 'total_likes', 'comments']
        read_only_fields = ['post_id', 'created_at', 'user', 'date_posted', 'total_likes', 'comments']

    def get_total_likes(self, obj):
        return obj.total_likes

    def create(self, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            validated_data['user'] = request.user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'likes' in validated_data:
            instance.likes.set(validated_data['likes'])
            validated_data.pop('likes')
        return super().update(instance, validated_data)
