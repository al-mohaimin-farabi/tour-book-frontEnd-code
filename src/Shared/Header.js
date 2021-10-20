import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useAuth();

  return (
    <div>
      <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img src="https://i.ibb.co/m4gwpFg/logo.jpg" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-normal fs-5" as={HashLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="fw-normal fs-5" as={HashLink} to="/services">
                All Services
              </Nav.Link>
              <Nav.Link
                className="fw-normal fs-5"
                as={HashLink}
                to="/bloodtest"
              >
                Blood Tests
              </Nav.Link>
              {user?.displayName && (
                <div className="d-flex align-items-center fs-5 text-dark">
                  <span className="me-1">
                    {user?.displayName == null ? user.email : user.displayName}
                  </span>

                  {user.photoURL && (
                    <img
                      className="rounded-circle img-width"
                      src={user.photoURL}
                      alt=""
                    />
                  )}
                </div>
              )}

              {!user.email ? (
                <Nav.Link
                  className="btn-secondary btn-sm text-white text-center px-4 fs-5"
                  as={HashLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              ) : (
                <button
                  className=" btn btn-secondary  text-white text-center px-4 fs-6"
                  onClick={handleSignOut}
                >
                  LogOut
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
