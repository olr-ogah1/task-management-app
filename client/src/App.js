import React from 'react';
import './App.css';
import TaskForm from "./tasks/TaskForm";
import TasksTable from "./tasks/TasksTable";
import TaskTitle from "./tasks/TaskTitle";
import notepad from "./notepad.png";

function App() {
  return (
    <div className="App container">
      <div>
        <TaskTitle/>
      </div>
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
