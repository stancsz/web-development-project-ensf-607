# serializers.py
from rest_framework import serializers

from .models import echos

class EchoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = echos
        fields = ('id','name','alias')