from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

# model for au_weight table
class AuWeight(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
  )

  Category = models.TextField(
    max_length=100,
    null=False,
    blank=False
  )
  AU = models.models.IntegerField(
    null=False,
    blank=False
  )

  class Meta:
    db_table = 'AU_WEIGHT'

# model for content_category table
class ContentCategory(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

# model for coordinator table
class Coordinator(models.Model):
  CourseID = models.TextField(
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
    db_table = 'COORDINATOR'

# model for course table
class Course(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

# model for grade determination table
class GradeDetermination(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

# model for grade distribution table
class GradeDistribution(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

# model for info table
class Info(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
  )

  GradeNotes = models.TextField(
    max_length=500,
    null=False,
    blank=False
  )

  Examination = models.TextField(
    max_length=500,
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

# model for lab table
class Lab(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

# model for lecture table
class Lecture(models.Model):
  CourseID = models.TextField(
    max_length=100,
    null=False,
    blank=False
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

