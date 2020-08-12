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
          <Nav.Link href="genres">Genres</Nav.Link>
          <Nav.Link href="books">Books</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar