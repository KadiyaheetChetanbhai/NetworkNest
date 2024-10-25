from .views import CompanyViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'myCompany', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

