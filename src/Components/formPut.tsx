import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import api from "../services/api";

function FormPut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  function handleSubmit() {
    const data = { id: id, name: name, email: email };

    const response = api.put(`/users/${data.id}`, data);

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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormPut;
