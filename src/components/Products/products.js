import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const products = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="my-5"
    >
      <Tab eventKey="home" title="Home">
        <h2>first</h2>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h2>second</h2>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h2>third</h2>
      </Tab>
    </Tabs>
  );
};

export default products;
