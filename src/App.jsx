import TaskForm from "./components/TaskForm";
import TasksList from "./components/TaskList";
import React, { useState, useEffect } from "react";


export default function App(){



  return (<main className="bg-zinc-900 h-screen">
    <div className="container mx-auto p-10">
    <TaskForm/>
    <TasksList/>
    </div>

  </main>)
}

