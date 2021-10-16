import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/home" className="text-white fs-3">
          E-gadget
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="w-100 w-md-50 my-3 my-md-0 mx-auto">
            <FormControl
              placeholder="Search Products"
              aria-label="Search Products"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Nav className="ms-auto">
            <FontAwesomeIcon
              className="fs-4 text-white me-5 cursor mb-3 mb-md-0"
              icon={faShoppingCart}
            />
            <FontAwesomeIcon className="fs-4 text-white cursor mb-2 mb-md-0" icon={faUser} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
