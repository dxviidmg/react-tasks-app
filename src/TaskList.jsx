import { tasks as data } from "./tasks";
import React, { useState, useEffect } from "react";

//console.log(data)

function TasksList() {
  const [tasks, setTasks] = useState([1, 2]);
  console.log(tasks);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
