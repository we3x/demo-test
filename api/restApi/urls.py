from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'allBroadcasts', views.BroadcastList)
router.register(r'normalBroadcasts', views.NormalBroadcastList)
router.register(r'premiumBroadcasts', views.PremiumBroadcastList)
router.register(r'categorys', views.CategoryList)

urlpatterns = patterns(
    '',
    url(
            r'^v1/',
                include(
                            router.urls,
                        ),
            ),
        url(
                r'^v1/auth/',
                    'rest_framework_jwt.views.obtain_jwt_token',
                name='login',
            ),
        url(
                r'^v1/token-refresh/',
                    'rest_framework_jwt.views.refresh_jwt_token'
            ),
        url(
                r'',
                    include(
                                'rest_framework.urls',
                                namespace='rest_framework',
                            ),
                ),
        );
