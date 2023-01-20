import TaskForm from "./TaskForm";
import TasksList from "./TaskList";
import { tasks as data } from "./tasks";
import React, { useState, useEffect } from "react";


export default function App(){

  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle){
    setTasks([...tasks, {title: taskTitle, id: tasks.length, description: 'afasdf'}])
  }
  return (<>
    <TaskForm createTask={createTask}/>
    <TasksList tasks={tasks}/>
  </>)
}

