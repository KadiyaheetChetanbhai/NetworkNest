from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import FinancialSerializer, LegalSerializer
from .models import * 
from rest_framework.response import Response



## to get the list of the legal and financial data
class Retrive_Financial(viewsets.ModelViewSet):         ## the ModelViewset provides the CRUD operations by default 
    permission_classes = [permissions.AllowAny]
    serializer_class = FinancialSerializer
    def list(self,request):
        queryset = Financial.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class Retrive_Legal(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LegalSerializer
    def list(self,request):
        queryset = legal.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)    
################################################
    

# to create the legal and financial data
class Create_Financial(viewsets.ModelViewSet):                         
    permission_classes = [permissions.IsAuthenticated]            # this is to allow user to create the financial data 
    serializer_class = FinancialSerializer                        # Financial serializers is the security guard  of the data (means checks the incoming or outgoin data)

    def create(self,request, *args, **kwargs):                    # args and kwargs are used to pass the variable number of arguments to a function means
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        
class Create_Legal(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LegalSerializer                            # Legal serializers is the security guard  of the data (means checks the incoming or outgoin data)

    def create(self,request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        
####################################################



## to update the legal and financial data
class Update_Financial(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = FinancialSerializer        
    def update(self,request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        

class Update_Legal(viewsets.ModelViewSet):  
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LegalSerializer        
    def update(self,request,*args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        
##############################################################



## to delete the legal and financial data
class Delete_Financial(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = FinancialSerializer        
    def delete(self,request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)
        
class Delete_Legal(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LegalSerializer        
    def delete(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()                                        # to save  the database table 
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)                                      
##############################################################        