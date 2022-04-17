from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import CategorySerializer, ProductSerializer, ProductSellerSerializer
from .models import Category, Product, Product_Seller
from authapp.models import User


@api_view(["POST"])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def getAllProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def getProduct(request):
    product_id = request.query_params["product_id"]
    products = Product.objects.get(id=product_id)
    serializer = ProductSerializer(products)
    return Response(serializer.data)


@api_view(["POST"])
def getProductSellers(request):
    product_id = request.query_params["product_id"]
    sellers_from_mtm = Product_Seller.objects.filter(product_id=product_id, count__gt=0)
    seller_ids = []
    for seller in sellers_from_mtm:
        seller_ids.append(seller.seller_id)
    sellers = User.objects.filter(id__in=seller_ids)
    serializer = ProductSellerSerializer(sellers, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getRoutes(request):
    routes = [
        "/api/getCategories/",
        "/api/allProducts/",
        "api/product/?product_id=xxx",
        "api/product/sellers/?product_id=xxx",
    ]

    return Response(routes)
