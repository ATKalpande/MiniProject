import React from "react";
import { Header } from "../components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card1";

const About = () => {
  return (
    <div>
   
      <Header title="This is About Page" />
      <Container className="">
        <h1>Camu</h1>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </Container>

<Container>
  <Row>
    <Col>
    <Card src="assets/img/mansi.jpeg" title="Mansi Agarwal" email="mansi@gmail.com" phone="7954646"/>
    </Col>
    <Col> <Card src="assets/img/akash.jpeg" title="Akash Kalpande" email="akash@gmail.com" phone="7954646"/>
 </Col>
    <Col> <Card src="assets/img/shubham.jpeg" title="Shubham" email="shubham@gmail.com" phone="7954646"/>
 </Col>
  </Row>
</Container>

    </div>
  );
};

export default About;
