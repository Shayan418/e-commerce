from rest_framework import serializers

from .models import Category

class serializeCategory(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id' ,'parent', 'title']