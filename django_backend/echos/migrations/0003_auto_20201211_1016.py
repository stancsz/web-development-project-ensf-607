# Generated by Django 3.1.4 on 2020-12-11 10:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('echos', '0002_auto_20201211_1008'),
    ]

    operations = [
        migrations.RenameField(
            model_name='echo',
            old_name='title',
            new_name='message',
        ),
        migrations.RemoveField(
            model_name='echo',
            name='description',
        ),
        migrations.RemoveField(
            model_name='echo',
            name='published',
        ),
    ]
