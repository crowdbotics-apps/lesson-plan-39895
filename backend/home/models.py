from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    instructions = models.TextField(null=True,blank=True,)
    prep_time = models.IntegerField(null=True,blank=True,)
    cook_time = models.IntegerField(null=True,blank=True,)
    rating = models.IntegerField(null=True,blank=True,)
    image = models.CharField(max_length=256,null=True,blank=True,)
