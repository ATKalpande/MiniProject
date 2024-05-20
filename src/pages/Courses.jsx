import React from "react";
import CourseCard from "../components/CourseCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom'
import { Databinding } from "../components/Databinding";

import "./courses.css"

const Courses = () => {
  function handleClick(){
    alert("Clicked")
  }
  return (
    <>
      <Container className="mt-5">
        <Row className="row">
          <Col className="border m-2 ">
            <CourseCard
              title="PG-DAC
Post Graduate Diploma In Advanced Computing"
              desc=""
              src="assets/img/dac.png"
              duration="6 Month"
              fees="1,00,000 ₹"
            

            />
            <button onClick={handleClick} className="btn m-3 btn-secondary">Click</button>
          </Col>
          <Col className="border m-2">
            <CourseCard
              title="PG-DBDA
Post Graduate Diploma in Big Data Analytics"
              src="assets/img/DAI.png"
              duration="6 Month"
              fees="1,00,000 ₹"
              
            />
            <button onClick={handleClick} className="btn m-3 btn-secondary">Click</button>

          </Col>
          <Col className="border m-2 ">
            <CourseCard
              title="PG-DAI
Post Graduate Diploma in Artificial Intelligence"
              src="assets/img/DBDA.png"
              duration="6 Month"
              fees="1,00,000 ₹"
            />
            <button  className="btn m-3 btn-secondary"><Link to="/Contact">Enroll</Link></button>

          </Col>
          <Col  className="border  m-2">
            <CourseCard 
              title="PG-DCSF
Post Graduate Diploma in Cyber Security & Forensics"
              src="assets/img/DCSF.png"
              duration="6 Month"
              fees="1,00,000 ₹"
            />
            <button onClick={handleClick} className="btn m-3 btn-secondary">Click</button>

          </Col>

        </Row>
      </Container>
      {/* <Databinding/> */}
    </>
  );
};

export default Courses;
