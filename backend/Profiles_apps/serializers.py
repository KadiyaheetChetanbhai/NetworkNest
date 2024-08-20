from .models import * 
from rest_framework import serializers
from django.contrib.auth import get_user_model

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {'user': {'read_only': True}}
        
    def create(self, validated_data):
        profile = Profile.objects.create(**validated_data)
        return profile

    def update(self, instance, validated_data):
        instance.bio = validated_data.get('bio', instance.bio)
        instance.profile_pic = validated_data.get('profile_pic', instance.profile_pic)
        instance.website = validated_data.get('website', instance.website)
        instance.isenterprenuer = validated_data.get('isenterprenuer', instance.isenterprenuer)
        instance.isinvestor = validated_data.get('isinvestor', instance.isinvestor)
        instance.isenthustiast = validated_data.get('isenthustiast', instance.isenthustiast)
        instance.save()
        return instance
    
    def Retrive(self, instance):
        return instance
    

    def delete(self, instance):
        instance.delete()
        return instance