import React from 'react'
import { tasks as data} from './tasks'
import { useState, useEffect } from 'react'


//console.log(data)

function TasksList() {
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    setTasks(data)
  }, [])
  
  console.log('t', tasks)
  
  if (tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  return (
    <div>
      {tasks.map((task) => {
        <div>tarea</div>
      })}

  </div>
  )
}

export default TasksList