from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import RSVP
from .serializers import RSVPSerializer


class EventInfo(APIView):
    def get(self, request):
        # Minimal event info; populate more fields as needed
        data = {
            'couple': 'Carolyn & Marco',
            'date': '2027-09-10',
            'venue': 'Villa Medicea di Artimino',
        }
        return Response(data)


class RSVPView(APIView):
    def get(self, request):
        items = RSVP.objects.order_by('-created_at')[:100]
        serializer = RSVPSerializer(items, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RSVPSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
