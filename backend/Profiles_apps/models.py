from django.db import models
from users_app.models import CustomUser      ## imported models from users_app to use the basic features of User model




# Create your models here.

# extending the schema of user model to add more fields
# New fields profile_pic,linkdin,github urls,isenterprenuer,isinvestor,isenthustiast are added to the user model 


class Profile(models.Model):
    image=models.ImageField(upload_to='profile_pics/',null=True,blank=True)    
   
    def __str__(self):
        return self.username