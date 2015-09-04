from django.db import models


# Create your models here.



class FoodCategory(models.Model):

    category_name = models.CharField(max_length=1024)

    def __unicode__(self):
        return self.category_name


class FoodItem(models.Model):

    food_category = models.ForeignKey(FoodCategory)
    item_name = models.CharField(max_length=1024)
    quantity_id = models.IntegerField('Quantity')

    def __unicode__(self):
        return self.item_name

