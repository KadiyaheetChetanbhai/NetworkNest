from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['company_id', 'company_name', 'owned_by'] 
        read_only_fields = ['company_id','owned_by']
        # premission_classes = ['IsAuthenticated']
                  
       