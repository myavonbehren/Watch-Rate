import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { isAuthenticated, clearAuth, getUser } from '../services/authService';
//import { useNavigate } from 'react-router-dom';

const HomeNav: React.FC = () => {
  //const navigate = useNavigate();
  const currentUser = getUser();

  const handleLogout = () => {
    clearAuth();
    window.location.href = '/';
    //window.location.reload();
    //navigate('/');
  };

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
              <Nav.Link href="/">Home</Nav.Link>
              {isAuthenticated() && (
                <>
                <Nav.Link href="/add">Write a Review</Nav.Link>
                <Nav.Link href="/watchlist">Watchlist</Nav.Link>
              </>
              )}

              { !isAuthenticated() ? (
                <>
                  <Nav.Link href="/login">
                    <Button variant="outline-dark" size="sm">Login</Button>
                  </Nav.Link>
                  <Nav.Link href="/signup">
                    <Button variant="dark" size="sm">Sign Up</Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Navbar.Text className="me-3">{currentUser?.username || currentUser?.name}</Navbar.Text>
                  <Button variant="dark" size="sm" onClick={handleLogout}>Logout</Button>
                </>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNav;