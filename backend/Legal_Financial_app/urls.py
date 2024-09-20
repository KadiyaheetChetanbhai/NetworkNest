from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import Create_Financial, Create_Legal, Delete_Financial, Delete_Legal, Update_Financial, Update_Legal
# from views import*


router= DefaultRouter()
router.register(r'CreateFinData',Create_Financial,basename='CreateFinData')
router.register(r'CreateLegalData',Create_Legal , basename='CreateLegalData')
router.register(r'updateFin',Update_Financial , basename='updateFin')
router.register(r'updateLegal',Update_Legal , basename='updateLegal')
router.register(r'deleteFin',Delete_Financial , basename='deleteFin')
router.register(r'deleteLegal',Delete_Legal , basename='deleteLegal')



urlpatterns = [
    path('', include(router.urls)),
]
