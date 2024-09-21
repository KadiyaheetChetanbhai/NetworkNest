from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import LegalViewSet, FinancialViewSet


router= DefaultRouter()
router.register(r'LegalData',LegalViewSet,basename='FinData')
router.register(r'FinData',FinancialViewSet , basename='LegalData')




urlpatterns = [
    path('', include(router.urls)),
]
