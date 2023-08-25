import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCardUI } from "../ui/TaskCard";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      console.log(res.data);
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return <div className="grid grid-cols-3 gap-3" >{
    tasks.map(task => (
      <TaskCardUI key={task.id} task={task} />
    ))}</div>;
}

export default TaskList;
