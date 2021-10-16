import React from "react";
import { Container, Row } from "react-bootstrap";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <header>
      <div className="d-none d-md-block bg-light border-bottom">
        <Container>
          <Row>
            <SubHeader />
          </Row>
        </Container>
      </div>
      <div className="bg-dark">
        <Container>
          <Row>
            <MainHeader />
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
