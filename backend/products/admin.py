from django.contrib import admin
from .models import Category, Product, ProductImage, Prices, Sellers, Wishlist, Cart, Product_Seller
# Register your models here.

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Prices)
admin.site.register(Sellers)
admin.site.register(Wishlist)
admin.site.register(Cart)
admin.site.register(Product_Seller)

