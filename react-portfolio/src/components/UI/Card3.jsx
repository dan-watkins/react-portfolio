import { Card, Button } from "react-bootstrap";

export default function CardContainer3(project) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <Card.Body>
        <Card.Title>Employee Tracker</Card.Title>
        <Card.Text>
          This command line tool allows for users to view, edit, and add
          information regarding employees. This application uses Inquirer, MySQL
          for the database, and dotenv npm packages to manage employees.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/employee-tracker"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
