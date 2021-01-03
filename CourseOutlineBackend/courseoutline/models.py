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