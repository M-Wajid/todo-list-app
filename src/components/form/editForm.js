import GenericForm from ".";
import { fields } from "../../data/taskFields";

const EditForm = (props) => {
  const { task, setTask } = props;

  const changeHandler = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  return (
    Object.keys(task).length !== 0 && (
      <GenericForm fields={fields} changeHandler={changeHandler} task={task} />
    )
  );
};

export default EditForm;
