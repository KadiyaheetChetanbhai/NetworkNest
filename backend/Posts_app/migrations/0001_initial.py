# Generated by Django 5.1 on 2024-08-24 09:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users_app', '0003_remove_customuser_profile_pic'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('Post_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='posts_as_post_id', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('title', models.CharField(max_length=100)),
                ('caption', models.TextField(null=True)),
                ('Video_content', models.FileField(null=True, upload_to='profile_pics/videos/', verbose_name='Videos')),
                ('Image_content', models.ImageField(null=True, upload_to='profile_pics/Images/', verbose_name='Images')),
                ('Blobs_content', models.TextField()),
                ('date_posted', models.DateTimeField(auto_now_add=True)),
                ('createdBy', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='posts_createdBy', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
