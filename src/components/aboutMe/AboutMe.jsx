import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import devAboutMeLottie from "../../assets/Lottie/dev-about-lottie.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logoUnaj from "../../assets/logos/foto_unaj.jpg";
import logoHenry from "../../assets/logos/logo-Henry.png";
import styles from "./AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} lg={4} className="text-center">
          <Lottie animationData={devAboutMeLottie} />
        </Col>

        <Col xs={12} lg={8}>
          <h3 className={styles.text}>
            ¡Bienvenido/a! Me alegra tenerte aquí, explorando un vistazo de mis
            pasiones y mi dedicación y estudios. Si has llegado hasta este
            rincón de la web, es porque tienes un interés genuino en conocer la
            historia que hay detrás de quién soy y la trayectoria que he
            recorrido.
          </h3>
        </Col>
      </Row>

      <Row className={styles.contentRow}>
        <Col
          xs={12}
          lg={6}
          className={styles.contenText}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <span className={styles.text2}>
            Actualmente, estoy cursando la carrera de Ingeniería en Informática
            en la Universidad Nacional Arturo Jauretche. Aquí, no solo estoy
            desarrollando mis habilidades como ingeniero, sino que también estoy
            fortaleciendo mis capacidades como desarrollador y aprendiendo a
            trabajar eficazmente en equipo. Además, estoy adquiriendo
            habilidades blandas que me serán útiles para integrarme rápidamente
            al campo laboral. En mi formación, también estoy adquiriendo los
            conocimientos fundamentales en el ámbito de la ciencia de la
            computación. Aunque estoy en proceso de formación, me considero un
            programador motivado y entregado que siempre busca oportunidades
            para aprender y perfeccionar mis habilidades.
          </span>
        </Col>

        <Col
          xs={12}
          lg={6}
          className="text-center"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Card className={styles.card}>
            <Card.Img variant="top" src={logoUnaj} />
            <Card.Body>
              <Card.Title>UNAJ</Card.Title>
              <Card.Text>
                La Universidad Nacional Arturo Jauretche (UNAJ) es una
                institución pública de educación superior ubicada en Bs As,
                Argentina.ofrece una variedad de programas académicos en
                diferentes disciplinas, incluyendo ingeniería, ciencias sociales
                y medicina . Es una universidad relativamente joven pero que ha
                crecido en importancia en la escena académica argentina.
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.unaj.edu.ar/"
                target="_blank"
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className={styles.contentRow}>
        <Col xs={12} lg={6} className={styles.contenText} data-aos="zoom-out-down"  data-aos-duration="2000">
          <Card className={styles.card}>
            <Card.Img variant="top" src={logoHenry} />
            <Card.Body>
              <Card.Title>Soy Henry</Card.Title>
              <Card.Text>
                Es una academia especializada en programación y desarrollo web,
                que brinda cursos intensivos diseñados para aprender a programar
                y convertirse en un desarrollador web. Su enfoque se centra en
                impartir habilidades prácticas y pertinentes para la industria
                tecnológica contemporánea.
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.soyhenry.com/"
                target="_blank"
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6} className={styles.contenText} data-aos="zoom-out-up"  data-aos-duration="2000">
          <span className={styles.text2}>
            Completé exitosamente mis estudios y obtuve mi título de Desarrollo
            Web Full Stack Jr. en la prestigiosa Henry Academy, donde adquirí
            conocimientos en tecnologías esenciales como React, Express.js,
            MongoDB y Node.js, y también utilicé Redux y Git Flow. Durante mi
            tiempo en la academia, tuve la oportunidad de aplicar estos
            conocimientos en proyectos individuales y colaborativos, lo que me
            permitió desarrollar aplicaciones web funcionales y perfeccionar mis
            habilidades en trabajo en equipo. Estas adiciones a mi conjunto de
            habilidades me prepararon de manera integral para enfrentar los
            desafíos en constante evolución de la industria tecnológica actual.
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
