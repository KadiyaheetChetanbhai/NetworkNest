# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HiringViewSet, JobApplicationViewSet

router = DefaultRouter()
router.register(r'hirings', HiringViewSet)
router.register(r'applications', JobApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
