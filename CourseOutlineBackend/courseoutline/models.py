from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

# model for au_weight table
class AuWeight(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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

# model for lab table
class Lab(models.Model):
  CourseID = models.CharField(
    primary_key=True,
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
  CourseID = models.CharField(
    primary_key=True,
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

# model for outcome table
class Outcome(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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

# model for section table
class Section(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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

  class Meta:
    db_table = 'SECTION'

# model for textbook table
class Textbook(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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

  class Meta:
    db_table = 'TEXTBOOK'

# model for timetable table
class Timetable(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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

# model for tutorial table
class Tutorial(models.Model):
  CourseID = models.CharField(
    primary_key=True,
    max_length=100,
    null=False,
    blank=False
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

