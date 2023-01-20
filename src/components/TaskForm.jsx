import React from 'react'
import { useState } from 'react'

function TaskForm({createTask}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handerSumbit = (e) => {
        e.preventDefault()
        createTask({title, description})
        setTitle("")
        setDescription("")
    }

  return (<form onSubmit={handerSumbit}>
        <input placeholder='Escribe tu tarea' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>
        <textarea placeholder='Escribe la descripción' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

        <button> Guardar</button>
        </form>
  )
}

export default TaskForm