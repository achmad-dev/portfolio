import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  //get current year
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Portfolio
            </span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/achmad-alfazari-81a491235/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/waifuLoverUmu/">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/achmad-alfazari-81a491235/">
                <FaInstagram />
              </a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
