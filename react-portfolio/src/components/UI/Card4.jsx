import { Card, Button } from "react-bootstrap";

export default function CardContainer4() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/3649/3649281.png"
      />
      <Card.Body>
        <Card.Title>E-Commerce Backend</Card.Title>
        <Card.Text>
          This application uses MySQL, Sequelize, and Express to create an API
          interface to manage Products, Categories, and Tags for an e-commerce
          marketplace. This has no front end so interactions will take place
          within either Postman or Insomnia to view, update, create, and delete
          data.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/e-commerce-backend"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
