/*rfce atalho*/
import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './style.css'  

function index() {
  return (
    <Navbar bg="dark" expand="lg">
  <Container >
    <Navbar.Brand href="#home">Games shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto Navbar">
        <Nav.Link><Link to='/' className='link' >Home</Link></Nav.Link>
        <Nav.Link> <Link to='/Login' className='link'>Login</Link> </Nav.Link>
        <Nav.Link> <Link to='/Gender' className='link'>Genero</Link> </Nav.Link>

        <Nav.Link> <Link to='/Cadastro'
         className='link'>
          Cadastro
          </Link> 
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default index