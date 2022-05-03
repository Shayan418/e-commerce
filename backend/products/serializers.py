from dataclasses import field
from rest_framework import serializers

from authapp.models import User

from .models import Category, Product, ProductImage, Wishlist, Cart, Orders


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

class CartCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
    
    def create(self, validated_data):
        cartObject = Cart.objects.create(
            active = True,
            buyer = self.context.get("request").user,
            product = validated_data["product"],
            seller = validated_data["seller"]
        )
        return cartObject

class CartItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ["product_id", "seller_id"]
    
class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'
        
    def create(self, validated_data):
        print(self.context.get("request").user)
        cartObject = Orders.objects.create(
            active = True,
            order_id = self.context.get("orderid"),
            buyer = self.context.get("request").user,
            product = validated_data["product"],
            seller = validated_data["seller"]
        )
        return cartObject