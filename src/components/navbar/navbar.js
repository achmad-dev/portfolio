import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const updateActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Navbar expand="lg" className={isScrolled ? "scrolled" : "navbar "}>
        <Container>
          <Navbar.Brand href="#home">
           <span style={{
            color: "#fff",
            fontSize: "3rem",
            fontWeight: "normal",
            fontFamily: "Mayson"
           }}><span style={{
            color: "red",
            fontSize: "5rem",
            fontWeight: "bold",
           }}>H</span>ello</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "home" : "navbar-link"}
                onClick={() => updateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === "skills" ? "skills" : "navbar-link"}
                onClick={() => updateActiveLink("skills")}
              >
                skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "projects" : "navbar-link"}
                onClick={() => updateActiveLink("projects")}
              >
                project
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={""} alt="" />
                </a>
                <a href="#">
                  <img src={""} alt="" />
                </a>
                <a href="#">
                  <img src={""} alt="" />
                </a>
              </div>
              <button className="connect-button">Connect</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
