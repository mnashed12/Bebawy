from django.urls import path
from .views import EventInfo, RSVPView

urlpatterns = [
    path('event/', EventInfo.as_view(), name='event-info'),
    path('rsvp/', RSVPView.as_view(), name='rsvp'),
]
