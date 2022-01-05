import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";



const Navb = () => {
    return (
      <div className="mb-1">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand className="fs-4" href="#home">
              React-Js
            </Navbar.Brand>
            <img
              src="https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png"
              alt="Reactstrap logo"
              className="logo rounded me-2 mb"
            />
            <Navbar.Brand className="fs-4 me-5" href="#home">
              Bootstrap
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About us</Nav.Link>
              <Nav.Link href="#pricing">SignUp</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>
    );
}

export default Navb
