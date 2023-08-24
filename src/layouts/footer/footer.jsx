import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-dark`}>
            <Container fluid>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} className="text-center">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={`${styles.socialIcon} ${styles.customSocialIcon}`} />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className={`${styles.socialIcon} ${styles.customSocialIcon}`} />
                        </a>
                        <a href="mailto:correo@example.com">
                            <FaEnvelope className={`${styles.socialIcon} ${styles.customSocialIcon}`} />
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} className="text-center">
                        <p className={styles.footerText}>&copy; {new Date().getFullYear()} Hernan N. Varela. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
