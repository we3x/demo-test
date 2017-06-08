from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'broadcasts', views.BroadcastList)
urlpatterns = [
    url(
        r'^v1/',
        include( router.urls),
    ),
    url(
        r'^auth/',
        include('rest_framework.urls', namespace='rest_framework')
    ),
]
