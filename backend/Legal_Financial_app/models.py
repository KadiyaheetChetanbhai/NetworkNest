from django.db import models
from django.conf import settings


class Financial(models.Model):
    f_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='financial_profiles',
        default=1
    )
    financial_assets = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    revenue = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    expenses = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    net_income = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    liquidity_ratios = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    profitability_ratios = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    pat_margins = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"Financial Profile of {self.user.username}"  # Adjust if using a custom User model


class Legal(models.Model):
    l_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='legal_profiles',
        default=1
    )
    case_name = models.CharField(max_length=100)
    case_description = models.TextField(null=True, blank=True)
    date_posted = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"Legal Case: {self.case_name}"
