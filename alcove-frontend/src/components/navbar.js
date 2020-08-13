import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Alcove</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/genres">Genres</Nav.Link>
          <Nav.Link href="http://localhost:3000/books/new">New Book</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar