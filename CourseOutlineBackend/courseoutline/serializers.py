from rest_framework import serializers

from .models import Coordinator
from .models import Info
from .models import GradeDetermination
from .models import Outcome
from .models import Timetable
from .models import GradeDistribution

class CoordinatorSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    FName = serializers.CharField(max_length=100, required=False)
    LName = serializers.CharField(max_length=100, required=False)
    Phone = serializers.CharField(max_length=100, required=False)
    Office = serializers.CharField(max_length=100, required=False)
    Email = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        # Once the request data has been validated, we can create a todo item instance in the database
        return Coordinator.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            FName=validated_data.get('FName'),
            LName=validated_data.get('LName'),
            Phone=validated_data.get('Phone'),
            Office=validated_data.get('Office'),
            Email=validated_data.get('Email')
        )

    def update(self, instance, validated_data):
        # Once the request data has been validated, we can update the todo item instance in the database
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
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
            'ModelID',
            'CourseID',
            'FName',
            'LName',
            'Phone',
            'Office',
            'Email'
        )

class InfoSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    GradeNotes = serializers.CharField(max_length=500, required=False)
    Examination = serializers.CharField(max_length=5000, required=False)
    CourseDescription = serializers.CharField(max_length=500, required=False)
    UseCalc = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        return Info.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            GradeNotes=validated_data.get('GradeNotes'),
            Examination=validated_data.get('Examination'),
            CourseDescription=validated_data.get('CourseDescription'),
            UseCalc=validated_data.get('UseCalc')
        )

    def update(self, instance, validated_data):
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.GradeNotes = validated_data.get('GradeNotes', instance.GradeNotes)
        instance.Examination = validated_data.get('Examination', instance.Examination)
        instance.CourseDescription = validated_data.get('CourseDescription', instance.CourseDescription)
        instance.UseCalc = validated_data.get('UseCalc', instance.UseCalc)
        instance.save()
        return instance

    class Meta:
        model = Info
        fields = (
            'ModelID',
            'CourseID',
            'GradeNotes',
            'Examination',
            'CourseDescription',
            'UseCalc'
        )

class GradeDeterminationSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    Component = serializers.CharField(max_length=100, required=False)
    OutcomeEvaluated = serializers.CharField(max_length=100, required=False)
    Weight = serializers.IntegerField(required=False)

    def create(self, validated_data):
        # Once the request data has been validated, we can create a todo item instance in the database
        return GradeDetermination.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            Component=validated_data.get('Component'),
            OutcomeEvaluated=validated_data.get('OutcomeEvaluated'),
            Weight=validated_data.get('Weight'),
        )

    def update(self, instance, validated_data):
        # Once the request data has been validated, we can update the todo item instance in the database
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.Component = validated_data.get('Component', instance.Component)
        instance.OutcomeEvaluated = validated_data.get('OutcomeEvaluated', instance.OutcomeEvaluated)
        instance.Weight = validated_data.get('Weight', instance.Weight)
        instance.save()
        return instance

    class Meta:
        model = GradeDetermination
        fields = (
            'ModelID',
            'CourseID',
            'Component',
            'OutcomeEvaluated',
            'Weight'
        )

class OutcomeSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    OutcomeNum = serializers.IntegerField(max_length=100, required=False)
    Description = serializers.CharField(max_length=100, required=False)
    GraduateAttribute = serializers.CharField(max_length=100, required=False)
    InstructionLvl = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        return GradeDetermination.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            OutcomeNum=validated_data.get('OutcomeNum'),
            Description=validated_data.get('Description'),
            GraduateAttribute=validated_data.get('GraduateAttribute'),
            InstructionLvl=validated_data.get('InstructionLvl'),
        )

    def update(self, instance, validated_data):
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.OutcomeNum = validated_data.get('OutcomeNum', instance.OutcomeNum)
        instance.Description = validated_data.get('Description', instance.Description)
        instance.GraduateAttribute = validated_data.get('GraduateAttribute', instance.GraduateAttribute)
        instance.InstructionLvl = validated_data.get('InstructionLvl', instance.InstructionLvl)
        instance.save()
        return instance

    class Meta:
        model = Outcome
        fields = (
            'ModelID',
            'CourseID',
            'OutcomeNum',
            'Description',
            'GraduateAttribute',
            'InstructionLvl'
        )

class TimetableSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    SectionNum = serializers.CharField(max_length=100, required=False)
    Days = serializers.CharField(max_length=100, required=False)
    Time = serializers.CharField(max_length=100, required=False)
    Location = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        return GradeDetermination.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            SectionNum=validated_data.get('SectionNum'),
            Days=validated_data.get('Days'),
            Time=validated_data.get('Time'),
            Location=validated_data.get('Location'),
        )

    def update(self, instance, validated_data):
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.SectionNum = validated_data.get('SectionNum', instance.SectionNum)
        instance.Days = validated_data.get('Days', instance.Days)
        instance.Time = validated_data.get('Time', instance.Time)
        instance.Location = validated_data.get('Location', instance.Location)
        instance.save()
        return instance

    class Meta:
        model = Timetable
        fields = (
            'ModelID',
            'CourseID',
            'SectionNum',
            'Days',
            'Time',
            'Location'
        )

class GradeDistributionSerializer(serializers.ModelSerializer):
    ModelID = serializers.CharField(max_length=100, required=True)
    CourseID = serializers.CharField(max_length=100, required=True)
    LowerLimit = serializers.IntegerField(max_length=100, required=False)
    UpperLimit = serializers.IntegerField(max_length=100, required=False)
    LetterGrade = serializers.CharField(max_length=100, required=False)

    def create(self, validated_data):
        return GradeDetermination.objects.create(
            ModelID=validated_data.get('ModelID'),
            CourseID=validated_data.get('CourseID'),
            LowerLimit=validated_data.get('LowerLimit'),
            UpperLimit=validated_data.get('UpperLimit'),
            LetterGrade=validated_data.get('LetterGrade'),
        )

    def update(self, instance, validated_data):
        instance.ModelID = validated_data.get('ModelID', instance.ModelID)
        instance.CourseID = validated_data.get('CourseID', instance.CourseID)
        instance.LowerLimit = validated_data.get('LowerLimit', instance.LowerLimit)
        instance.UpperLimit = validated_data.get('UpperLimit', instance.UpperLimit)
        instance.LetterGrade = validated_data.get('LetterGrade', instance.LetterGrade)
        instance.save()
        return instance

    class Meta:
        model = GradeDistribution
        fields = (
            'ModelID',
            'CourseID',
            'LowerLimit',
            'UpperLimit',
            'LetterGrade'
        )