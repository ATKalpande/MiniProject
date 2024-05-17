import React from "react";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card1";

const About = () => {
  return (
    <div>
      <Navigation />
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
    <Card src="assets/img/img1.jpeg" title="PersonName" description="Person-info"/>
    </Col>
    <Col><Card src="assets/img/img1.jpeg" title="PersonName" description="Person-info"/>
 </Col>
    <Col><Card src="assets/img/img1.jpeg" title="PersonName" description="Person-info"/>
 </Col>
  </Row>
</Container>
      <Footer />
    </div>
  );
};

export default About;
