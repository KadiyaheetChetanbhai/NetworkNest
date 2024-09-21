
from .views import FundingViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'raise_funding', FundingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

