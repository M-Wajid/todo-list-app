import EditForm from '../form/editForm'
import GenericModal from '../modal/modal'

const EditTask = (props) => {
  const {data,setData,task,setTask,show,setShow} = props;

  const editFunc = () => {
    setData(data.map(item => item.id === task.id ? task : item))
    setTask({})
  }
  return (
    <GenericModal show={show} setShow={setShow} name="Edit" mainForm={<EditForm data={data} task={task} setTask={setTask}/> } mainFunc={editFunc} />
  )
}

export default EditTask