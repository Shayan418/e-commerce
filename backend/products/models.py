from django.db import models
from django_extensions.db.fields import AutoSlugField
from authapp.models import User
from django.db.models.deletion import CASCADE

class Category(models.Model):
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank = True, null=True)
    title = models.CharField(max_length=100) 
    slug = AutoSlugField(populate_from='title', unique=True, null=False, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('slug', 'parent',)    
        verbose_name_plural = "categories"     

    def __str__(self):                           
        full_path = [self.title]                  
        k = self.parent
        while k is not None:
            full_path.append(k.title)
            k = k.parent
        return ' -> '.join(full_path[::-1])

class ProductImage(models.Model):
    file = models.FileField(upload_to="media/productImage/%Y/%m/%d")
    
    def __str__(self):
        return f"{self.file.name}"
    
class Product(models.Model):
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=1024)
    time = models.DateTimeField(auto_now=True, auto_now_add=False)
    price = models.ForeignKey('Prices', on_delete=models.SET_NULL, null=True)
    listedby = models.ForeignKey(User, related_name="sellers", on_delete=models.SET_NULL, null=True)
    item_category = models.ForeignKey(Category, related_name="item_with_category", on_delete=models.SET_NULL, null=True, blank=True)
    images = models.ManyToManyField(ProductImage)
    def __str__(self):
        return f"{self.listedby} :{self.title}"
    

class Prices(models.Model):
    price = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=CASCADE, null=True)
    product_id = models.ForeignKey(Product, on_delete=CASCADE, null=True, blank=True)
    
    def __str__(self):
        return f"{self.user.first_name}: {self.product_id.title} price: {self.price}"