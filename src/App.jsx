import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <FormGroup className="mt-3">
            <Form.Label>
              <u>Sign Up and Start Learning !</u>
            </Form.Label>
          </FormGroup>
          <Form.Group className="mb-3">
            <Form.Label>First & Last name</Form.Label>
            <Row className="fs-6">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="First name">
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Last name">
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sign up</Form.Label>
            <FloatingLabel
              controlId="formBasicEmail"
              label="Email address"
              className="fs-6"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Form.Text className="text-muted fs-6">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 fs-6" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirm Password"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to terms and conditions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
