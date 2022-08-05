import React, { useContext } from "react";
import Canvas from "../canvas/canvas";
import { portfoliocontext } from "../../context/context";

const ballId = "ball";

const height = 480;
const width = 480;

const offsetLeft = 480;

const PinBall = () => {
  const { ballFinish, setBallFinish, ballStart, setBallStart } = useContext(portfoliocontext);
  const context = (ctx) => {
    let ballRadius = 10;
    let x = width / 2;
    let y = height - 30;
    let dx = 2;
    let dy = -2;
    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (width - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;
    let brickRowCount = 5;
    let brickColumnCount = 3;
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;
    let score = 0;

    let bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function keyDownHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    }

    function mouseMoveHandler(e) {
      let relativeX = e.clientX - offsetLeft;
      if (relativeX > 0 && relativeX < width) {
        paddleX = relativeX - paddleWidth / 2;
      }
    }
    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if (b.status === 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              score++;
              if (score === brickRowCount * brickColumnCount) {
                clearInterval(interval); // Needed for Chrome to end game
                setBallFinish(true);
                setBallStart(false);
              }
            }
          }
        }
      }
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    function drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            let brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
            let brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }
    function drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "pink";
      ctx.fillText("Score: " + score, 8, 20);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      collisionDetection();

      if (x + dx > width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          clearInterval(interval); // Needed for Chrome to end game
          setBallFinish(true);
          setBallStart(false);
        }
      }

      if (rightPressed && paddleX < width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }

      x += dx;
      y += dy;
    }

    let interval = setInterval(draw, 20);
  };
  return (
    <>
      {ballStart &&  ballFinish !== true && (
        <Canvas
          id={ballId}
          width={width}
          border={"1px solid red"}
          height={height}
          drawItem={context}
        />
      )}
    </>
  );
};

export default PinBall;
