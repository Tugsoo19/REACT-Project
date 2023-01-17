import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function SignUp() {
  return (
    <div className="signPage">
      <h1>Sign up</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name*</Form.Label>
          <Form.Control type="email" placeholder="Enter your name" />
          <br/>
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <br/>
          <Form.Label>Password*</Form.Label>
          <Form.Control type="email" placeholder="Create a password" />
          <Form.Text className="text-muted">
            Must be at least 8 characters
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Create account
        </Button>
        <br/>
        <Form.Text className="text-muted">
            Already have an account? <a href="#" className="primary text-decoration-none">Log in</a>
           
          </Form.Text>
           
      </Form>
    </div>
  );
}
