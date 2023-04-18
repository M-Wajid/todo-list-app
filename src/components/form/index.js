import { Form } from "react-bootstrap";

const GenericForm = (props) => {
  const { fields, changeHandler, task} = props;
  return (
    <Form>
      {fields.map((field,i) =>
        field?.type === "text" ||
        field?.type === "password" ||
        field?.type === "email" ||
        field?.type === "date" ? (
          <Form.Group className="mb-3">
            <Form.Label>{field?.title}</Form.Label>
            <Form.Control
              name={field?.name}
              type={field?.type}
              placeholder={field?.placeholder}
              min={field?.min}
              defaultValue= {props.task && Object.values(task)[i]}
              onChange={changeHandler}
            />
          </Form.Group>
        ) : field?.type === "radio" || field?.type === "checkbox" ? (
          <Form.Group className="mb-3">
            <Form.Label>{field?.title}</Form.Label>
            <Form.Check
              name={field?.name}
              type={field?.type}
              placeholder={field?.placeholder}
              value={field?.value} 
              label={field?.label}
              onChange={changeHandler}
            />
          </Form.Group>
        ) : (
          <span style={{color: "red" , fontSize: "13px"}}>Invalid field</span>
        )
      )}
    </Form>
  );
};

export default GenericForm;
