# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from api import serializers
from rest_framework import permissions, viewsets
from django.contrib.auth.models import User


class BroadcastList(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = serializers.BroadcastSerializer
    queryset = serializer_class.Meta.model.objects.all()

    def perform_create(self, serializer):
        user = User.objects.get(username=self.request.user)
        serializer.save(instructor=user, premium=user.is_staff)

class CategoryList(viewsets.ModelViewSet):
    serializer_class = serializers.CategorySerializer
    queryset = serializer_class.Meta.model.objects.all()
