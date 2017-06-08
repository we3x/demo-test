# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from api import serializers
from api.models import Broadcast
from rest_framework import permissions, viewsets


class BroadcastList(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = serializers.BroadcastSerializer
    queryset = serializer_class.Meta.model.objects.all()

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user, premium=False, category=0)

class Category(viewsets.ModelViewSet):
    serializer_class = serializers.CategorySerializer
    queryset = serializer_class.Meta.model.objects.all()
