from dataclasses import field
from rest_framework import serializers

from .models import Category, Product, Prices, ProductImage, Product_Seller, Sellers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id' ,'parent', 'title']

class ImageSerializer(serializers.ModelSerializer):
    file = serializers.CharField(source='file.url')
    class Meta:
        model = ProductImage
        fields = ['file']
        
class ProductSerializer(serializers.ModelSerializer):
    price = serializers.CharField(source='price.price')
    item_category = serializers.CharField(source='item_category.title')
    images = ImageSerializer(read_only=True, many=True)
    
    class Meta:
        model = Product
        fields = ['id' ,'title' ,'description', 'time', 'price', 'item_category','images']
        
class ProductSellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sellers
        fields = ['seller_id', 'name']