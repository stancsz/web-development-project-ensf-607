from rest_framework import serializers

from .models import Coordinator


class CoordinatorSerializer(serializers.ModelSerializer):
  CourseID = serializers.CharField(max_length=5000, required=True)

  def create(self, validated_data):
    # Once the request data has been validated, we can create a todo item instance in the database
    return Coordinator.objects.create(
      CourseID=validated_data.get('CourseID')
    )

  def update(self, instance, validated_data):
     # Once the request data has been validated, we can update the todo item instance in the database
    instance.CourseID = validated_data.get('CourseID', instance.CourseID)
    instance.save()
    return instance

  class Meta:
    model = Coordinator
    fields = (
      'CourseID',
      'FName',
      'LName',
      'Phone',
      'Office',
      'Email'
    )

