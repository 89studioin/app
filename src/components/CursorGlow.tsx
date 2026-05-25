import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdCounter = useRef(0);

  // Smooth springs for the outer pointer ring (organic lag feel)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Raw mouse coordinates for the inner dot/glow (instant response)
  const [rawX, setRawX] = useState(-100);
  const [rawY, setRawY] = useState(-100);

  useEffect(() => {
    // Check if device supports hover (typically laptops/desktops with mice)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setRawX(e.clientX);
      setRawY(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      
      // Spawn golden particle sparks
      const newSparks: Spark[] = Array.from({ length: 10 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        sparkIdCounter.current += 1;
        return {
          id: sparkIdCounter.current,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1, // slight upward bias
          size: Math.random() * 3 + 2,
          alpha: 1,
        };
      });

      setSparks(prev => [...prev, ...newSparks]);
      setTimeout(() => setIsClicked(false), 150);
    };

    const handleGlobalMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer') ||
        target.closest('input') ||
        target.closest('textarea');

      if (isClickable) {
        setIsHovered(true);
      }
    };

    const handleGlobalMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer') ||
        target.closest('input') ||
        target.closest('textarea');

      if (isClickable) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleGlobalMouseOver);
    document.addEventListener('mouseout', handleGlobalMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleGlobalMouseOver);
      document.removeEventListener('mouseout', handleGlobalMouseOut);
    };
  }, [cursorX, cursorY]);

  // Update loop for particles
  useEffect(() => {
    if (sparks.length === 0) return;

    const interval = setInterval(() => {
      setSparks(prevSparks => 
        prevSparks
          .map(spark => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            vy: spark.vy + 0.1, // gravity pull
            alpha: spark.alpha - 0.04,
          }))
          .filter(spark => spark.alpha > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [sparks]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Golden Glow (stays directly behind pointer) */}
      <div
        className="fixed w-[280px] h-[280px] bg-gradient-to-r from-gold-500/10 to-amber-500/10 rounded-full blur-[80px] pointer-events-none z-50 mix-blend-screen transition-transform duration-300"
        style={{
          left: rawX - 140,
          top: rawY - 140,
          transform: isHovered ? 'scale(1.4)' : 'scale(1)',
        }}
      />

      {/* 2. Instant Small Inner Dot */}
      <div
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-55 mix-blend-difference"
        style={{
          left: rawX - 3,
          top: rawY - 3,
        }}
      />

      {/* 3. Smooth Spring Lagging Outer Ring */}
      <motion.div
        className={`fixed rounded-full pointer-events-none z-55 border transition-all duration-300 ${
          isHovered 
            ? 'bg-[#E2B841]/10 border-[#E2B841] shadow-[0_0_20px_rgba(226,184,65,0.4)]' 
            : 'border-white/35 bg-transparent'
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovered ? 48 : (isClicked ? 16 : 28),
          height: isHovered ? 48 : (isClicked ? 16 : 28),
          marginLeft: isHovered ? -24 : (isClicked ? -8 : -14),
          marginTop: isHovered ? -24 : (isClicked ? -8 : -14),
        }}
      />

      {/* 4. Click Sparks Canvas Trail */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed bg-gradient-to-br from-[#E2B841] to-gold-400 rounded-full pointer-events-none z-55 shadow-[0_0_8px_rgba(226,184,65,0.6)]"
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            opacity: spark.alpha,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
}
