import TaskForm from "./components/TaskForm";
import TasksList from "./components/TaskList";
import { tasks as data } from "./assets/data/tasks";
import React, { useState, useEffect } from "react";


export default function App(){

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task){
    setTasks([...tasks, {title: task.title, id: tasks.length, description: task.description}])
  }
  return (<>
    <TaskForm createTask={createTask}/>
    <TasksList tasks={tasks}/>
  </>)
}

