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
            <img src={""} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
                href="#project"
                className={activeLink === "project" ? "project" : "navbar-link"}
                onClick={() => updateActiveLink("project")}
              >
                project
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-media">
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
