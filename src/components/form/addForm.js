import GenericForm from ".";
import {fields} from "../../data/taskFields";

const AddForm = (props) => {

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
