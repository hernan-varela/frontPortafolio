import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar2.module.css"

function Navbar2() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            Hernan N. Varela
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={`nav-link  ${styles.link}`}>
                Home
              </Nav.Link>
              <Nav.Link href="/contact" className={`nav-link  ${styles.link}`}>
                Contact
              </Nav.Link>
              <Nav.Link href="/about-me" className={`nav-link  ${styles.link}`}>
                About me
              </Nav.Link>
              <Nav.Link href="/Resume" className={`nav-link  ${styles.link}`}>
                Resume
              </Nav.Link>
              <Nav.Link href="/writing" className={`nav-link  ${styles.link}`}>
                Writing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
