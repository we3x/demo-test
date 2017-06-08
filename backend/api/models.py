# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class CustomUser(User):
    user = models.OneToOneField(User)

    def __str__(self):
        return self.User.username

class Category(models.Model):
    name = models.CharField(max_length=16)

    def __str__(self):
        return self.name

class Broadcast(models.Model):
    instructor = models.ForeignKey(CustomUser)
    title = models.CharField(max_length=32)
    category = models.ForeignKey(Category)
    startTime = models.DateTimeField()
    premium = models.BooleanField(default=False)

    def __str__(self):
        return self.title
