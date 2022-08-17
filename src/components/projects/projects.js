import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import gigihProjet from "../../assets/img/create-spotify-list.png";
import goplayProject from "../../assets/img/MineMaster.png";
import bg2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Internship Project at Gojek's Goplay",
      name: "MineMaster",
      img: goplayProject,
      link: "https://goplay.co.id/live/minemaster",
    },
    {
      title: "Final Project at Generasi Gigih",
      name: "Spotify Playlist",
      img: gigihProjet,
      link: "https://github.com/waifuLoverUmu"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Some Project I build</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>wait for it</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>wait for it</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={bg2} alt="" />
    </section>
  );
};
