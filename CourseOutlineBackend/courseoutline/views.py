from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin

from .models import Coordinator
from .serializers import CoordinatorSerializer


class CoordinatorPostGetView(
  APIView, # Basic View class provided by the Django Rest Framework
  UpdateModelMixin, # Mixin that allows the basic APIView to handle PUT HTTP requests
  DestroyModelMixin, # Mixin that allows the basic APIView to handle DELETE HTTP requests
):

  def get(self, request, CourseID=None):
    if CourseID:
      # If an id is provided in the GET request, retrieve the Todo item by that id
      try:
        # Check if the todo item the user wants to update exists
        # queryset = Coordinator.objects.get(CourseID=CourseID) # single record
        queryset = Coordinator.objects.filter(CourseID=CourseID)

      except Coordinator.DoesNotExist:
        # If the todo item does not exist, return an error response
        return Response({'errors': 'This item does not exist.'}, status=400)

      # Serialize todo item from Django queryset object to JSON formatted data
      read_serializer = CoordinatorSerializer(queryset, many=True)

    else:
      # Get all todo items from the database using Django's model ORM
      queryset = Coordinator.objects.all()

      # Serialize list of todos item from Django queryset object to JSON formatted data
      read_serializer = CoordinatorSerializer(queryset, many=True)

    # Return a HTTP response object with the list of todo items as JSON
    return Response(read_serializer.data)


  def post(self, request):
    # Pass JSON data from user POST request to serializer for validation
    create_serializer = CoordinatorSerializer(data=request.data)

    # Check if user POST data passes validation checks from serializer
    if create_serializer.is_valid():

      # If user data is valid, create a new todo item record in the database
      todo_item_object = create_serializer.save()

      # Serialize the new todo item from a Python object to JSON format
      read_serializer = CoordinatorSerializer(todo_item_object)

      # Return a HTTP response with the newly created todo item data
      return Response(read_serializer.data, status=201)

    # If the users POST data is not valid, return a 400 response with an error message
    return Response(create_serializer.errors, status=400)




class CoordinatorPutDelView(
  APIView, # Basic View class provided by the Django Rest Framework
  UpdateModelMixin, # Mixin that allows the basic APIView to handle PUT HTTP requests
  DestroyModelMixin, # Mixin that allows the basic APIView to handle DELETE HTTP requests
):

  def put(self, request, ModelID=None):
    try:
      # Check if the todo item the user wants to update exists
      todo_item = Coordinator.objects.get(ModelID=ModelID)
    except Coordinator.DoesNotExist:
      # If the todo item does not exist, return an error response
      return Response({'errors': 'This todo item does not exist.'}, status=400)

    # If the todo item does exists, use the serializer to validate the updated data
    update_serializer = CoordinatorSerializer(todo_item, data=request.data)

    # If the data to update the todo item is valid, proceed to saving data to the database
    if update_serializer.is_valid():

      # Data was valid, update the todo item in the database
      todo_item_object = update_serializer.save()

      # Serialize the todo item from Python object to JSON format
      read_serializer = CoordinatorSerializer(todo_item_object)

      # Return a HTTP response with the newly updated todo item
      return Response(read_serializer.data, status=200)

    # If the update data is not valid, return an error response
    return Response(update_serializer.errors, status=400)


  def delete(self, request, ModelID=None):
    try:
      # Check if the todo item the user wants to update exists
      todo_item = Coordinator.objects.get(ModelID=ModelID)
    except Coordinator.DoesNotExist:
      # If the todo item does not exist, return an error response
      return Response({'errors': 'This todo item does not exist.'}, status=400)

    # Delete the chosen todo item from the database
    todo_item.delete()

    # Return a HTTP response notifying that the todo item was successfully deleted
    return Response(status=204)