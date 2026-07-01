from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('invitations.urls')),
    path('', never_cache(TemplateView.as_view(template_name='index.html')), name='home'),
    path('<path:path>', never_cache(TemplateView.as_view(template_name='index.html')), name='spa-fallback'),
]
