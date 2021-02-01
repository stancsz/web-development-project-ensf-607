# Students:

- Ziad Chemali
- Lotfi Hasni
- Stan Chen



# Demo

![course-outline-demo-1](README.assets/course-outline-demo-1.gif)

![course-outline-demo-2](README.assets/course-outline-demo-2.gif)

![course-outline-demo-3](README.assets/course-outline-demo-3.gif)



![course-outline-demo-4](README.assets/course-outline-demo-4.gif)

![course-outline-demo-5](README.assets/course-outline-demo-5.gif)

# Screenshots

![image-20210201022715285](README.assets/image-20210201022715285.png)

![image-20210201022731282](README.assets/image-20210201022731282.png)

![image-20210201022830133](README.assets/image-20210201022830133.png)


# Backend
## Installation

```
$ pip install -r requirements.txt
```

## Start Server

Run the following command inside the directory: todoapi/

python manage.py runserver

## migrate models

```
python manage.py makemigrations courseoutline
python manage.py migrate
```

## Jenkins build command

```
echo rebuilding ...
echo redeploying...
python CourseOutlineBackend/manage.py runserver 0:8000
echo execute shell reached...
```

