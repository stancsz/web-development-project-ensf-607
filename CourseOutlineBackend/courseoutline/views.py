from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin

from .models import *

from .serializers import *


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


class InfoPostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Info.objects.filter(CourseID=CourseID)
            except Info.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = InfoSerializer(queryset, many=True)
        else:
            queryset = Info.objects.all()
            read_serializer = InfoSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = InfoSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = InfoSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class InfoPutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Info.objects.get(ModelID=ModelID)
        except Info.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = InfoSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = InfoSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Info.objects.get(ModelID=ModelID)
        except Info.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class GradeDeterminationPostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = GradeDetermination.objects.filter(CourseID=CourseID)
            except GradeDetermination.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = GradeDeterminationSerializer(queryset, many=True)
        else:
            queryset = GradeDetermination.objects.all()
            read_serializer = GradeDeterminationSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = GradeDeterminationSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = GradeDeterminationSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class GradeDeterminationPutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = GradeDetermination.objects.get(ModelID=ModelID)
        except GradeDetermination.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = GradeDeterminationSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = GradeDeterminationSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = GradeDetermination.objects.get(ModelID=ModelID)
        except GradeDetermination.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class OutcomePostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Outcome.objects.filter(CourseID=CourseID)
            except Outcome.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = OutcomeSerializer(queryset, many=True)
        else:
            queryset = Outcome.objects.all()
            read_serializer = OutcomeSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = OutcomeSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = OutcomeSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class OutcomePutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Outcome.objects.get(ModelID=ModelID)
        except Outcome.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = OutcomeSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = OutcomeSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Outcome.objects.get(ModelID=ModelID)
        except Outcome.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class TimetablePostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Timetable.objects.filter(CourseID=CourseID)
            except Timetable.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = TimetableSerializer(queryset, many=True)
        else:
            queryset = Timetable.objects.all()
            read_serializer = TimetableSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = TimetableSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = TimetableSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class TimetablePutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Timetable.objects.get(ModelID=ModelID)
        except Timetable.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = TimetableSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = TimetableSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Timetable.objects.get(ModelID=ModelID)
        except Timetable.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


