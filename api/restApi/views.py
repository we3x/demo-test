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

class PremiumBroadcastList(viewsets.ModelViewSet):
    permission_classes = (IsReadOnly,)
    serializer_class = serializers.BroadcastSerializer
    queryset = serializer_class.Meta.model.objects.all().filter(premium=True)

class NormalBroadcastList(viewsets.ModelViewSet):
    permission_classes = (IsReadOnly,)
    serializer_class = serializers.BroadcastSerializer
    queryset = serializer_class.Meta.model.objects.all().filter(premium=False)

class CategoryList(viewsets.ModelViewSet):
    permission_classes = (IsReadOnly,)
    serializer_class = serializers.CategorySerializer
    queryset = serializer_class.Meta.model.objects.all()
