
from django.urls import path
from accounts import views as UserViews


urlpatterns = [
    # Include the API URLs
    path('register/', UserViews.RegisterView.as_view()),
]