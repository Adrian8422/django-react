const BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://django-react-production-1b55.up.railway.app"
    : "http://localhost:8000";

import axios from "axios";

const tasksApi = axios.create({
  baseURL: BASE_URL + "/tasks/api/v1/",
});

function getAllTasks() {
  return tasksApi.get(BASE_URL + "tasks/");
}

function createTask(task) {
  tasksApi.post(BASE_URL + "tasks/", task);
}
const getTask = (id) => tasksApi.get(BASE_URL + `tasks/${id}`);

const deleteTask = (id) => tasksApi.delete(BASE_URL + "tasks/" + id);
const updateTask = (id, task) =>
  tasksApi.patch(BASE_URL + `tasks/${id}/`, task);

export { getAllTasks, createTask, deleteTask, updateTask, getTask };
