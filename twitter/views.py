from rest_framework import mixins, viewsets
from .serializers import TweetSerializer
from .models import Tweet


class TweetList(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                viewsets.GenericViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
