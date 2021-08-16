from django.urls import include, path
from rest_framework import routers
from django.views.generic import TemplateView
from .views import TweetList

router = routers.DefaultRouter()
router.register(r'tweet', TweetList)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name='index.html')),
]
