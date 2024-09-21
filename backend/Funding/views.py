from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Funding
from .serializers import Fundingserializer

class FundingViewSet(viewsets.ModelViewSet):
    queryset = Funding.objects.all().order_by('-posted_at')
    serializer_class = Fundingserializer
   # permission_classes = [IsAuthenticated]

  
