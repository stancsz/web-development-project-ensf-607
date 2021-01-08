from django.urls import path
from django.views import debug

from . import views

urlpatterns = [
    path('', debug.default_urlconf),
    # coordinator
    path('coordinator/', views.CoordinatorPostGetView.as_view()),
    path('coordinator/<str:CourseID>/', views.CoordinatorPostGetView.as_view()),
    path('coordinator/v2/<str:ModelID>/', views.CoordinatorPutDelView.as_view()),

    # info
    path('info/', views.InfoPostGetView.as_view()),
    path('info/<str:CourseID>/', views.InfoPostGetView.as_view()),
    path('info/v2/<str:ModelID>/', views.InfoPutDelView.as_view()),

    # grade determination
    path('gradedetermination/', views.GradeDeterminationPostGetView.as_view()),
    path('gradedetermination/<str:CourseID>/', views.GradeDeterminationPostGetView.as_view()),
    path('gradedetermination/v2/<str:ModelID>/', views.GradeDeterminationPutDelView.as_view()),

    # outcome
    path('outcome/', views.OutcomePostGetView.as_view()),
    path('outcome/<str:CourseID>/', views.OutcomePostGetView.as_view()),
    path('outcome/v2/<str:ModelID>/', views.OutcomePutDelView.as_view()),

    # timetable
    path('timetable/', views.TimetablePostGetView.as_view()),
    path('timetable/<str:CourseID>/', views.TimetablePostGetView.as_view()),
    path('timetable/v2/<str:ModelID>/', views.TimetablePutDelView.as_view()),

    # grade distribution
    path('gradedistribution/', views.GradeDistributionPostGetView.as_view()),
    path('gradedistribution/<str:CourseID>/', views.GradeDistributionPostGetView.as_view()),
    path('gradedistribution/v2/<str:ModelID>/', views.GradeDistributionPutDelView.as_view()),

    # lecture
    path('lecture/', views.LecturePostGetView.as_view()),
    path('lecture/<str:CourseID>/', views.LecturePostGetView.as_view()),
    path('lecture/v2/<str:ModelID>/', views.LecturePutDelView.as_view()),

    # tutorial
    path('tutorial/', views.TutorialPostGetView.as_view()),
    path('tutorial/<str:CourseID>/', views.TutorialPostGetView.as_view()),
    path('tutorial/v2/<str:ModelID>/', views.TutorialPutDelView.as_view()),

    # course
    path('course/', views.CoursePostGetView.as_view()),
    path('course/<str:CourseID>/', views.CoursePostGetView.as_view()),
    path('course/v2/<str:ModelID>/', views.CoursePutDelView.as_view()),

]
