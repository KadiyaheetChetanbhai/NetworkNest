from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet,PostretriveSerializer

router = DefaultRouter()
router.register(r'Create', PostViewSet)
router.register(r'List', PostretriveSerializer, basename='List')


urlpatterns = [
    path('', include(router.urls)),
]