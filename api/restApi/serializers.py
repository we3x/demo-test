from restApi.models import Broadcast, Category
from rest_framework import serializers
from django.contrib.auth.models import User

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=('username',)
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'id',)

class BroadcastSerializer(serializers.ModelSerializer):
    instructor = serializers.ReadOnlyField(source='instructor.username')
    premium = serializers.ReadOnlyField()
    class Meta:
        model = Broadcast
        fields = ('title', 'startTime', 'instructor', 'category', 'premium')
