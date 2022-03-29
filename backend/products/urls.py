from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('api/getCategories/', views.getCategories, name='getCategories'),
    path('api/allProducts/', views.getAllProducts, name='AllProducts'),
]