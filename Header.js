import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropDown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav  from 'react-bootstrap/Nav';
import "./Header.css";
import first from "./img/first.png";



export default function Header()
{
    return(
        <>
        
        <Navbar bg="light" expand="lg">
  <Container>
    <img src={first} width="150px"/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto ">
        <Nav.Link href="#home "className="mx-3 ab " >Home</Nav.Link>
        <Nav.Link href="#link" className="mx-3 bc">About</Nav.Link>
        <Nav.Link href="#link" className="mx-3 cd">Services</Nav.Link>
        <Nav.Link href="#link" className="mx-3 ef">Blog</Nav.Link>
        <NavDropdown title="Publication" className="mx-3 gh"id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Newsletter</NavDropdown.Item>
          
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link href="#link" className="mx-3 ij">Contact</Nav.Link>
        <Nav.Link href="#link" className="mx-3 kl">I'am Job Seeker</Nav.Link>
        <button className="mx-3 a1">I am  a an Empolyeer</button>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
</>

        

    )
}