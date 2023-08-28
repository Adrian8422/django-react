const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.VITE_BACKEND_URL
    : "http://localhost:8000";

import axios from "axios";

const tasksApi = axios.create({
  baseURL: BASE_URL + "/tasks/api/v1/",
});

function getAllTasks() {
  console.log("url", BASE_URL);

  return tasksApi.get("tasks/");
}

function createTask(task) {
  tasksApi.post("tasks/", task);
}

const getTask = (id) => tasksApi.get(`tasks/${id}`);

const deleteTask = (id) => tasksApi.delete("tasks/" + id);
const updateTask = (id, task) => tasksApi.patch(`tasks/${id}/`, task);

export { getAllTasks, createTask, deleteTask, updateTask, getTask };
// const BASE_URL =
//   process.env.NODE_ENV == "production"
//     ? import.meta.env.VITE_BACKEND_URL
//     : "http://localhost:8000";

// import axios from "axios";

// const tasksApi = axios.create({
//   baseURL: BASE_URL + "/tasks/api/v1/",
// });

// function getAllTasks() {
//   console.log("url", BASE_URL);
//   return tasksApi.get(BASE_URL + "tasks/");
// }

// function createTask(task) {
//   tasksApi.post(BASE_URL + "tasks/", task);
// }
// const getTask = (id) => tasksApi.get(BASE_URL + `tasks/${id}`);

// const deleteTask = (id) => tasksApi.delete(BASE_URL + "tasks/" + id);
// const updateTask = (id, task) =>
//   tasksApi.patch(BASE_URL + `tasks/${id}/`, task);

// export { getAllTasks, createTask, deleteTask, updateTask, getTask };
