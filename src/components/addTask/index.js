import { useState } from "react";
import AddForm from "../form/addForm";
import GenericModal from "../modal/modal";
import GenericButton from './../button/genericButton';


const AddTask = (props) => {
  const {data,setData,task,setTask} = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const addFunc = () => {
    Object.keys(task).length === 5 && 
    <>
      {setData([
        ...data,
        {
          "id": crypto.randomUUID(),
          ...task
        }
      ])}
      {setTask({})}
    </>
  }

  return (
  <>
    <GenericButton buttonName="Add" buttonClass="buttonClass" clickFunc={handleShow}/>
    <GenericModal show={show} setShow={setShow} name="Add" mainForm={<AddForm task={task} setTask={setTask}/>} mainFunc={addFunc} />
  </>
    
  )
}

export default AddTask