
from rest_framework import serializers
from .models import Funding

class Fundingserializer(serializers.ModelSerializer):
    class Meta:
        model = Funding
        fields = ['Funding_for','Amount','Description','Funding_RequestedBy','posted_at','Funding_id','Funding_providedBy']
        read_only_fields = ['posted_at','Funding_id','Funding_status','Funding_providedBy','Funding_RequestedBy']
       # premission_classes = ['IsAuthenticated']
