from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import FinancialSerializer, LegalSerializer
from .models import * 
from rest_framework.response import Response



class LegalViewSet(viewsets.ModelViewSet):
    queryset = Legal.objects.all()
    serializer_class = LegalSerializer
    #permission_classes = [permissions.IsAuthenticated]

class FinancialViewSet(viewsets.ModelViewSet):
    queryset = Financial.objects.all()
    serializer_class = FinancialSerializer
    #permission_classes = [permissions.IsAuthenticated]    