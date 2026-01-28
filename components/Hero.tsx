"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ 
    rotateX: 0, 
    rotateY: 0, 
    scale: 1,
    shadowX: 0,
    shadowY: 20,
    glowX: 50,
    glowY: 50,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / (rect.width / 2)) * 18;
    const rotateX = -(mouseY / (rect.height / 2)) * 14;
    
    const shadowX = -(mouseX / (rect.width / 2)) * 30;
    const shadowY = 20 + (mouseY / (rect.height / 2)) * 15;
    
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTransform({ rotateX, rotateY, scale: 1.08, shadowX, shadowY, glowX, glowY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1, shadowX: 0, shadowY: 20, glowX: 50, glowY: 50 });
  }, []);

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-visible"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-5xl w-full px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="flex flex-col items-center text-center">
          <h1
            id="hero-heading"
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C39BB] tracking-tight"
          >
            Me Thai Coffee
          </h1>

          <div 
            ref={containerRef}
            className="relative flex items-center justify-center w-full my-6 md:my-8 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "800px" }}
          >
            <div 
              className="relative transition-all duration-150 ease-out"
              style={{
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                transformStyle: "preserve-3d",
              }}
            >
              <div 
                className="hero-cup-glow transition-all duration-150" 
                aria-hidden="true" 
                style={{ 
                  transform: "translateZ(-60px)",
                  opacity: transform.scale > 1 ? 0.9 : 0.6,
                }}
              />

              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-full transition-opacity duration-150"
                style={{
                  background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, rgba(255,255,255,0.25) 0%, transparent 50%)`,
                  opacity: transform.scale > 1 ? 1 : 0,
                  transform: "translateZ(20px)",
                }}
              />

              <Image
                src="/hero-cup.png"
                alt="ME THAI COFFEE iced coffee cup with rich caramel color and the ME THAI logo"
                width={1100}
                height={1400}
                className="relative z-10 w-auto h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] object-contain transition-all duration-150 ease-out"
                style={{ 
                  transform: "translateZ(40px)",
                  filter: `drop-shadow(${transform.shadowX}px ${transform.shadowY}px 50px rgba(90,59,46,0.5))`,
                }}
                quality={100}
                priority
                unoptimized
              />

              <Image
                src="/beans.png"
                alt="Coffee beans"
                width={180}
                height={120}
                className="absolute z-30 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] h-auto object-contain animate-beans-drift transition-transform duration-150"
                style={{
                  left: "50%",
                  top: "-8%",
                  marginLeft: "-45px",
                  animationDelay: "-3s",
                  animationDuration: "12s",
                  transform: `translateZ(100px) rotateX(${-transform.rotateX * 0.3}deg) rotateY(${-transform.rotateY * 0.3}deg)`,
                  filter: "drop-shadow(0 15px 25px rgba(90,59,46,0.35))",
                }}
              />
            </div>
          </div>

          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-medium text-coffee-700 tracking-wide">
            Every Cup Tells a Story
          </p>

          <div className="mt-8 flex flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center w-40 py-3 border border-[#1C39BB] text-[#1C39BB] text-xs font-medium tracking-[0.18em] rounded-full transition-all duration-300 hover:bg-[#1C39BB] hover:text-white"
            >
              Menu
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center w-40 py-3 border border-coffee-600 text-coffee-700 text-xs font-medium tracking-[0.18em] rounded-full transition-all duration-300 hover:bg-coffee-700 hover:text-white"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
