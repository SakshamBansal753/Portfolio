import React, { useRef, useEffect } from "react";

export default function PixelSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    // Sphere settings
    const sphereRadius = 180;
    const totalDots = 1600;
    const depth = 500;

    const dots = [];

    // Generate sphere points
    for (let i = 0; i < totalDots; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      dots.push({ x, y, z });
    }

    let rotation = 0;
    let animationFrame;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      rotation += 0.01;

      dots.forEach((dot) => {
        // Rotate sphere around Y-axis
        const rotatedX =
          dot.x * Math.cos(rotation) -
          dot.z * Math.sin(rotation);

        const rotatedZ =
          dot.x * Math.sin(rotation) +
          dot.z * Math.cos(rotation);

        // Perspective projection
        const scale = depth / (depth + rotatedZ);

        const screenX = rotatedX * scale + centerX;
        const screenY = dot.y * scale + centerY;

        // Dot size based on depth
        const size = Math.max(1, 2 * scale);

        ctx.fillStyle = "white";
        ctx.fillRect(screenX, screenY, size, size);
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        background: "black",
      }}
    />
  );
}