import { Col, Container } from "react-bootstrap";
import PinBall from "./ball";
import Button from "./button";

export const PinBallGame = () => {
  return (
    <section className="mini-game">
      <Container>
        <Col>
          <Button text={'start game'} />
          <PinBall />
        </Col>
      </Container>
    </section>
  );
};
