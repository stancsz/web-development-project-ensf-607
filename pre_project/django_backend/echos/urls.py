from django.conf.urls import url 
from echos import views
 
urlpatterns = [ 
    url(r'^api/echos$', views.tutorial_list),
    url(r'^api/echos/(?P<pk>[0-9]+)$', views.tutorial_detail),
    url(r'^api/echos/published$', views.tutorial_list_published)
]