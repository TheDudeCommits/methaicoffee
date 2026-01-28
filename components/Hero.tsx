"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / (rect.width / 2)) * 8;
    const rotateX = -(mouseY / (rect.height / 2)) * 6;
    
    setTransform({ rotateX, rotateY, scale: 1.02 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-visible bg-[#FAFAFA]"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:pt-4 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h3 className="mt-2 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight uppercase">
              <span className="text-blue-600">ME THAI COFFEE</span>
            </h3>
            <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-coffee-800 leading-tight tracking-tight uppercase">
              TELLS A STORY
            </h3>

            <p className="mt-4 text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
              At "ME THAI COFFEE", we believe that coffee is more than just a beverage.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 text-xs font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                Explore
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-coffee-600 text-coffee-700 text-xs font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 hover:bg-coffee-700 hover:text-white"
              >
                Find Store
              </a>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="relative order-1 lg:order-2 flex items-center justify-center w-full cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            <div 
              className="relative w-full max-w-xl transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                transformStyle: "preserve-3d",
              }}
            >
              <div 
                className="hero-cup-glow" 
                aria-hidden="true" 
                style={{ transform: "translateZ(-40px)" }}
              />

              <Image
                src="/hero-cup.png"
                alt="ME THAI COFFEE iced coffee cup with rich caramel color and the ME THAI logo"
                width={1100}
                height={1400}
                className="relative z-10 w-auto h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] xl:h-[460px] object-contain drop-shadow-[0_16px_32px_rgba(90,59,46,0.32)] sm:drop-shadow-[0_20px_40px_rgba(90,59,46,0.35)] lg:drop-shadow-[0_24px_48px_rgba(90,59,46,0.38)] transition-all duration-300 ease-out"
                style={{ transform: "translateZ(0px)" }}
                quality={100}
                priority
                unoptimized
              />

              <Image
                src="/beans.png"
                alt="Coffee beans"
                width={180}
                height={120}
                className="absolute z-30 w-[22%] sm:w-[24%] md:w-[26%] lg:w-[28%] xl:w-[30%] h-auto object-contain animate-beans-drift"
                style={{
                  left: "50%",
                  top: "-5%",
                  marginLeft: "-12%",
                  animationDelay: "-3s",
                  animationDuration: "12s",
                  transform: "translateZ(80px)",
                  filter: "drop-shadow(0 12px 20px rgba(90,59,46,0.25))",
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mt-8 lg:mt-12">
          <h3
            id="hero-heading"
            className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
          >
            FULLBODY FRUITY
          </h3>

          <p className="mt-4 text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
            Discover the taste of a real <span className="text-blue-600">thai</span> coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
