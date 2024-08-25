from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import *
from .models import * 
from rest_framework.response import Response

from .serializers import PostsSerializer 

class Create_Post(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostsSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        

class Update_Post(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = UpdatePostSerializer        
    def update(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        
class Delete_Post(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = DeletePostSerializer        
    def delete(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)        
