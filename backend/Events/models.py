from django.db import models

# Create your models here.
class Event(models.Model):
    Event_id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    date = models.DateField()
    location = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name 
    