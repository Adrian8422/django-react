from .serializer import TaskSerializer
from rest_framework import viewsets
from .models import Task
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

