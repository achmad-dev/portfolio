import { Col, Container, Row } from "react-bootstrap";
import PinBall from "./ball";
import Button from "./button";

export const PinBallGame = () => {
  return (
    <section className="mini-game">
      <Container>
        <div className="mini-game-bx">
          <Row className="align-items-center">
            <Col>
              <Button text={"start game"} />
              <PinBall />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
