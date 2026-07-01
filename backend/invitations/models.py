from django.db import models


class RSVP(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    attending = models.BooleanField(default=False)
    guests = models.PositiveIntegerField(default=0)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {'Yes' if self.attending else 'No'}"
