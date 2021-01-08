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


class GradeDistributionPostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = GradeDistribution.objects.filter(CourseID=CourseID)
            except GradeDistribution.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = GradeDistributionSerializer(queryset, many=True)
        else:
            queryset = GradeDistribution.objects.all()
            read_serializer = GradeDistributionSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = GradeDistributionSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = GradeDistributionSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class GradeDistributionPutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = GradeDistribution.objects.get(ModelID=ModelID)
        except GradeDistribution.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = GradeDistributionSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = GradeDistributionSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = GradeDistribution.objects.get(ModelID=ModelID)
        except GradeDistribution.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class LecturePostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Lecture.objects.filter(CourseID=CourseID)
            except Lecture.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = LectureSerializer(queryset, many=True)
        else:
            queryset = Lecture.objects.all()
            read_serializer = LectureSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = LectureSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = LectureSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class LecturePutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Lecture.objects.get(ModelID=ModelID)
        except Lecture.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = LectureSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = LectureSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Lecture.objects.get(ModelID=ModelID)
        except Lecture.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class TutorialPostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Tutorial.objects.filter(CourseID=CourseID)
            except Tutorial.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = TutorialSerializer(queryset, many=True)
        else:
            queryset = Tutorial.objects.all()
            read_serializer = TutorialSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = TutorialSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = TutorialSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class TutorialPutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Tutorial.objects.get(ModelID=ModelID)
        except Tutorial.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = TutorialSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = TutorialSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Tutorial.objects.get(ModelID=ModelID)
        except Tutorial.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)


class CoursePostGetView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def get(self, request, CourseID=None):
        if CourseID:
            try:
                queryset = Course.objects.filter(CourseID=CourseID)
            except Course.DoesNotExist:
                return Response({'errors': 'This item does not exist.'}, status=400)
            read_serializer = CourseSerializer(queryset, many=True)
        else:
            queryset = Course.objects.all()
            read_serializer = CourseSerializer(queryset, many=True)
        return Response(read_serializer.data)

    def post(self, request):
        create_serializer = CourseSerializer(data=request.data)
        if create_serializer.is_valid():
            item_object = create_serializer.save()
            read_serializer = CourseSerializer(item_object)
            return Response(read_serializer.data, status=201)
        return Response(create_serializer.errors, status=400)


class CoursePutDelView(
    APIView,
    UpdateModelMixin,
    DestroyModelMixin,
):
    def put(self, request, ModelID=None):
        try:
            item = Course.objects.get(ModelID=ModelID)
        except Course.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        update_serializer = CourseSerializer(item, data=request.data)
        if update_serializer.is_valid():
            item_object = update_serializer.save()
            read_serializer = CourseSerializer(item_object)
            return Response(read_serializer.data, status=200)
        return Response(update_serializer.errors, status=400)

    def delete(self, request, ModelID=None):
        try:
            item = Course.objects.get(ModelID=ModelID)
        except Course.DoesNotExist:
            return Response({'errors': 'This item does not exist.'}, status=400)
        item.delete()
        return Response(status=204)
