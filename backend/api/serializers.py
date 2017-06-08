from api.models import Broadcast, Category
from rest_framework import serializers


class BroadcastSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')
    instructor = serializers.ReadOnlyField(source='instructor.username')
    premium = serializers.ReadOnlyField()
    class Meta:
        model = Broadcast
        fields = ('title', 'startTime', 'instructor', 'category', 'premium')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name')
