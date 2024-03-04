
from django.http import HttpResponse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from users.models import User

class UserList(ListView):
    model = User

class UserView(DetailView):
    model = User

class UserCreate(CreateView):
    model = User
    fields = ['first_name', 'last_name', 'email', 'phone', 'role']
    success_url = reverse_lazy('user_list')

class UserUpdate(UpdateView):
    model = User
    fields =  ['first_name', 'last_name', 'email', 'phone', 'role']
    success_url = reverse_lazy('user_list')

class UserDelete(DeleteView):
    model = User
    success_url = reverse_lazy('user_list')