from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	
    # @action(detail=True, methods=['post'])
    # def like(self, request, pk=None):
    # 	blogpost = self.get_object()
    # 	# Add logic to like the blog post
    # 	return Response({'status': 'blog post liked'})