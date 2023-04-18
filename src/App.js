import './App.css';
import tasks from "./data/tasks.json"
import GenericTable from './components/table';
import { useState } from 'react';
import GenericModal from './components/modal/modal';
import AddForm from './components/form/addForm';
import EditForm from './components/form/editForm';
import DeleteForm from './components/form/deleteForm';

function App() {
  const [data, setData] = useState(tasks);
  const [task, setTask] = useState({});

  const tableHeading = ["name", "description", "dueDate", "status"];

  const addFunc = () => {
    Object.keys(task).length === 4 && 
    <>
      {setData([
        ...data,
        task
      ])}
      {setTask({})}
    </>
      
  }

  const editFunc = () => {
    Object.keys(task).length === 4 && 
    <>
      {setData(data.map(item => item.name === task.name ? task : item))}
      {setTask({})}
    </> 
  }

  const deleteFunc = () => {
    Object.keys(task).length !== 0 && 
    <>
      {setData(data.filter(item => item.name !== task.name))}
      {setTask({})}
    </>
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
          <GenericModal name="Add" mainForm={<AddForm task={task} setTask={setTask}/>} mainFunc={addFunc} />
          <GenericModal name="Edit" mainForm={<EditForm data={data} task={task} setTask={setTask}/> } mainFunc={editFunc} />
          <GenericModal name="Delete"  mainForm={<DeleteForm data={data} task={task} setTask={setTask}/>} mainFunc={deleteFunc} />
        </div>
        <GenericTable data={data} tableHeading={tableHeading}/>
      </header>
    </div>
  );
}

export default App;
