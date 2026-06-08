import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring parameters for the trailing circle
  const springConfig = { stiffness: 400, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (isHidden) {
        setIsHidden(false);
      }

      // Check if mouse is hovering over interactive elements
      const target = e.target;
      if (target) {
        const isInteractive = target.closest('a, button, input, textarea, [role="button"], .glass-card-hover, .group');
        setIsClickable(!!isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isHidden]);

  // Track click state for click feedback pulse
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-400 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isClickable ? 1.6 : 1,
          backgroundColor: isClickable ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0)',
          borderColor: isClickable ? '#06b6d4' : '#8b5cf6',
          boxShadow: isClickable 
            ? '0 0 15px rgba(6, 182, 212, 0.4)' 
            : '0 0 8px rgba(139, 92, 246, 0.2)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2.5 h-2.5 bg-accent-400 rounded-full pointer-events-none z-50 shadow-neon-cyan"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.4 : isClickable ? 0.5 : 1,
          backgroundColor: isClickable ? '#06b6d4' : '#a78bfa',
        }}
      />
    </>
  );
}
