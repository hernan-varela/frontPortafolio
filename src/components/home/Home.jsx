import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import developerLottie from "../../assets/Lottie/developerLottie.json";
import styles from "./Home.module.css";

import Skils from "../skils/Skils.jsx";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Lottie animationData={developerLottie} />
          </Col>

          <Col xs={12} md={6} className={styles["typewriter-container"]}>
            <div className={styles.typewriter}>
              <h2>
                Hello! My name is Hernán Nicolás Varela. Here you can learn
                more about me and have the opportunity to see all the projects
                I've been a part of, as well as get in touch with me. Are you
                ready?
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      <Skils />
    </>
  );
};

export default Home;
