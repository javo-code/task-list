import "./App.css";
//import TaskForm from "./components/TaskForm/TaskForm";
//import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="task-app">
      <div className="title-container">
        <h1 className="title">T A S K L I S T</h1>
      </div>
      <div className="task-main-container">
        <h2>Mis Tareas</h2>
        <TaskList />
        {/* <Task text='Crear app: "Lista de tareas".'/> */}
        {/* <TaskForm /> */}
      </div>
    </div>
  );
}

export default App;
