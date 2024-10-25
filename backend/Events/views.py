from django.shortcuts import render

from .serializers import EventSerializer
from .models import Event  # Import the Event model
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer
    #permission_classes = [IsAuthenticated]