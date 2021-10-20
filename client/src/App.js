import React from 'react';
import './App.css';
import TaskForm from "./tasks/TaskForm";
import TasksTable from "./tasks/TasksTable";
import notepad from "./notepad.png";

function App() {
  return (
    <div className="App container">
      <h1>Organise everything with this simple Task Manager</h1>
      <img src={notepad} alt="A notepad and pen"/>
      <h3 >Add a task:</h3>
      <div>
        <TaskForm/>
      </div>
      <h3>List of tasks:</h3>
      <div>
        <TasksTable />
      </div>
    </div>
  );
}

export default App;
