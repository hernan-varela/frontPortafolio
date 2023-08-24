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
                ¡Hola! Mi nombre es Hernán Nicolás Varela. Aquí podrás conocer
                más acerca de mí y tendrás la posibilidad de ver todos los
                proyectos en los que he participado, así como ponerte en
                contacto conmigo. ¿Estás listo?
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
