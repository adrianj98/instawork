# Generated by Django 5.0.3 on 2024-03-04 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=100)),
                ("last_name", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(max_length=100)),
                (
                    "role",
                    models.IntegerField(
                        choices=[(1, "Admin"), (2, "Regular")], default=2
                    ),
                ),
            ],
        ),
    ]
