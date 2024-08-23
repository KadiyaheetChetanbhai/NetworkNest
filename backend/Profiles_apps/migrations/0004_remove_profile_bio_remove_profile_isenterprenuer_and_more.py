# Generated by Django 5.1 on 2024-08-22 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profiles_apps', '0003_profile_user_id_alter_profile_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='isenterprenuer',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='isenthustiast',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='isinvestor',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='profile_pic',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='username',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='website',
        ),
        migrations.AddField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='profile_pics/'),
        ),
    ]