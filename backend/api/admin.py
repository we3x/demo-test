# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Broadcast, Category

admin.site.register(Broadcast)
admin.site.register(Category)
