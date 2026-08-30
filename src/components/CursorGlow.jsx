import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const DesktopCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    let animationFrameId = null;
    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ambient Cyber Glow Spotlight (Desktop GPU) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, rgba(139, 92, 246, 0.18) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      {/* Precision Core Neon Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 opacity-60 shadow-[0_0_10px_#00F0FF]"
        style={{
          x: mouseX,
          y: mouseY,
          willChange: 'transform',
        }}
      />
    </>
  );
};

export const CursorGlow = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsDesktop(true);
    }
  }, []);

  // Zero memory and zero listeners attached on mobile touchscreen devices
  if (!isDesktop) return null;

  return <DesktopCursor />;
};

export default CursorGlow;
