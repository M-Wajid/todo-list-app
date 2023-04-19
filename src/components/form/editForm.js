import Form from "react-bootstrap/Form";
import GenericForm from ".";
import { fields } from "../../data/taskFields";

const EditForm = (props) => {
  const { data, task, setTask } = props;

  const changeHandler = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const changeHandler2 = (event) => {
    if (event.target.value !== "default") {
      setTask(data.find((item) => item.name === event.target.value));
    } else {
      setTask({});
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tasks</Form.Label>
          <select
            name="name"
            className="form-control"
            onChange={changeHandler2}
          >
            <option value="default">Please select a Task</option>
            {data.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        </Form.Group>
      </Form>
      {Object.keys(task).length !== 0 && (
        <GenericForm
          fields={fields}
          changeHandler={changeHandler}
          task={task}
        />
      )}
    </>
  );
};

export default EditForm;
