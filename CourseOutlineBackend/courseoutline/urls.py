from django.urls import path

from . import views

urlpatterns = [
  # coordinator
  path('coordinator/', views.CoordinatorPostGetView.as_view()), 
  path('coordinator/<str:CourseID>/', views.CoordinatorPostGetView.as_view()), 
  path('coordinator/v2/<str:ModelID>/', views.CoordinatorPutDelView.as_view()),  
  # info
  path('info/', views.InfoPostGetView.as_view()),
  path('info/<str:CourseID>/', views.InfoPostGetView.as_view()),
  path('info/v2/<str:ModelID>/', views.InfoPutDelView.as_view()),
]