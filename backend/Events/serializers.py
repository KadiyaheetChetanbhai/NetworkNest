from rest_framework import serializers
from .models import Event  # Import the Event model


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'date', 'location', 'description']
        read_only_fields = ['event_id']
        # premission_classes = ['IsAuthenticated']