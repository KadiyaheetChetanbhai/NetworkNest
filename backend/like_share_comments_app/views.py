from django.shortcuts import render

from rest_framework import generics
from .models import Like, Comment
from .serializers import LikeSerializer, CommentSerializer



class LikeCreateView(generics.CreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentCreateView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
