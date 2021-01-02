from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

# model for course table
class Course(models.Model):
  CourseID = models.AutoField(
    primary_key=True
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

  # Alternative mode for updating timestamp logics
  # DateCreated = models.DateTimeField(
  #   auto_now=True,
  #   null=False,
  #   blank=False
  # )

  DateCreated = models.DateTimeField(
    auto_now_add=True,
    null=False,
    blank=False
  )

  class Meta:
    db_table = 'COURSE'


