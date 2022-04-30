from dataclasses import field
from rest_framework import serializers

from authapp.models import User

from .models import Category, Product, ProductImage, Wishlist


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "parent", "title"]


class ImageSerializer(serializers.ModelSerializer):
    file = serializers.CharField(source="file.url")

    class Meta:
        model = ProductImage
        fields = ["file"]


class ProductSerializer(serializers.ModelSerializer):
    price = serializers.CharField(source="price.price")
    item_category = serializers.CharField(source="item_category.title")
    images = ImageSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "description",
            "time",
            "price",
            "item_category",
            "images",
            "currentSeller",
        ]


class ProductSellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name"]

class WishlistCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = '__all__'
    
    def create(self, validated_data):
        wishlistObject = Wishlist.objects.create(
            active = True,
            user = self.context.get("request").user,
            product = validated_data["product"]
        )
        return wishlistObject