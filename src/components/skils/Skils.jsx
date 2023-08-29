import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Skil.module.css";
import logoReact from "../../assets/logos/logo-react.png";
import logoNode from "../../assets/logos/logo-node.png";
import logoBootstrap from "../../assets/logos/bootstrap-logo.png";
import mongoDbLogo from "../../assets/logos/mongoDbLogo.png";
import htmlCssJsLogo from "../../assets/logos/htmlCssJs-logo.png";
import expressLogo from "../../assets/logos/expressJs-logo.webp";
import gitHubLogo from  "../../assets/logos/gitHubLogo.png";
import SlackLogo from "../../assets/logos/slack-logo.png";
import MongooseLogo from "../../assets/logos/MongooseLogo.png"

const Skils = () => {
  return (
    <Container fluid className={`${styles.container}`}>

      <Row className={`col-12 justify-content-center`}>
        <Col className={`text-center`}>
          <h1 className={`${styles.title} text-white`}>My skills</h1>
        </Col>
      </Row>

      <Row xs={3} lg={5} className={`align-items-center ${styles.customRow}`}>
        <Col>
          <img src={logoReact} alt="React" className={styles.techImage} />
        </Col>

        <Col>
          <img src={logoNode} alt="node js" className={styles.techImage} />
        </Col>

        <Col>
          <img
            src={logoBootstrap}
            alt="bootstrap"
            className={styles.techImage}
          />
        </Col>

        <Col>
          <img src={mongoDbLogo} alt="mongoDb" className={styles.techImage} />
        </Col>

        <Col>
          <img
            src={htmlCssJsLogo}
            alt="html, css, js"
            className={styles.techImage}
          />
        </Col>

        <Col>
          <img
            src={expressLogo}
            alt="expressjs"
            className={styles.techImage}
          />
        </Col>

        <Col>
          <img
            src={gitHubLogo}
            alt="gitHub"
            className={styles.techImage}
          />
        </Col>

        <Col>
          <img
            src={SlackLogo}
            alt="slack"
            className={styles.techImage}
          />
        </Col>

        <Col>
          <img
            src={MongooseLogo}
            alt="mongoose"
            className={styles.techImage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
