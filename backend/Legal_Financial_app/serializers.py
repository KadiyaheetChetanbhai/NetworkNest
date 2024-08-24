from rest_framework import serializers 
from .models import * 
from .views import *

class FinancialSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Legal_Financial
        fields=('Legal_Financial_id','Financial_Assests','liabilities','income_statements','balance_sheets','revenue','expenses','net_income','liquidity_ratios','profitability_ratios','date_posted','createdBy')
    
    def createFinancial(self, validated_data):
        financial = Legal_Financial.objects.Create_Financial(**validated_data)
        return financial
    
class UpdateFinancialSerializer(serializers.ModelSerializer):    
    def updateFinancial(self, instance, validated_data):
        instance.Financial_Assests = validated_data.get('Financial_Assests', instance.Financial_Assests)
        instance.liabilities = validated_data.get('liabilities', instance.liabilities)
        instance.income_statements = validated_data.get('income_statements', instance.income_statements)
        instance.balance_sheets = validated_data.get('balance_sheets', instance.balance_sheets)
        instance.revenue = validated_data.get('revenue', instance.revenue)
        instance.expenses = validated_data.get('expenses', instance.expenses)
        instance.net_income = validated_data.get('net_income', instance.net_income)
        instance.liquidity_ratios = validated_data.get('liquidity_ratios', instance.liquidity_ratios)
        instance.profitability_ratios = validated_data.get('profitability_ratios', instance.profitability_ratios)
        instance.createdBy = validated_data.get('createdBy', instance.createdBy)
        instance.save()
        return instance

class DeleteFinancialSerializer(serializers.ModelSerializer):    
    def deleteFinancial(self, instance):
        instance.delete()
        return instance

class LegalSerializer(serializers.ModelSerializer):
    class Meta: 
        model = legal
        fields=('Legal_id','Case_name','Case_description','date_posted','createdBy')
    
    def createLegal(self, validated_data):
        legal = legal.objects.Create_Legal(**validated_data)
        return legal

class UpdateLegalSerializer(serializers.ModelSerializer):    
    def updateLegal(self, instance, validated_data):
        instance.Case_name = validated_data.get('Case_name', instance.Case_name)
        instance.Case_description = validated_data.get('Case_description', instance.Case_description)
        instance.createdBy = validated_data.get('createdBy', instance.createdBy)
        instance.save()
        return instance

class DeleteLegalSerializer(serializers.ModelSerializer):  
    def deleteLegal(self, instance):
        instance.delete()
        return instance                    