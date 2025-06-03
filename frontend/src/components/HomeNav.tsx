import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const HomeNav: React.FC = () => {

  return (
    <div>
      <Navbar expand="lg" fixed="top" bg="warning" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="/film-b.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            WATCH&RATE
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/add"> Write a Review </Nav.Link>
              <Nav.Link href="/watchlist"> Watchlist </Nav.Link>
              <Nav.Link href="/login">
                <Button variant="outline-dark" size="sm"> Login </Button>
              </Nav.Link>
              <Nav.Link href="/signup">
                <Button variant="dark" size="sm"> Sign Up </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNav;