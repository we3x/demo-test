from restApi import serializers
from rest_framework import permissions, viewsets
from django.contrib.auth.models import User
from .permissions import IsReadOnly


class BroadcastList(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = serializers.BroadcastSerializer
    queryset = serializer_class.Meta.model.objects.all()

    def perform_create(self, serializer):
        user = User.objects.get(username=self.request.user)
        serializer.save(instructor=user, premium=user.is_staff)

class CategoryList(viewsets.ModelViewSet):
    permission_classes = (IsReadOnly,)
    serializer_class = serializers.CategorySerializer
    queryset = serializer_class.Meta.model.objects.all()

class MeViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MeSerializer
    def get_queryset(self):
        user = self.request.user
        return [user]
