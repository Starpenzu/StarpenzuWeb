from django.urls import path
from user import views

app_name = 'core'
urlpatterns = [

    path('activate/<str:token>/', views.ActivateView.as_view(), name='activate'),
]
