const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://django-react-production-1b55.up.railway.app"
    : "http://localhost:8000";

import axios from "axios";
const csrfToken = document.cookie;
let cokieToken = csrfToken.split(" csrftoken=")[1];

const tasksApi = axios.create({
  baseURL: BASE_URL + "/tasks/api/v1/",
  headers: {
    "X-CSRFToken": cokieToken,
  },
});

function getAllTasks() {
  return tasksApi.get("tasks/");
}

function createTask(task) {
  tasksApi.post("tasks/", task);
}

const getTask = (id) => tasksApi.get(`tasks/${id}`);

const deleteTask = (id) => tasksApi.delete("tasks/" + id);
const updateTask = (id, task) => tasksApi.patch(`tasks/${id}/`, task);

export { getAllTasks, createTask, deleteTask, updateTask, getTask };
