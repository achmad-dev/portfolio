import React from "react";
import Canvas from "./canvas";
import earth from "./assets/solar/Canvas_earth.png";
import moon from "./assets/solar/Canvas_moon.png";
import sun from "./assets/solar/Canvas_sun2.png";
import sunBg from "./assets/solar/Canvas_sun.png";

const solarId = "solar";

const SolarSystem = () => {
  const moonImage = new Image();
  moonImage.src = moon;
  const earthImage = new Image();
  earthImage.src = earth;
  const sunImage = new Image();
  sunImage.src = sun;
  const contex = (ctx) => {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(150, 150);
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    // ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earthImage, -12, -12);
    ctx.save();
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moonImage, -3.5, -3.5);
    ctx.restore();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sunImage, 0, 0, 300, 300);
    requestAnimationFrame(() => contex(ctx));
  };
  return (
    <div
      style={{
        background: `url(${sunBg})`,
        borderRadius: "700px",
        height: "300px",
        width: "300px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Canvas id={solarId} drawItem={contex} width={400} height={400} />
    </div>
  );
};

export default SolarSystem;
