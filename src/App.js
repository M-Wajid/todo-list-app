import "./App.css";
import tasks from "./data/tasks.json";
import { useState } from "react";
import AddTask from "./components/addTask";
import TodoList from "./components/todoList";

function App() {
  const [data, setData] = useState(tasks);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <AddTask data={data} setData={setData} task={task} setTask={setTask} />
        <TodoList data={data} setData={setData} task={task} setTask={setTask} />
      </header>
    </div>
  );
}

export default App;
