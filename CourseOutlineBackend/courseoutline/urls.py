from django.urls import path
from django.views import debug

from . import views

urlpatterns = [
  path('', debug.default_urlconf),
  path('coordinator/', views.CoordinatorView.as_view()), # GET & POST
  path('coordinator/<str:CourseID>/', views.CoordinatorView.as_view()), # PUT
  path('gradedetermination/', views.GradeDeterminationView.as_view()), 
  path('gradedetermination/<str:CourseID>/', views.GradeDeterminationView.as_view()), 
]