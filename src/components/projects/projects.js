import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import gigihProjet from "../../assets/img/create-spotify-list.png";
import goplayProject from "../../assets/img/MineMaster.png";

export const Projects = () => {
  const projects = [
    {
      title: "Internship Project at Gojek's Goplay",
      name: "MineMaster",
      img: goplayProject,
    },
    {
      title: "Final Project at Generasi Gigih",
      name: "Spotify Playlist",
      img: gigihProjet,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>some project i build</p>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};
