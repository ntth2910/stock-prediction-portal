from django.shortcuts import render

# Create your views here.

from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class RegisterView(generics.CreateAPIView):
    # queryset means the data that will be used to create a new user
    # In this case, we are using the User model from Django's auth system
    # This queryset is not strictly necessary for CreateAPIView, but it's good practice to define it            
    queryset = User.objects.all()

    
    # serializer_class is the serializer that will be used to validate and save the data
    serializer_class = UserSerializer

    # permission_classes defines who can access this view
    # AllowAny means that anyone can access this view, no authentication is required
    # This is useful for user registration where we want to allow anyone to create an accountxs
    permission_classes = [AllowAny]  # No permissions required for user creation



