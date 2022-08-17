import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SolarSystem from "../canvas/world-spin";
export const Banner = () => {
  const [loopText, setLoopText] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [show, setShow] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const text = ["Frontend Developer", "Waifu Lover", "Anime Enthusiast"];
  const time = 3000;
  useEffect(() => {
    let interval = setInterval(() => {
      change();
    }, delta);
    return () => clearInterval(interval);
  }, [show]);
  const change = () => {
    let i = loopText % text.length;
    let fullText = text[i];
    let updatedText = isChange
      ? fullText.substring(0, show.length - 1)
      : fullText.substring(0, show.length + 1);
    setShow(updatedText);
    if (isChange) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isChange && updatedText === fullText) {
      setIsChange(true);
      setDelta(time);
    } else if (isChange && updatedText === "") {
      setIsChange(false);
      setLoopText(loopText + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome</span>
            <h1>
              {`Hi I'm Human `}
              <span className="wrap">{show}</span>
            </h1>
            <p>
              I'm a Frontend Developer with a passion for creating beautiful and
              intuitive user experiences website.
            </p>
            <button
              onClick={() => {
                console.log("clicked");
              }}
            >
              Hire Me
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <SolarSystem />
          </Col>
        </Row>
      </Container>
    </section>
  );
};