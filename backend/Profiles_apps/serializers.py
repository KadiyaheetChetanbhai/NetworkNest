from .models import * 
from rest_framework import serializers
from django.contrib.auth import get_user_model


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user_id','username','bio','profile_pic','website','isenterprenuer','isinvestor','isenthustiast')
        extra_kwargs = {'user_id': {'read_only': True}}
    