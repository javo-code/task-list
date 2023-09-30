import React from "react";
import "./task.css";
import { /* AiOutlineCheck, AiFillEdit, */ AiOutlineCloseCircle  } from "react-icons/ai";

export default function Task({ id, text, done, finishTask, deleteTask, editTask }) {
    return (
        <div className={done ? 'task-container done' : 'task-container'}>
            <div
                className="task-text"
                onClick={() => finishTask(id)}
            >
                {text}
            </div>
            <div
                className="task-icons-container"
                onClick={() => deleteTask(id)} >
                <AiOutlineCloseCircle className="task-icon" />
                {/* <AiOutlineCheck 
                className="task-icon" 
                onClick={() => finishTask(id)}
                /> */}
                {/*  <AiFillEdit 
                    className="task-icon"
                    onClick={() => editTask(id)} //IDEM  "finishTask y deleteTask"
                /> */}
            </div>
        </div>
    );    
}
