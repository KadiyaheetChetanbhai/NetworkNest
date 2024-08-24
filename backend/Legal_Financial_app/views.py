from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import FinancialSerializer, LegalSerializer, UpdateFinancialSerializer, DeleteFinancialSerializer, UpdateLegalSerializer, DeleteLegalSerializer
from .models import * 
from rest_framework.response import Response

# Create your views here.
class Create_Financial(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = FinancialSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)

class Update_Financial(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = UpdateFinancialSerializer        
    def update(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)

class Delete_Financial(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = DeleteFinancialSerializer        
    def delete(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
class Create_Legal(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LegalSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
class Update_Legal(viewsets.ViewSet):  
    permission_classes = [permissions.AllowAny]
    serializer_class = UpdateLegalSerializer        
    def update(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
class Delete_Legal(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = DeleteLegalSerializer        
    def delete(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)                                      