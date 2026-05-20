import React, { useRef, useEffect } from "react";

export default function PixelSphere({
  width = 420,
  height = 420,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const sphereRadius =
      Math.min(width, height) * 0.28;

    const totalDots = 1800;
    const depth = 500;

    const dots = [];

    // Generate sphere dots
    for (let i = 0; i < totalDots; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x =
        sphereRadius *
        Math.sin(phi) *
        Math.cos(theta);

      const y =
        sphereRadius *
        Math.sin(phi) *
        Math.sin(theta);

      const z =
        sphereRadius *
        Math.cos(phi);

      dots.push({ x, y, z });
    }

    let rotation = 0;
    let animationFrame;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      rotation += 0.01;

      dots.forEach((dot) => {
        // Rotate around Y-axis
        const rotatedX =
          dot.x * Math.cos(rotation) -
          dot.z * Math.sin(rotation);

        const rotatedZ =
          dot.x * Math.sin(rotation) +
          dot.z * Math.cos(rotation);

        // Perspective projection
        const scale =
          depth / (depth + rotatedZ);

        const screenX =
          rotatedX * scale + centerX;

        const screenY =
          dot.y * scale + centerY;

        // Dot size
        const size = Math.max(1, 2 * scale);

        // Glow effect
        ctx.fillStyle = `rgba(255,255,255,${
          0.4 + scale * 0.6
        })`;

        ctx.fillRect(
          screenX,
          screenY,
          size,
          size
        );
      });

      animationFrame =
        requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "block",
        background: "transparent",
      }}
    />
  );
}