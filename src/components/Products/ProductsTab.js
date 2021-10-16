import { Tabs, Tab, Container, Row, Col, Card, Button } from "react-bootstrap";
import UseOrders from "../../hooks/UseOrders";
import useProducts from "../../hooks/useProducts";

const ProductsTab = () => {
  const [products] = useProducts();

  const laptops = products.filter((product) => product.catagory === "laptop"); // Getting all laptops by catagroy
  const cameras = products.filter((product) => product.catagory === "camera"); // Getting all cameras by catagroy
  const watches = products.filter((product) => product.catagory === "watch"); // Getting all watches by catagroy

  const handleAddToCart = (id) => {
    UseOrders(id);
  };

  return (
    <Container className="my-5">
      <Row>
        <Tabs
          defaultActiveKey="laptops"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {/* Tab items for the laptop */}
          <Tab eventKey="laptops" title="Laptops">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {laptops.map((laptop) => (
                <Col key={laptop.id}>
                  <Card className="p-2">
                    <small className="text-capitalize text-danger">
                      {laptop.stock}
                    </small>
                    <Card.Img variant="top" src={laptop.displayImg} />
                    <Card.Body>
                      <Card.Title>{laptop.name}</Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {laptop.price}
                        </small>
                        <small className="fs-5 fw-bold">{laptop.sale}</small>
                      </Card.Text>
                      <Button
                        onClick={() => handleAddToCart(laptop.id)}
                        variant="info"
                        className="d-block mx-auto"
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          {/* Tab items for the cameras */}
          <Tab eventKey="cameras" title="Cameras">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {cameras.map((camera) => (
                <Col key={camera.id}>
                  <Card className="p-2">
                    <small className="text-capitalize text-danger">
                      {camera.stock}
                    </small>
                    <Card.Img variant="top" src={camera.displayImg} />
                    <Card.Body>
                      <Card.Title className="fs-6 fs-2">
                        {camera.name}
                      </Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {camera.price}
                        </small>
                        <small className="fs-5 fw-bold">{camera.sale}</small>
                      </Card.Text>
                      <Button
                        onClick={() => handleAddToCart(camera.id)}
                        variant="info"
                        className="d-block mx-auto"
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          {/* Tab Items for the watches */}
          <Tab eventKey="watches" title="Watches">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {watches.map((watch) => (
                <Col key={watch.id}>
                  <Card className="p-2">
                    <small className="text-capitalize text-danger">
                      {watch.stock}
                    </small>
                    <Card.Img variant="top" src={watch.displayImg} />
                    <Card.Body>
                      <Card.Title>{watch.name}</Card.Title>
                      <Card.Text>
                        <small className="me-4 fs-6 text-decoration-line-through">
                          {watch.price}
                        </small>
                        <small className="fs-5 fw-bold">{watch.sale}</small>
                      </Card.Text>
                      <Button
                        onClick={() => handleAddToCart(watch.id)}
                        variant="info"
                        className="d-block mx-auto"
                      >
                        Add To Cart
                      </Button>
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
