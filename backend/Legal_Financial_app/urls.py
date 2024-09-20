from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import LegalViewSet, FinancialViewSet


router= DefaultRouter()
router.register(r'FinData',LegalViewSet,basename='FinData')
router.register(r'LegalData',FinancialViewSet , basename='LegalData')




urlpatterns = [
    path('', include(router.urls)),
]
