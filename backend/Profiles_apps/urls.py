from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import * 

router = DefaultRouter()
#router.register('ModelName', Modelviewsetname, basename='any name')
router.register('Profiles', ProfileViewset, basename='Profiles')
router.register('Update', UpdateViewset, basename='Update')
router.register('Delete', ModelDeleteViewset, basename='Delete')
urlpatterns = router.urls