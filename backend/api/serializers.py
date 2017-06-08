from api.models import Broadcast, Category
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

class BroadcastSerializer(serializers.ModelSerializer):
    instructor = serializers.ReadOnlyField(source='instructor.username')
    premium = serializers.ReadOnlyField()
    class Meta:
        model = Broadcast
        fields = ('title', 'startTime', 'instructor', 'category', 'premium')
