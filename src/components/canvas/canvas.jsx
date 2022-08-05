import React, { useEffect, useRef } from "react";

const Canvas = ({ drawItem, width, height, id }) => {
  const canvasRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawItem(context);
    return () => cancelAnimationFrame(canvas);
  }, [drawItem]);

  return <canvas id={id} className="canvas" width={width} height={height} ref={canvasRef} />;
};

export default Canvas;
