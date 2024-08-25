from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MediaUploadView, Update_Post, Delete_Post

router = DefaultRouter()
router.register(r'update-post', Update_Post, basename='update-post')
router.register(r'delete-post', Delete_Post, basename='delete-post')

urlpatterns = [
    path('media/', MediaUploadView.as_view(), name='media-upload'),  # Regular APIView
    path('', include(router.urls)),  # ViewSets
]
