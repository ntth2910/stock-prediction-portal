from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'}, min_length=8)
    class Meta:
        model = User
        fields = ['username', 'email','password']

    def create(self, validated_data):
        # User.objects.create means save the password in plain text
        # We need to hash the password before saving it

        # User.objects.create_user is a built-in method that handles password hashing
        user = User.objects.create_user(
            username= validated_data['username'],
            email= validated_data['email'],
            password= validated_data['password']
        )
        # user = User.objects.create_user(**validated_data)
        return user