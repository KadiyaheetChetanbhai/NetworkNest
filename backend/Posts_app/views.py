from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostsSerializer

class MediaUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import UpdatePostSerializer, DeletePostSerializer
from .models import Posts  # Assuming your model is called Posts

class Update_Post(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Posts.objects.all()  # Define the queryset
    serializer_class = UpdatePostSerializer

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.serializer_class(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Delete_Post(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Posts.objects.all()  # Define the queryset
    serializer_class = DeletePostSerializer

    def destroy(self, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
