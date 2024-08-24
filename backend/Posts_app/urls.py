from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import Create_Post, Update_Post, Delete_Post
router= DefaultRouter()
router.register('Createpost',Create_Post , basename='Create_post')
router.register('Updatepost',Update_Post , basename='Update_post')
router.register('Deletepost',Delete_Post , basename='Delete_post')  
urlpatterns = router.urls

