from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('questions/', views.PollQuestions.as_view(), name='questions')
]
