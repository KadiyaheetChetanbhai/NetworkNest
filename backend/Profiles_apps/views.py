from rest_framework import viewsets, permissions,status 
from .serializers import * 
from .models import * 
from rest_framework.response import Response 
from django.contrib.auth import get_user_model


User = get_user_model()

class ProfileViewset(viewsets.ModelViewSet):
    queryset= User.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.AllowAny]
    
    def Retrive(self):
        queryset = User.objects.all()
        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)
    def update(self, request):
        instance = self.get_object()
        serializer = ProfileSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)