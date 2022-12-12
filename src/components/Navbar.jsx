import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
const Navbara = () => {
  const counter= useSelector((state)=>state.cart)
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to='/' >Home</Link></Nav.Link>
          <Nav.Link> <Link to='/cart' >Cart</Link></Nav.Link>
          <Nav.Link> <Link to='/produts' >Produts</Link></Nav.Link>

           
          <Nav.Link >Cart:{counter.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbara