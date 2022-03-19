from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import serializeCategory
from .models import Category

@api_view(['POST'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = serializeCategory(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/getCategories/',
    ]

    return Response(routes)