import { Card, Button } from "react-bootstrap";

export default function CardContainer1() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/3721/3721819.png"
      />
      <Card.Body>
        <Card.Title>JATE - Just Another Text Editor</Card.Title>
        <Card.Text>
          JATE (Just Another Text Editor) is a PWA (progressive web app) that
          allows users to enter notes and come back to them later without
          needing to specifically save or create files to come back to. This
          application uses various plugins to save entered information into the
          browsers indexedDb and load as you go.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/pwa-text-editor"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
