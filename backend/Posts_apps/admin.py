from django.contrib import admin

from Posts_apps.models import Posts, Comments

# Register your models here.
admin.site.register(Posts)
admin.site.register(Comments)