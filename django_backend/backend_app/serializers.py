# serializers.py
from rest_framework import serializers

from .models import echo

class EchoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = echo
        fields = ('message')