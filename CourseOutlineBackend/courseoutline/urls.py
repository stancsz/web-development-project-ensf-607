from django.urls import path

from . import views

urlpatterns = [
  path('coordinator/', views.CoordinatorView.as_view()), # GET & POST
  path('coordinator/<str:CourseID>/', views.CoordinatorView.as_view()), # PUT
]