import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar2.module.css";
import DropDownCntc from "../../components/dropdown/DropDown";

function Navbar2() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Hernan N. Varela</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
            

              <Nav.Link href="/" className={`nav-link  ${styles.link}`}>
                Home
              </Nav.Link>

              <Nav.Link href="/about-me" className={`nav-link  ${styles.link}`}>
                About me
              </Nav.Link>

              <Nav.Link href="/project" className={`nav-link  ${styles.link}`}>
                Projects
              </Nav.Link>

              <Nav.Link href="https://drive.google.com/file/d/1mK9QgzrbvRf-zlhPcaBpSzZJwHpJv_qS/view?usp=drive_link" target="_blank" className={`nav-link  ${styles.link}`}>
                Resume
              </Nav.Link>
              
            </Nav>
            <DropDownCntc />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
