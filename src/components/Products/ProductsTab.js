import React from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";

const ProductsTab = () => {
  const [products] = useProducts();
  const laptops = products.filter((product) => product.catagory === "laptop");
  const cameras = products.filter((product) => product.catagory === "camera");
  const watches = products.filter((product) => product.catagory === "watch");

  return (
    <Container className="my-5">
      <Row>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {/* Tab items for the laptop */}
          <Tab eventKey="home" title="Home">
            <Row xs={1} md={3} className="g-4">
              {laptops.map((laptop) => (
                <Col key={laptop.id}>
                  <Card>
                    <Card.Img variant="top" src={laptop.displayImg} />
                    <Card.Body>
                      <Card.Title>{laptop.name}</Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {laptop.price}
                        </small>
                        <small className="fs-5 fw-bold">{laptop.sale}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          {/* Tab items for the cameras */}
          <Tab eventKey="profile" title="Profile">
            <Row xs={1} md={3} className="g-4">
              {cameras.map((camera) => (
                <Col key={camera.id}>
                  <Card>
                    <Card.Img variant="top" src={camera.displayImg} />
                    <Card.Body>
                      <Card.Title>{camera.name}</Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {camera.price}
                        </small>
                        <small className="fs-5 fw-bold">{camera.sale}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          {/* Tab Items for the watches */}
          <Tab eventKey="contact" title="Contact">
            <Row xs={1} md={3} className="g-4">
              {watches.map((watch) => (
                <Col key={watch.id}>
                  <Card>
                    <Card.Img variant="top" src={watch.displayImg} />
                    <Card.Body>
                      <Card.Title>{watch.name}</Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {watch.price}
                        </small>
                        <small className="fs-5 fw-bold">{watch.sale}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default ProductsTab;
