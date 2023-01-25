import React from 'react'
import { useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

TaskContext
function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {createTask} = useContext(TaskContext)

    const handerSumbit = (e) => {
        e.preventDefault()
        createTask({title, description})
        setTitle("")
        setDescription("")
    }

  return (<form onSubmit={handerSumbit}>
        <input placeholder='Escribe tu tarea bro' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>
        <textarea placeholder='Escribe la descripción' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

        <button> Guardar</button>
        </form>
  )
}

export default TaskForm