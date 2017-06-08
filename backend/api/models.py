# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class CustomUser(User):

    def __str__(self):
        self.username

class Category(models.Model):
    name = models.CharField(max_length=16)

class Broadcast(models.Model):
    instructor = models.ForeignKey(CustomUser)
    title = models.CharField(max_length=32)
    category = models.ForeignKey(Category)
    startTime = models.DateTimeField()
    premium = models.BooleanField(default=False)
