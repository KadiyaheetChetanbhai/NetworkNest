from django.http import Http404
from django.shortcuts import render
from rest_framework.response import Response  

# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Posts
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
  #  permission_classes = [IsAuthenticated]    ## this to be done 

   