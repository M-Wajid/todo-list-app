import Form from "react-bootstrap/Form";
import GenericForm from ".";

const EditForm = (props) => {
  const { data, task, setTask } = props;

  const fields = [
    {
      title: "Task Name",
      name: "name",
      type: "text",
      placeholder: "Task#1"
    },
    {
      title: "Task Description",
      name:"description",
      type:"text",
      placeholder:"Description"
    },
    {
      title: "Task Due Date",
      name:"dueDate",
      type:"date",
      min: new Date().toISOString().split("T")[0]
    },
    {
      title: "Task Status",
      name:"status",
      type:"radio", 
      value:"Incomplete",
      label:"Incomplete"
    },
    {
      name:"status",
      type:"radio",
      value:"Completed",
      label:"Completed"
    }]
  
  const changeHandler = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  const changeHandler2 = (event) => {
    if(event.target.value !== "default"){
      setTask(data.find(item => item.name === event.target.value))
    } else{
      setTask({})
    }
    
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tasks</Form.Label>
        <select name="name" className="form-control" onChange={changeHandler2}>
          <option value="default">Please select a Task</option>
          {data.map(item => <option value={item.name}>{item.name}</option>)}
        </select>
      </Form.Group>
      {Object.keys(task).length !== 0 &&  
      <GenericForm fields={fields} changeHandler={changeHandler} task={task}/>}
    </Form>
  );
};

export default EditForm;
