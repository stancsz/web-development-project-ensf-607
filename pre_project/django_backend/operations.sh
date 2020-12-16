curl "http://127.0.0.1:8000/api/echos/"

curl -X PUT -d arg="a stirng val" "http://127.0.0.1:8000/api/echos/"

curl -X DELETE "http://127.0.0.1:8000/api/echos/1/"

curl -X GET "http://127.0.0.1:8000/api/echos/1/"