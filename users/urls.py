from django.urls import path
from django.urls import include

from .views import UserList, UserView, UserCreate, UserUpdate, UserDelete
from rest_framework.routers import DefaultRouter
from .rest import UserViewSet

router = DefaultRouter()
router.register(r'Users', UserViewSet)

urlpatterns = [
    #views html
    path('', UserList.as_view(), name='user_list'),
    path('view/<int:pk>', UserView.as_view(), name='user_view'),
    path('new', UserCreate.as_view(), name='user_new'),
    path('view/<int:pk>', UserView.as_view(), name='user_view'),
    path('edit/<int:pk>', UserUpdate.as_view(), name='user_edit'),
    path('delete/<int:pk>', UserDelete.as_view(), name='user_delete'),


    path('api/', include(router.urls)),
]