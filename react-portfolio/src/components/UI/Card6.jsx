import { Card, Button } from "react-bootstrap";

export default function CardContainer6() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/3136/3136102.png"
      />
      <Card.Body>
        <Card.Title>Social Network API</Card.Title>
        <Card.Text>
          This application uses NodeJS, MongoDB, and Insomnia to create a
          MongoDB, server using Express in Node, and Insomnia to interact with
          the data. This application will allow you to manage users, thoughts,
          and reactions.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/social-network-api"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
