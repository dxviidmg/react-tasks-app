import React from 'react'
import { useState } from 'react'

function TaskForm() {
    const [title, setTitle] = useState("")

    const handerSumbit = (e) => {
        e.preventDefault()
        console.log(title)
    }

  return (<form onSubmit={handerSumbit}>
        <input placeholder='Escribe tu tarea' onChange={(e) => setTitle(e.target.value)}/>
        <button> Guardar</button>
        </form>
  )
}

export default TaskForm