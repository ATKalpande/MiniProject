import React from "react";
import { Header } from "../components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card1";

const About = () => {
  return (
    <div>
      {/* <Header title="This is About Page" /> */}
      <Container className="text-center p-3 underline">
        <h1>Camu</h1>

        <p>
          We help Institutions across the world upgrade their education system
          and bring students closer to their career goals. Camu offers the Best
          in Class School and College Management system. We’re one of the most
          Comprehensive college and school ERP systems available in the market.
          Take a look at what some of our clients have to say
        </p>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card
              src="assets/img/mansi.jpeg"
              title="Mansi Agarwal"
              email="mansisinghal63@gmail.com"
              phone="+91 7015545877"
            />
          </Col>
          <Col>
            {" "}
            <Card
              src="assets/img/akash.jpeg"
              title="Akash Kalpande"
              email="akashkalpande2020@gmail.com"
              phone="+91 7620127464"
            />
          </Col>
          <Col>
            {" "}
            <Card
              src="assets/img/shubham.jpeg"
              title="Shubham"
              email="shubhamcharthad5050@gmail.com"
              phone="+91 7249044878"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
