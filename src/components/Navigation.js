import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Navigation(){
    return(
        <>
         <Navbar expand="lg" className="bg-dark flex justify " data-bs-theme="dark">
      <Container>
        <Navbar.Brand  className=""><Link className="text-none" to="/">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
    
            <Nav.Link ><Link to="/">Home</Link></Nav.Link> 
        
        <Nav.Link><Link to="/about">About</Link></Nav.Link> 
        <Nav.Link><Link to="/contact">ContactUs</Link></Nav.Link> 
        <Nav.Link><Link to="/feedback">Feedback</Link></Nav.Link> 
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PG-DAC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               PG-DBDA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
               PG-DCS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">PG-DAI</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

<Nav>
          <Nav.Link><Link to="/about">SignUp</Link></Nav.Link>
          <Nav.Link><Link to="/about">Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
          
          
        
      </Container>
    </Navbar>
{/* 
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        
        </>
    )
}