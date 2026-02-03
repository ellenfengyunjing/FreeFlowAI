import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.03,
  duration = 0.8
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');
    
    gsap.set(chars, { opacity: 0, y: 20 });
    
    const ctx = gsap.context(() => {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, [delay, stagger, duration]);

  const characters = text.split('').map((char, index) => (
    <span 
      key={index} 
      className="char inline-block"
      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
    >
      {char}
    </span>
  ));

  return (
    <span ref={containerRef} className={className}>
      {characters}
    </span>
  );
}
