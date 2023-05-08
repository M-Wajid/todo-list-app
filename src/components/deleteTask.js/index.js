import GenericModal from '../modal/modal'

const DeleteTask = (props) => {
  const {data,setData,task,setTask,show,setShow} = props;
  
  const deleteFunc = () => {
    Object.keys(task).length !== 0 && 
    <>
      {setData(data.filter(item => item.name !== task.name))}
      {setTask({})}
    </>
  }

  return (
    <GenericModal show={show} setShow={setShow} name="Delete"  mainForm={"Are you sure?"} mainFunc={deleteFunc} />
  )
}

export default DeleteTask