import { Card, Button } from "react-bootstrap";
import "../../App.css";

export default function CardContainer2(project) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/2351/2351891.png"
      />
      <Card.Body>
        <Card.Title>JavaScript Fundamentals Quiz</Card.Title>
        <Card.Text>
          This application is a test of your JavaScript fundamentals. The test
          lasts either 60 seconds or until all available questions are answered.
          Answering a question incorrectly subtracts 5 seconds from the
          available timer. Answering a question correctly adds a +1 to your
          score.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/javascript-fundamentals-quiz"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
