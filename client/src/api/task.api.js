const BASE_URL = "http://localhost:8000/tasks/api/v1/";
import axios from "axios";

const tasksApi = axios.create({
  baseURL: BASE_URL,
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
