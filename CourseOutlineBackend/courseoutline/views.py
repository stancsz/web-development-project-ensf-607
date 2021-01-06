from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin

from .models import Coordinator
from .serializers import CoordinatorSerializer

class CoordinatorPostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Coordinator.objects.filter(CourseID=CourseID)
            except Coordinator.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = CoordinatorSerializer(queryset, many=True)
        else:
            queryset = Coordinator.objects.all()
            read_serializer = CoordinatorSerializer(queryset, many=True)
        return Response(read_serializer.data)
    def post(self, request):
        create_serializer = CoordinatorSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = CoordinatorSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)

class CoordinatorPutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Coordinator.objects.get(ModelID=ModelID)
        except Coordinator.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = CoordinatorSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = CoordinatorSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Coordinator.objects.get(ModelID=ModelID)
        except Coordinator.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)
