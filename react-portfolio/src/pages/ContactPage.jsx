import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import validator from "validator";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");
  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      SetMessage("Please enter a valid email");
    } else {
      SetMessage("");
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          required
          onChange={handleEmail}
        />
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Message:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
