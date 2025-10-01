import React from 'react'
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
      {/* Tircchhi Nazar wala part */}
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
const Start = () => {
  return (
    <div className='bg-emerald-400 h-[100vh] upper case py-32 font-foundersGrotesk'>
      <div className='text-[32vh] flex justify-center items-center uppercase font-bold text-center leading-53 tracking-[-5px]'>Ready <br />
        to start <br />
        the project?</div>
        
        


    </div>
  )
}



export default Start
