import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TasksList;
