import React from 'react'
import {Header} from '../components/Header'
import {  Navigation } from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import  CarouselHead  from '../components/CarouselHead'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from '../components/footer';






export const Home = () => {
  return (
    <div>
 <Navigation/>
    <Container>
      
      <Header  title="Home" />

      <CarouselHead/>
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
      
     
     
     <Footer/>

    </div>
  )
}
