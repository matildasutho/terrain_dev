import React, { useEffect, useState } from "react";

import styles from "./gradient.module.css";

const GradientTrail = () => {
  const [trail, setTrail] = useState([]);
  const [frameCount, setFrameCount] = useState(0);

  const handleGradientMove = (e) => {
    const newTrailElement = {
      x: e.clientX,
      y: e.clientY,
    };
    setTrail((prevTrail) => [...prevTrail, newTrailElement]);
  };

  const clearTrail = () => {
    setTrail((prevTrail) => {
      return prevTrail.slice(1); // Remove the first element from the trail array
    });
  };

  const frame = () => {
    setFrameCount((prevCount) => prevCount + 1);
    clearTrail(); // Decrement the trail length on each frame
  };

  useEffect(() => {
    const frameInterval = setInterval(() => {
      frame();
    }, 500 / 10); // 60 frames per second, adjust as needed

    return () => clearInterval(frameInterval);
  }, []); // Empty dependency array to run the effect only once on page load

  return (
    <div className={styles["gradientCont"]} onMouseMove={handleGradientMove}>
      {trail.map((trailElement, index) => (
        <div
          key={index}
          className={styles["trail"]}
          style={{
            left: trailElement.x,
            top: trailElement.y,
            pointerEvents: "none", // Exclude pointer events for the trail elements
          }}
        ></div>
      ))}
    </div>
  );
};

export default GradientTrail;
