import React, { useState } from "react";
import "./taskForm.css";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = (e) => { //para escuchar el "evento" change.
    setInput(e.target.value);
    console.log(e.target.value);
  };
  
  const handleSubmit = (e) => { //para escuchar el "evento" submit.
    e.preventDefault();
    console.log('Enviando formulario...');

    const newTask = {
      id: uuidv4(), //utilizamos la libreria "uuid" para generar "ids" unicos.
      text: input,
      done: false
    };
    
    //recibimos la fn onSubmit mediante "props"
    props.onSubmit(newTask);//pasamos como argumento la nueva tarea
  };

    return (
      <form
          className="task-form"
          onSubmit={handleSubmit}
      >
            <input
              className="task-input"
              type="text"
              placeholder="Escribe una tarea..."
              name="text"
              onChange={handleChange} 
            />
            <button className="task-btn">
              Agregar tarea
            </button>
        </form>
    );
}
