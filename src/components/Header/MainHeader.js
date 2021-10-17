import React, { useContext } from "react";
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
import { orderContext } from "../../App";
import OffCanvasExample from "./Cart";

const MainHeader = () => {
  const orders = useContext(orderContext);
  console.log(orders);

  return (
    <Navbar fixed="top" bg="dark" expand="lg" className="overflow-hidden">
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
            {[
              <div className="d-inline cart cursor">
                <FontAwesomeIcon
                  className="fs-4 text-white mb-3 mb-md-0"
                  icon={faShoppingCart}
                />
                <p className="text-warning fs-4 order d-inline fw-bold">
                  {orders.length}
                </p>
              </div>,
            ].map((placement, idx) => (
              <OffCanvasExample
                key={idx}
                placement={placement}
                name={placement}
              />
            ))}

            <FontAwesomeIcon
              className="fs-4 ms-0 ms-lg-5 text-white cursor mb-2 mb-md-0"
              icon={faUser}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
