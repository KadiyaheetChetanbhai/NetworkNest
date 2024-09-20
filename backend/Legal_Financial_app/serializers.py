from rest_framework import serializers 
from .models import * 
from .views import *

class FinancialSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Financial
        fields=('Financial_id','Financial_Assests','PAT_margins','revenue','expenses','net_income','liquidity_ratios','profitability_ratios','date_posted')
        read_only_fields = ('date_posted','Financial_id')
    
class LegalSerializer(serializers.ModelSerializer):
    class Meta: 
        model = legal
        fields=('Legal_id','Case_name','Case_description','date_posted','createdBy')
        read_only_fields = ('createdBy','date_posted','Legal_id')