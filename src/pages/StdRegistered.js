import { useState } from "react";

import { Col, Row, Container, Form, Button } from "react-bootstrap";

import { StdService, fetchData } from "../services/StdServices";
import { Link } from "react-router-dom";



export function StudentReg() {
  const[formData,setFormData]  =useState({id:0,name:"",subject:"",rollno:0});

 const[students,setStudent]=useState([]);
 
  const handleField=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    StdService(formData)
    .then((response)=>{
alert(response.data.message)
    })
    .catch((error)=>{
console.log(error)
    })
    console.log(formData)
    
  }

  const getStudent = async()=>{
    const response = await fetchData();
    console.log(response.data);
    setStudent(response.data)
    
  }



  return (
    <>
      
      <Container>
       
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={4}>
                
      <Form.Group className="mb-3" >
         {/* <Form.Label>Enter the Student</Form.Label>  */}
        <Form.Control type="number" placeholder="Enter Id" name="id" onChange={handleField} readOnly hidden/>
     <h1>Fill the details</h1>
      </Form.Group>
              </Col>
              <Col lg={4}>
              <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleField} required />
      </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
              <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter Subject" name="subject" onChange={handleField} required/>
      </Form.Group>
              </Col>
              <Col lg={4}><Form.Group className="mb-3" >
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="number" placeholder="Enter Roll" name="rollno" onChange={handleField} required />
      </Form.Group></Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Button type="submit"  variant="primary">Regitser Student</Button>
              </Col>
            </Row>
          </Form>
        </Container>

     <Button type="button" onClick={getStudent}  variant="primary" ><Link  style={{ color: 'inherit', textDecoration: 'none' }} to='/stdlist'>Fetch</Link></Button>
        {/* <Button type="button" onClick={delStudent}  variant="primary">Fetch</Button>  */}

      
      </Container>
    </>
  );
}
