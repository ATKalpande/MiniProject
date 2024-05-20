import React from "react";
import { Header } from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHead from "../components/CarouselHead";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const Home = () => {
  return (
    <div>
      <Container>
        <Header title="Home" />
      
      

        <CarouselHead />
        {/* 
<Container>
   <Row className='mt-5' >
        <Col className="bg-info">
        <p>import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import {Header} from '../components/Header'
import {  Navigation } from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import  CarouselHead  from '../components/CarouselHead'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from 'react'
import {Header} from '../components/Header'
import {  Navigation } from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import  CarouselHead  from '../components/CarouselHead'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


</p>
        </Col>
        <Col>
        <p>import React from 'react'
import {Header} from '../components/Header'
import {  Navigation } from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import  CarouselHead  from '../components/CarouselHead'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

</p>
        </Col>
      </Row>
</Container> */}
      </Container>

<Container>
<button className="btn btn-primary m-4" type="submit">Add Student</button>
<button className="btn btn-primary m-4" type="submit">Show Student</button>
  
</Container>

<Container>
            
            <p align="justify">
            Take the right decision at the right time.Managing student registrations, records, and grading are important functions of any Institution. Manual systems spread these tasks across different departments, which results in the misplacement of documents and even breach of privacy. So, you need the right student record system to do that.
            </p>
            <p align="justify">
            Camu’s Student Information System helps you to store, retrieve, manage, monitor, and analyze student data, with efficiency and privacy. Moreover, our student attendance management system relieves you from the task of marking several candidates’ attendance in class. Camu’s student database management system orchestrates the student lifecycle processes, enabling teams to make important decisions.We have one of the best student information systems for schools, colleges, and universities. Also, our Student information system for K12 and Higher education will help you make the right decision for your institutions. All your official information is safe and secure with our student record management system!
            </p>

            <img  width={"60%"} src="./assets/img/mid.jpeg"></img>
            <img width ={"50%"} height={"400px"} src="./assets/img/mid1.jpeg"></img>
            <p>Streamline your admission process by making it efficient and time-saving with our online admission system. Students can check the program requirements and instantly click to apply, and the applications can be tracked and processed in bulk with a wholesome student information management system. Generate admission offers and emails, automate status change notifications, communicate with prospective students all in real-time. And the entire process is accessible right from your mobile phone when accessed through Camu’s student enrollment system.</p>
            
           
        </Container>

   
    </div>
  );
};
