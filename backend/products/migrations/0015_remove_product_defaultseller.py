# Generated by Django 4.0.1 on 2022-04-17 11:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0014_alter_product_sellers_alter_product_seller_seller_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='defaultSeller',
        ),
    ]