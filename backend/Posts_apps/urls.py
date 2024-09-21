from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'Post_part', PostViewSet)
router.register(r'comments', CommentViewSet, basename='comments')



urlpatterns = [
    path('', include(router.urls)),
]