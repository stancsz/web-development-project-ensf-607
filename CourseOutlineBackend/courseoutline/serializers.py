from rest_framework import serializers

from .models import Coordinator
from .models import GradeDetermination


class CoordinatorSerializer(serializers.ModelSerializer):
    CourseID = serializers.CharField(max_length=100, required=True)
    FName = serializers.CharField(max_length=100, required=False)
    LName = serializers.CharField(max_length=100, required=False)
    Phone = serializers.CharField(max_length=100, required=False)
    Office = serializers.CharField(max_length=100, required=False)
    Email = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        # Once the request data has been validated, we can create a todo item instance in the database
        return Coordinator.objects.create(
            CourseID=validated_data.get('CourseID'),
            FName=validated_data.get('FName'),
            LName=validated_data.get('LName'),
            Phone=validated_data.get('Phone'),
            Office=validated_data.get('Office'),
            Email=validated_data.get('Email')
        )

    def update(self, instance, validated_data):
        # Once the request data has been validated, we can update the todo item instance in the database
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.FName = validated_data.get('FName', instance.FName)
        instance.LName = validated_data.get('LName', instance.LName)
        instance.Phone = validated_data.get('Phone', instance.Phone)
        instance.Office = validated_data.get('Office', instance.Office)
        instance.Email = validated_data.get('Email', instance.Email)
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



class GradeDeterminationSerializer(serializers.ModelSerializer):
    CourseID = serializers.CharField(max_length=100, required=True)
    Component = serializers.CharField(max_length=100, required=False)
    OutcomeEvaluated = serializers.CharField(max_length=100, required=False)
    Weight = serializers.IntegerField(required=False)
   

    def create(self, validated_data):
        # Once the request data has been validated, we can create a todo item instance in the database
        return GradeDetermination.objects.create(
            CourseID=validated_data.get('CourseID'),
            Component=validated_data.get('Component'),
            OutcomeEvaluated=validated_data.get('OutcomeEvaluated'),
            Weight=validated_data.get('Weight'),
        )

    def update(self, instance, validated_data):
        # Once the request data has been validated, we can update the todo item instance in the database
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.Component = validated_data.get('Component', instance.Component)
        instance.OutcomeEvaluated = validated_data.get('OutcomeEvaluated', instance.OutcomeEvaluated)
        instance.Weight = validated_data.get('Weight', instance.Weight)
        instance.save()
        return instance

    class Meta:
        model = GradeDetermination
        fields = (
            'CourseID',
            'Component',
            'OutcomeEvaluated',
            'Weight'
        )
