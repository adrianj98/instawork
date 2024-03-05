"""
URL configuration for instaworks project.

"""

from django.urls import include, re_path

from django.contrib import admin
from django.urls import path
from django.contrib.staticfiles.views import serve
from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('users/', include('users.urls')),
    re_path(r'^$', RedirectView.as_view(url='/index.html', permanent=True)),
    re_path(r'^(?P<path>.*)$', serve),
   


]
