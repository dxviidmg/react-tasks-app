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

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handerSumbit} className="bg-slate-900 p-10">
        <h1 className='text-2x1 font-bold text-white mb-3'>Crea tu tarea</h1>
        <input placeholder='Escribe tu tarea' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus className='bg-slate-300 p-2 w-full mb-2'/>
        <textarea placeholder='Escribe la descripción' onChange={(e) => setDescription(e.target.value)} value={description} className='bg-slate-300 p-2 w-full mb-2'></textarea>

        <button className='bg-indigo-500 py-3 px-2 text-white'> Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm