from django.urls import path, include
from user import views

app_name = 'user'
urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('resend_activation/', views.ResendActivationView.as_view(), name='resend_activation'),
    path('token/', views.CreateTokenView.as_view(), name='token'),
    path('me/', views.ManageUserView.as_view({'get': 'retrieve',
                                              'put': 'update',
                                              'patch': 'partial_update'}), name='me'),
    path('password-reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset-confirm/<str:uidb64>/<str:token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('send-email/', views.SendEmailView.as_view(), name='send_email'),
    path('subscribe-email/', views.SubscribeEmailView.as_view(), name='subscribe_email'),
    path('send-all/', views.SendMessageToAllUsersView.as_view(), name='send-all'),
    path('send-user/', views.SendMessageToUserView.as_view(), name='send-user'),
    path('users/<str:email>/messages/', views.UserMessagesView.as_view(), name='user-messages')

    # path('activate/<str:token>/', views.ActivateView.as_view(), name='activate'),
]
