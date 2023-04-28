import Form from "react-bootstrap/Form";

const DeleteForm = (props) => {
  const { data, task, setTask } = props;

  const changeHandler = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tasks</Form.Label>
        <select name="name" className="form-control" onChange={changeHandler}>
          <option value="default">Please select a Task</option>
          {data.map(item => <option value={item.name}>{item.name}</option>)}
        </select>
      </Form.Group>
    </Form>
  );
};

export default DeleteForm;
