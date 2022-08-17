import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactLogo from '../../assets/img/logo512.png';
import colorSharp from "../../assets/img/color-sharp.png";
import jsLogo from "../../assets/img/javascript.png";
import pythonLogo from "../../assets/img/python-logo.png";
import nodeJs from "../../assets/img/node-js.png";
import html5 from '../../assets/img/HTML5.png';
import css3 from '../../assets/img/CSS3.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>some skill that i have</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={jsLogo} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={html5} alt="" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="" />
                  <h5>Python{"(basic)"}</h5>
                </div>
                <div className="item">
                  <img src={nodeJs} alt="" />
                  <h5>Node js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};
