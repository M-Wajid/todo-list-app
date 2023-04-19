import { Form } from "react-bootstrap";

const GenericForm = (props) => {
  const { fields, changeHandler, task } = props;
  return (
    <Form>
      {fields.map((field, i) => {
        switch (field?.type) {
          case "text":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={props.task && task[field?.name]}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            );
          case "email":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={props.task && task[field?.name]}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            );
          case "password":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={props.task && task[field?.name]}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            );
          case "date":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={props.task && task[field?.name]}
                  min={field?.min}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            );
          case "radio":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                {field?.options.map(item => 
                  <Form.Check
                  name={item?.name}
                  type={field?.type}
                  value={item?.value}
                  label={item?.label}
                  onChange={changeHandler}
                  required
                />
                )}  
              </Form.Group>
            );
          case "checkbox":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                {field?.options.map(item => 
                  <Form.Check
                  name={item?.name}
                  type={field?.type}
                  value={item?.value}
                  label={item?.label}
                  onChange={changeHandler}
                  required
                />
                )}  
              </Form.Group>
            );
          case "select":
            return(
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                  <select className="form-control" name={field?.name} onChange={changeHandler}>
                    {field?.options.map(item => 
                      <option value={item?.value}>{item?.label}</option>)}
                  </select>
              </Form.Group>   
            )
          default:
            return (
              <span style={{ color: "red", fontSize: "13px" }}>
                Invalid field
              </span>
            );
        }
      })}
    </Form>
  );
};

export default GenericForm;
