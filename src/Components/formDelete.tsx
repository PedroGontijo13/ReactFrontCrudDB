import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import api from "../services/api";

function FormDelete() {
  const [id, setId] = useState("");

  function handleSubmit() {
    const data = { id: id };

    const response = api.delete(`/users/${data.id}`, {
        headers: {
            'Access-Control-Allow-Credentials':true
        }
    });

    console.log(response)
  }

  return (
    <div>
      <Form
        onSubmit={(event: any) => {
          event.preventDefault();
          handleSubmit();
          alert("ENVIADO!")
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="id"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
            placeholder="Enter Id"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormDelete;
