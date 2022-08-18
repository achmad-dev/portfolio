import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { toast } from "react-toastify";
import SolarSystem from "../canvas/world-spin";
import Clock from "../canvas/clock";
export const Banner = () => {
  const [loopText, setLoopText] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [show, setShow] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const text = useMemo(() => {
    return ["Frontend Developer", "Waifu Lover", "Anime Enthusiast"];
  }, []);
  const time = 3000;
  const change = useCallback(() => {
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
  }, [text, isChange, show, time, loopText]);
  useEffect(() => {
    let interval = setInterval(() => {
      change();
    }, delta);
    return () => clearInterval(interval);
  }, [show, change, delta]);

  //check user time if it is night or day
  const checkTime = () => {
    let date = new Date();
    let hour = date.getHours();
    //check if it is night, morning, day or evening
    if (hour < 12 && hour >= 5) {
      return "morning";
    }
    if (hour >= 12 && hour < 15) {
      return "day";
    }
    if (hour >= 15 && hour < 19) {
      return "evening";
    } else {
      return "night";
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "auto",
                }}
              >
                <span className="tagline">Welcome and good {checkTime()}</span>
              </div>
              <Clock />
            </div>
            <h1>
              {`Hi I'm Achmad Alfazari `}
              <span className="wrap">{show}</span>
            </h1>
            <p>
              I'm a Frontend Developer with a passion for learning and
              Inovation.
            </p>
            <button
              onClick={() => {
                toast.dismiss();
                toast("Thanks for visiting my portfolio");
              }}
            >
              Download CV And Hire Me{" "}
              <a href="https://www.linkedin.com/in/achmad-alfazari-81a491235/">
                <FaArrowAltCircleDown />
              </a>
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
