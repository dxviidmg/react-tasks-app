import React from 'react'
import { useState } from 'react'

function TaskForm({createTask}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handerSumbit = (e) => {
        e.preventDefault()
        createTask({title, description})
    }

  return (<form onSubmit={handerSumbit}>
        <input placeholder='Escribe tu tarea' onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Escribe la descripción' onChange={(e) => setDescription(e.target.value)}></textarea>

        <button> Guardar</button>
        </form>
  )
}

export default TaskForm