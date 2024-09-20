from rest_framework import serializers, permissions
from .models import Financial, Legal


class FinancialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Financial
        fields = [
            'f_id',
            'user',
            'financial_assets',
            'revenue',
            'expenses',
            'net_income',
            'liquidity_ratios',
            'profitability_ratios',
            'pat_margins',
            'date_posted'
        ]
        read_only_fields = ['user', 'date_posted', 'f_id']
        permission_classes = [permissions.IsAuthenticated]

class LegalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legal
        fields = [
            'l_id',
            'user',
            'case_name',
            'case_description',
            'date_posted'
        ]
        read_only_fields = ['user', 'date_posted', 'l_id']
        permission_classes = [permissions.IsAuthenticated]