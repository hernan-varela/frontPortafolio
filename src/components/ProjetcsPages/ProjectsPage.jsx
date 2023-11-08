import React from "react";
import Container from "react-bootstrap/Container";
import CardProjets from "../card/CardProjects";
import styles from "./ProjectsPage.module.css";
import tayrona from "../../assets/hotelTayrona.png";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    titulo: "Hotel Tayrona",
    descripcion:
      "Plataforma de reservas de habitaciones de hotel con registro de usuarios vía correo o Google. Incluye funciones de administrador para crear y personalizar habitaciones. ",
    enlace: "https://tayrona-app.netlify.app/home",
    imagen: tayrona,
  },
  {
    titulo: "CashFlow",
    descripcion: "Descripción del proyecto 2",
    enlace: "enlace-al-proyecto-2",
  },
];

const ProjectsPage = () => {
  return (
    <Container className={styles.container}>
      <Row xs={12}>
        <h4 style={{ textAlign: "center" }}>
          Te presento algunos de los proyectos en los que he estado involucrado
          recientemente
        </h4>
        <span style={{ borderBottom: "1px solid black", marginBottom: "1rem" }}>
          Aqui encontrarás una recopilación de mis proyectos personales y las
          valiosas experiencias de pasantías que he tenido el privilegio de
          llevar a cabo. Estos proyectos son un testimonio de mi dedicación y
          pasión por crecer como profesional y por explorar nuevas
          oportunidades.
        </span>
      </Row>

      <Row>
        {data.map((elem, index) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            key={index}
            className={"d-flex justify-content-center align-items-center"}
          >
            <CardProjets
              imagen={elem.imagen}
              titulo={elem.titulo}
              texto={elem.descripcion}
              key={index}
              url={elem.enlace}
            />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
