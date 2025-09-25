import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Eye() {
  const eyeRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxMove = rect.width / 4;

      let scale = 1;
      if (distance > maxMove) scale = maxMove / distance;

      x.set(dx * scale);
      y.set(dy * scale);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200);
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
    <div className="p-14 bg-white rounded-full shadow-lg">
      <div
      ref={eyeRef}
      className="relative w-44 h-44 rounded-full bg-black flex items-center justify-center overflow-hidden border-4"
    >
      {/* Pupil */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="w-7 h-7 rounded-full bg-white"
      />

      {/* Eyelids */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-white transition-transform duration-200 ${
          blinking ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-white transition-transform duration-200 ${
          blinking ? "translate-y-0" : "translate-y-full"
        }`}
      />
    </div>
    </div>
    </>
  );
}

export default function Ankhein() {
  return (
    <>
    
      <div className="flex items-center justify-center h-screen bg-white space-x-8 bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-center">
        <Eye />
      <Eye />
      </div>
    
    </>
    
  );
}
