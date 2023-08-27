web: sh -c cd client && yarn install && yarn build && cd .. && python manage.py migrate && python manage.py collectstatic && gunicorn django_crud_api.wsgi

