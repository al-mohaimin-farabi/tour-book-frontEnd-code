import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useAuth();

  return (
    <div>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          {/* <Container> */}
          <Navbar.Brand as={HashLink} to="/home">
            <img
              src="https://i.ibb.co/cyknyCw/logo.jpg"
              className="img-width ms-md-5  ms-md-5"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="me-5">
            <Nav className="ms-auto">
              <Nav.Link className="fw-normal fs-5" as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="fw-normal fs-5" as={HashLink} to="/services">
                All Services
              </Nav.Link>
              <Nav.Link
                className="fw-normal fs-5"
                as={HashLink}
                to="/contactus"
              >
                Contact Us
              </Nav.Link>
              {user?.displayName && (
                <Nav.Link
                  className="fw-normal fs-5"
                  as={HashLink}
                  to="/myorders"
                >
                  My Orders
                </Nav.Link>
              )}
              {user?.displayName && (
                <Dropdown>
                  <Dropdown.Toggle
                    className="fw-normal bg-dark fs-6 text-white mt-1 border-dark me-md-2 me-lg-2"
                    variant="secondary"
                    id="dropdown-basic"
                  >
                    Admin
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Nav.Link
                        className="fw-normal fs-6"
                        as={HashLink}
                        to="/manageallorders"
                      >
                        Manage All Orders
                      </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Nav.Link
                        className="fw-normal fs-6"
                        as={HashLink}
                        to="/addservice"
                      >
                        Add Service
                      </Nav.Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
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
                  className="btn-dark btn-sm text-white text-center px-4 fs-5"
                  as={HashLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              ) : (
                <button
                  className=" btn btn-dark btn-sm  text-white text-center px-4 fs-6"
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
