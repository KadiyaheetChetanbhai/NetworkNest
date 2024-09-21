
from rest_framework import viewsets
from .models import Hiring, JobApplication
from .serializers import HiringSerializer, JobApplicationSerializer

class HiringViewSet(viewsets.ModelViewSet):
    queryset = Hiring.objects.all()
    serializer_class = HiringSerializer

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
