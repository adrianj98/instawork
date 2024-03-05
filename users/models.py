from django.db import models

from django.db import models
from django.urls import reverse

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    roles = (
      (1, "Admin"),
      (2, "Regular"),
    )
    role = models.IntegerField(choices=roles, default=2)

    def __str__(self):
        return self.first_name

    def get_absolute_url(self):
        return reverse('user_edit', kwargs={'pk': self.pk})