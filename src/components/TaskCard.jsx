import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task, deleteTask}) {
  
  const v = useContext(TaskContext)
  console.log(v)
  
  return (
    <div>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
    <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
  </div>
  )
}

export default TaskCard