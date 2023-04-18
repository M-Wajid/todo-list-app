import GenericForm from ".";

const AddForm = (props) => {

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
    }
  ]

  const { task, setTask } = props;

  const changeHandler = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  return (
    <GenericForm fields={fields} changeHandler={changeHandler}/>
  );
};

export default AddForm;
