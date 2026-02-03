import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ArcScrollContainerProps {
  children: ReactNode;
  className?: string;
}

export function ArcScrollContainer({ children, className = '' }: ArcScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    const cardElements = cards.querySelectorAll('.arc-card');
    const totalCards = cardElements.length;

    const ctx = gsap.context(() => {
      // Create scroll-driven animation for each card
      cardElements.forEach((card, index) => {
        const progress = index / (totalCards - 1);
        
        // Arc path calculation
        const arcX = Math.sin(progress * Math.PI - Math.PI / 2) * 200;
        const arcY = Math.cos(progress * Math.PI - Math.PI / 2) * 100 - 100;
        const rotation = (progress - 0.5) * 30;
        const scale = 0.8 + Math.sin(progress * Math.PI) * 0.2;
        const opacity = 0.4 + Math.sin(progress * Math.PI) * 0.6;

        gsap.set(card, {
          x: arcX,
          y: arcY,
          rotation: rotation,
          scale: scale,
          opacity: opacity,
        });

        // Scroll animation
        gsap.to(card, {
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: `+=${totalCards * 100}%`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
          keyframes: cardElements.length > 1 ? [
            { 
              x: Math.sin((index - 1) / (totalCards - 1) * Math.PI - Math.PI / 2) * 200,
              y: Math.cos((index - 1) / (totalCards - 1) * Math.PI - Math.PI / 2) * 100 - 100,
              rotation: ((index - 1) / (totalCards - 1) - 0.5) * 30,
              scale: 0.8 + Math.sin((index - 1) / (totalCards - 1) * Math.PI) * 0.2,
              opacity: 0.4 + Math.sin((index - 1) / (totalCards - 1) * Math.PI) * 0.6,
            },
            { 
              x: arcX,
              y: arcY,
              rotation: rotation,
              scale: scale,
              opacity: opacity,
            },
            { 
              x: Math.sin((index + 1) / (totalCards - 1) * Math.PI - Math.PI / 2) * 200,
              y: Math.cos((index + 1) / (totalCards - 1) * Math.PI - Math.PI / 2) * 100 - 100,
              rotation: ((index + 1) / (totalCards - 1) - 0.5) * 30,
              scale: 0.8 + Math.sin((index + 1) / (totalCards - 1) * Math.PI) * 0.2,
              opacity: 0.4 + Math.sin((index + 1) / (totalCards - 1) * Math.PI) * 0.6,
            },
          ] : undefined,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <div ref={cardsRef} className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
}
