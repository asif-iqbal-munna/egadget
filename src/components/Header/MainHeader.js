import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

const MainHeader = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex align-items-center">
        <Navbar.Brand href="#home" className="text-white fs-3">
          E-gadget
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="w-50 mx-auto">
            <FormControl
              placeholder="Search Products"
              aria-label="Search Products"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Nav className="ms-auto">
            <i className="fas fa-shopping-cart fs-4 text-white me-5 cursor"></i>
            <i className="fas fa-user fs-4 text-white cursor"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
