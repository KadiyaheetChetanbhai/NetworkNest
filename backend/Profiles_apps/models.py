from django.db import models
from users_app.models import CustomUser      ## imported models from users_app to use the basic features of User model
# Create your models here.

# extending the schema of user model to add more fields
# New fields like bio,profile_pic,website urls,isenterprenuer,isinvestor,isenthustiast are added to the user model 

class Profile(models.Model):
    
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    username = models.CharField(max_length=254, blank=True)
    bio = models.TextField(blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics',blank=True)
    website = models.URLField(blank=True)
    isenterprenuer = models.BooleanField(default=False)
    isinvestor = models.BooleanField(default=False)
    isenthustiast = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username