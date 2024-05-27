import { Link, useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { removeToken } from '../services/adminLogin';


export function Navigation(){

 const navigate =   useNavigate();

  const handleLogout=()=>{

    removeToken()
    navigate("/")

  }

    return(
        <>

         <Navbar expand="lg" className="bg-dark text-white flex justify " data-bs-theme="dark">
      <Container>
        <Navbar.Brand  className=""><Link className="text-none" to="/home">CAMU</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
    
            <Nav.Link ><Link id={styles.l1} to="/home">Home</Link></Nav.Link> 
        
        <Nav.Link><Link id={styles.l1}  to="/about">About</Link></Nav.Link> 
        <Nav.Link><Link id={styles.l1}  to="/contact">ContactUs</Link></Nav.Link> 
        <Nav.Link><Link id={styles.l1}  to="/feedback">Feedback</Link></Nav.Link> 
        <Nav.Link><Link id={styles.l1}  to="/course">Courses</Link></Nav.Link> 
        
          </Nav>

<Nav>
          <Nav.Link>
            <Button type="submit"   onClick={handleLogout} varient="primary">Logout</Button>
            {/* <Link to="#">Logout</Link>
             */}
            </Nav.Link>
          {/* <Nav.Link><Link to="/login">Login</Link></Nav.Link>  */}
          </Nav>
        </Navbar.Collapse>
       
          
          
        
      </Container>
    </Navbar>

        </>
    )
}