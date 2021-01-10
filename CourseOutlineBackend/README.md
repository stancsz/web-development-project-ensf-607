```
DROP DATABASE IF EXISTS CourseOutlineDB;
CREATE DATABASE IF NOT EXISTS CourseOutlineDB;
```

to migrate if already migrated
```
python manage.py migrate --fake-initial
        python manage.py migrate --fake courseoutline zero
python manage.py makemigrations courseoutline
python manage.py migrate courseoutline

python manage.py showmigrations

```

all models/tables required will get re-created once migration runs

# create user

```
python manage.py createsuperuser
```


# pattern

[reference](https://medium.com/beyond-light-creations/build-a-rest-api-with-django-rest-framework-and-mysql-ddff0c1126ae#a7a7)


# prior to install mysql, need:
```
sudo apt-get install mysql-server
sudo apt-get install libmysqlclient-dev
```