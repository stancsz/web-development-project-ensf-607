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
  path('gradedetermination/v2/<str:ModelID>/', views.GradeDeterminationPostGetView.as_view()),
]