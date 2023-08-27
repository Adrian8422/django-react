web: cd client && npm install --omit=dev && npm run build && cd .. && python manage.py migrate && python manage.py collectstatic && gunicorn django_crud_api.wsgi
