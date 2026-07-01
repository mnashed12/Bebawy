from rest_framework import serializers
from .models import RSVP


class RSVPSerializer(serializers.ModelSerializer):
    class Meta:
        model = RSVP
        fields = ['id', 'name', 'email', 'attending', 'guests', 'message', 'created_at']
