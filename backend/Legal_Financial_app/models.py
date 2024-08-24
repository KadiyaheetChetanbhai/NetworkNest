from django.db import models
from django.contrib.auth.models import User
import cloudinary.uploader
import cloudinary.api
from cloudinary.models import CloudinaryField
from crud import settings

# Create your models here.
class Legal_Financial(models.Model):
    Legal_Financial_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True,related_name='Legal_Financial_as_Legal_Financial_id')
    Financial_Assests= models.DecimalField(null=True, max_digits=10, decimal_places=2)
    # fininacial liabilities,incomestatements, balance sheets, revenue, expenses, and net income,liqiudity ratios, profitability ratios
    liabilities = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    income_statements = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    balance_sheets = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    revenue = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    expenses = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    net_income = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    liquidity_ratios = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    profitability_ratios = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.Legal_Financial_name
    
class legal(models.Model):
    Legal_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True,related_name='legal_as_Legal_id')
    Case_name = models.CharField(max_length=100)
    Case_description = models.TextField(null=True)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.Legal_name
    