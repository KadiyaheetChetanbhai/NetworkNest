from django.urls import path
from .views import LikeCreateView, CommentCreateView

urlpatterns = [
    path('like/', LikeCreateView.as_view(), name='like-create'),
    path('comment/', CommentCreateView.as_view(), name='comment-create'),
]
