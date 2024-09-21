
from rest_framework import serializers
from .models import Hiring, JobApplication

class HiringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hiring
        fields = ['title', 'description', 'company_name', 'location', 'salary', 'posted_at', 'posted_by']
        read_only_fields = ['posted_at', 'posted_by']
       # premission_classes = ['IsAuthenticated']

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['hiring', 'applicant', 'resume']
        read_only_fields = ['applicant']
       # premission_classes = ['IsAuthenticated']

