# Generated by Django 5.1 on 2024-08-21 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Profiles_apps', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user',
            new_name='username',
        ),
    ]