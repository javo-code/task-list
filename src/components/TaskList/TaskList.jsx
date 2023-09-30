import { useState } from "react";
import "./taskList.css";
import TaskForm from "../TaskForm/TaskForm";
import Task from "../Task/Task";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    //fn "agregar tarea".
    const addTask = (task) => {
        console.log("tarea agregada");
        console.log(task);

        if (task.text.trim()) {
        //creamos condicion para controlar que la "tarea" no este en blaco y de paso, tenga espacios innecesarios al comienzo y al final, todo eso con el metodo ".trim()"
        task.text = task.text.trim(); // y aqui sobre escribimos el valor del texto de la tarea quitandole los espacios de mas.
            const tasksActualized = [task, ...tasks]; // ahora, tomamos el estado actual de las tareas y "agregamos" la "tarea nueva".
            //si utilizamos el operador "spread" despues del arreglo "tareas", estamos indicando que la "nueva tarea" se agregara al principio del arreglo.
            setTasks(tasksActualized); // llamamos a la fn "setTareas" y le pasamos como argumento la "nueva tarea" para renderizarlas / actualizar su estado. */
            //nota: usamos un arreglo nuevo ("taskActualized") en lugar de un "metodo para arreglos" ya que si solamente acutalizamos el arreglo "tareas" no se va a ctualizar la presentacion del componente.
        };
    };

    // fn "eliminar tarea".
    const deleteTask = (id) => {
        const tasksActualized = tasks.filter((task) => task.id !== id);
        setTasks(tasksActualized);
    };

    // fn "finalizar tarea".
    const finishTask = (id) => {
        const tasksActualized = tasks.map((task) => {
        if (task.id === id) {
            task.done = !task.done;
            };
        return task;
        });
        setTasks(tasksActualized);
    };

    return (
        <>
        {/* cuando se envie el formulario llamaemos a la fn "addTask" */}
            <TaskForm onSubmit={addTask} />
            <div className="task-list-container">
                {
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        done={task.done}
                        finishTask={finishTask}
                        deleteTask={deleteTask}
                    />
                        )
                    )
                }
            </div>
        </>
    );
};
