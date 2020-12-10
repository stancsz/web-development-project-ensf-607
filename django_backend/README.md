# Pre-Project Exercise on Django
Create a REST API with the following end point:http://localhost:8000/api/echos/.

`GET/api/echos`

Should list the link to all the echos

`POST/api/echos`
`body {“message”: “a string”}`
Should create an echo with the above information

`GET/api/echos/number (e.g GET/api/echos/1)`
Should show the echo information in json. (e.g “message”: “a string”)

`PUT/api/echos/number`
`body {“message”: “another string”}`
Should change the content of an existing echo

`DELETE/api/echos/number`
Should delete the content of an existing echo


# to run server
```
python manage.py runserver
```


[recommended reading](https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c)


### Worklog

```
python manage.py migrate
>>
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying sessions.0001_initial... OK

```

```
python manage.py createsuperuser
>>
Username (leave blank to use 'stan'): stan
Email address: stanleychen587@gmail.com
Password: ensf607
Password (again): ensf607
This password is too short. It must contain at least 8 characters.
Bypass password validation and create user anyway? [y/N]: y
Superuser created successfully.
```

```
python manage.py makemigrations
>>
Migrations for 'backend_app':
  backend_app/migrations/0001_initial.py
    - Create model echo

```


```
python manage.py migrate
>>
Operations to perform:
  Apply all migrations: admin, auth, backend_app, contenttypes, sessions
Running migrations:
  Applying backend_app.0001_initial... OK
```



```

```


```

```


```

```


```

```