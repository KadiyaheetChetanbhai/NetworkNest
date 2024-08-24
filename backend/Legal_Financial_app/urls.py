from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import Create_Financial, Update_Financial, Delete_Financial, Create_Legal, Update_Legal, Delete_Legal
router= DefaultRouter()
router.register('uploadfinancial',Create_Financial , basename='Create_Financial')
router.register('Updatefinancial',Update_Financial , basename='update_Financial')
router.register('deletefinancials',Delete_Financial , basename='delete_Financial')  
router.register('createlegal',Create_Legal , basename='Create_Legal')
router.register('updatelegal',Update_Legal , basename='update_Legal')
router.register('deletelegal',Delete_Legal , basename='delete_Legal')
urlpatterns = router.urls
