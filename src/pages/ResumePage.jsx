import { Card, Button } from "react-bootstrap";

export default function ResumePage() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/12129/12129655.png"
      />
      <Card.Body>
        <Card.Title>My Resume</Card.Title>
        <Card.Text>
          Click the download button to see my resume. This is a placeholder
          resume for now.
        </Card.Text>
        <Button href="src/assets/organized_modern_resume.docx">Download</Button>
      </Card.Body>
    </Card>
  );
}
