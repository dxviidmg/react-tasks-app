import TaskCard from "./TaskCard";

function TasksList({tasks, deleteTask}) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} deleteTask={deleteTask} key={task.id}/>
      ))}
    </div>
  );
}

export default TasksList;
