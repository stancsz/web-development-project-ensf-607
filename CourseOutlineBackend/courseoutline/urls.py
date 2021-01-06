from django.urls import path

from . import views

urlpatterns = [
  path('coordinator/', views.CoordinatorPostGetView.as_view()), # GET & POST
  path('coordinator/<str:CourseID>/', views.CoordinatorPostGetView.as_view()), # GET & POST
  path('coordinator/v2/<str:ModelID>/', views.CoordinatorPutDelView.as_view()),  # PUT & DEL
]