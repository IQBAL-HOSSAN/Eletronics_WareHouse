import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        className="py-3 "
        // fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3>
              <i>MyElectronics</i>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              {user ? (
                <Nav>
                  <Nav.Link as={Link} to="/manageInventories">
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/MyItems">
                    My Items
                  </Nav.Link>
                </Nav>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.displayName || user?.email ? (
                <Nav>
                  <Nav.Link>{user?.displayName}</Nav.Link>
                  <Nav.Link
                    className="btn btn-danger logOut-btn"
                    onClick={logOut}
                  >
                    Log Out
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>

                  <Nav.Link as={Link} eventKey={2} to="/register">
                    Register
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
