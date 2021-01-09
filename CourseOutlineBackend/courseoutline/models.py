from django.db import models

# Create your models here.
from django.db import models


# Create your models here.

# model for au_weight table
class AuWeight(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    Category = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )
    AU = models.IntegerField(
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'AU_WEIGHT'


# model for content_category table
class ContentCategory(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    CategoryType = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Element = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'CONTENT_CATEGORY'


# todo-done: coordinator
# model for coordinator table
class Coordinator(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    FName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    LName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Phone = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Office = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Email = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'COORDINATOR'


# needed
# model for course table
class Course(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    CourseHours = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )
    CourseName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    CalenderRefrence = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    AcademicCredit = models.IntegerField(
        null=False,
        blank=False
    )

    DateCreated = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'COURSE'


# todo: grade determination
# model for grade determination table
class GradeDetermination(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    Component = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )
    OutcomeEvaluated = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Weight = models.IntegerField(
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'GRADE_DETERMINATION'


# todo: grade distribution
# model for grade distribution table
class GradeDistribution(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    LowerLimit = models.IntegerField(
        null=False,
        blank=False
    )

    UpperLimit = models.IntegerField(
        null=False,
        blank=False
    )

    LetterGrade = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'GRADE_DISTRIBUTION'


# todo-done: info
# model for info table
class Info(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    GradeNotes = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    Examination = models.TextField(
        max_length=5000,
        null=False,
        blank=False
    )

    CourseDescription = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    UseCalc = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'INFO'


# todo: lab
# model for lab table
class Lab(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    LabNum = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    NumberOfLabs = models.IntegerField(
        null=False,
        blank=False
    )

    LabType = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    SafetyExamined = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    SafetyTaught = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    FName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    LName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Phone = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Office = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Email = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'LAB'


# todo: lecture
# model for lecture table
class Lecture(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    LectureNum = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    FName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    LName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Phone = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Office = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Email = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'LECTURE'


# todo: outcome
# model for outcome table
class Outcome(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    OutcomeNum = models.IntegerField(
        null=False,
        blank=False
    )

    Description = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    GraduateAttribute = models.TextField(
        max_length=500,
        null=False,
        blank=False
    )

    InstructionLvl = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'OUTCOME'


# needed
# model for section table
class Section(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    SectionNumber = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Students = models.IntegerField(
        null=False,
        blank=False
    )

    Hours = models.IntegerField(
        null=False,
        blank=False
    )

    type = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'SECTION'


# needed
# model for textbook table
class Textbook(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    TITLE = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    Publisher = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    Author = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    Edition = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    type = models.TextField(
        max_length=200,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'TEXTBOOK'


# todo: timetable
# model for timetable table
class Timetable(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    SectionNum = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Days = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Time = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Location = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'TIMETABLE'


# todo: tutorial
# model for tutorial table
class Tutorial(models.Model):
    ModelID = models.AutoField(primary_key=True)

    CourseID = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default=""
    )

    TutorialNum = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    FName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    LName = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Phone = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Office = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    Email = models.TextField(
        max_length=100,
        null=False,
        blank=False
    )

    class Meta:
        db_table = 'TUTORIAL'
