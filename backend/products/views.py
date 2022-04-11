from asyncio.windows_events import NULL
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import CategorySerializer, ProductSerializer
from .models import Category, Product

@api_view(['POST'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def getAllProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def getProduct(request, productid):
    return Response(NULL)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/getCategories/',
        '/api/allProducts/',
    ]

    return Response(routes)