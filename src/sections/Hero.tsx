import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Title animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.set(chars, { opacity: 0, y: 30 });
        tl.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'power3.out',
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      }

      // Description animation
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      }

      // CTA animation
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.2'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleText = 'Where AI Sets You Free';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center center',
            filter: 'brightness(0.9)'
          }}
        >
          <source src="/hero-bg-clean.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display"
        >
          {titleText.split('').map((char, index) => (
            <span 
              key={index} 
              className={`char inline-block ${char === ' ' ? 'w-3 md:w-4' : ''} ${
                index < 8 ? 'text-gradient' : 'text-white'
              }`}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-[#00f0ff] font-medium mb-4"
        >
          FreeFlow AI
        </p>

        {/* Description */}
        <p 
          ref={descRef}
          className="text-base md:text-lg text-[#e5e5e5] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          为您提供企业AI自动化解决方案，从AI工作流定制、企业AI培训到企业AI转型顾问，
          帮您从0到1实现AI自我赋能，拥抱自由，探索未来。
        </p>

        {/* CTA Button */}
        <div ref={ctaRef}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black font-semibold px-10 hover:opacity-90 transition-opacity"
            onClick={scrollToAbout}
          >
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
}
