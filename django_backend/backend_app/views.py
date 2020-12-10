from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import EchoSerializer
from .models import echo


class EchoViewSet(viewsets.ModelViewSet):
    queryset = echo.objects.all().order_by('message')
    serializer_class = EchoSerializer
