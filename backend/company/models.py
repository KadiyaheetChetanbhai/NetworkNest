from django.conf import settings
from django.db import models

# Create your models here.
class Company(models.Model):
    company_id=models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=100)
    owned_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,default=1)

    def __str__(self):
        return self.company_name