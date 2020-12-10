# serializers.py
from rest_framework import serializers

from .models import echo

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = echo
        fields = ('name', 'alias')