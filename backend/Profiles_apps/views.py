from django.shortcuts import render
from rest_framework import viewsets, permissions,status 
from .serializers import * 
from .models import * 
from rest_framework.response import Response 
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken

User = get_user_model()

class ProfileViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.AllowAny]
    def Retrive(self):
        instance= self.get_object()
        return Response({'user': instance})
    
    
class UpdateViewset(viewsets.ViewSet):
    def update(self, request, pk=None):
        user = User.objects.get(pk=pk)
        serializer = ProfileSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ModelDeleteViewset(viewsets.ViewSet):
    def destroy(self, pk=None):
        user = User.objects.get(pk=pk)
        user.delete()
        return Response({'message': 'User deleted'}, status=status.HTTP_204_NO_CONTENT)

    

   