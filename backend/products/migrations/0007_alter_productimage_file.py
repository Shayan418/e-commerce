# Generated by Django 4.0.1 on 2022-03-29 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimage',
            name='file',
            field=models.FileField(upload_to='media/productImage/%Y/%m/%d'),
        ),
    ]
