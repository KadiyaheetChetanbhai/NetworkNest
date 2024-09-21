from django.conf import settings
from django.db import models

# Create your models here.
class Funding(models.Model):
    Funding_for = models.TextField()
    Amount = models.IntegerField()
    Description = models.TextField()
    Funding_RequestedBy = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,default=1,related_name='Funding_RequestedBy',blank=True,null=True);
    posted_at = models.DateTimeField(auto_now_add=True)
    Funding_id = models.AutoField(primary_key=True)
    Funding_providedBy = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='Funding_providedby',blank=True,null=True)

    def __str__(self):
        return f"Funding {self.Funding_id} for {self.Funding_for}"