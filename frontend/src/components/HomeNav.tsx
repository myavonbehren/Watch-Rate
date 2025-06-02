import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HomeNav: React.FC = () => {

  return (
    <div>
      <Navbar expand="lg" fixed="top" bg="warning" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="/public/film-b.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            WATCH&RATE
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNav;