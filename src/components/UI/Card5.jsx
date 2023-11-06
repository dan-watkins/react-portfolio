import { Card, Button } from "react-bootstrap";

export default function CardContainer5() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png"
      />
      <Card.Body>
        <Card.Title>Tech Blog</Card.Title>
        <Card.Text>
          My version of a social media platform, which allows users to sign up,
          log in, create blog posts, and comment on other users' posts as well.
          Dashboard shows all posts across every user on the platform, Profile
          shows posts you've specifically created, and everyone has the ability
          to comment on any post.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/dan-watkins/tech-blog"
        >
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
