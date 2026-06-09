import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BackgroundParticles() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isHovering) {
        isHovering = true;
        gsap.to(glow, { opacity: 0.15, duration: 0.5 });
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      gsap.to(glow, { opacity: 0, duration: 0.8 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp animation for the mouse spotlight
    let animationId;
    const updateGlow = () => {
      // Lerp formula: current = current + (target - current) * ease
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glow) {
        glow.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }
      animationId = requestAnimationFrame(updateGlow);
    };
    updateGlow();

    // GSAP floating animations for the ambient blobs
    const blobs = containerRef.current.querySelectorAll('.bg-blob');
    blobs.forEach((blob) => {
      gsap.to(blob, {
        x: 'random(-150, 150)',
        y: 'random(-150, 150)',
        duration: 'random(12, 24)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 bg-[#030712] overflow-hidden pointer-events-none">
      {/* Background Grid Pattern Overlay with radial mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }}
      ></div>

      {/* SVG Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Ambient neon glow blobs */}
      <div className="bg-blob absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[130px] pointer-events-none"></div>
      <div className="bg-blob absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[130px] pointer-events-none"></div>
      <div className="bg-blob absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-secondary-500/5 blur-[120px] pointer-events-none"></div>

      {/* Interactive mouse follow glow spotlight */}
      <div 
        ref={glowRef} 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/10 blur-[100px] opacity-0 pointer-events-none mix-blend-screen"
        style={{ willChange: 'transform' }}
      ></div>

      {/* Radial soft dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/30 to-[#030712] pointer-events-none"></div>
    </div>
  );
}
