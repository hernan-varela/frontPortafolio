import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar2.module.css";
import DropDownCntc from "../../components/dropdown/DropDown";

function Navbar2() {
  const location = useLocation();

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Hernan N. Varela</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <NavLink exact to="/" className={`nav-link ${styles.link}`} activeClassName={styles.activeLink}>
                Inicio
              </NavLink>

              <NavLink to="/about-me" className={`nav-link ${styles.link}`} activeClassName={styles.activeLink}>
                Sobre mi
              </NavLink>

              <NavLink to="/project" className={`nav-link ${styles.link}`} activeClassName={styles.activeLink}>
                Proyectos
              </NavLink>

              <a href="https://drive.google.com/file/d/1mK9QgzrbvRf-zlhPcaBpSzZJwHpJv_qS/view?usp=drive_link" target="_blank" className={`nav-link ${styles.link}`}>
                C.V
              </a>
            </Nav>
            <DropDownCntc />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
