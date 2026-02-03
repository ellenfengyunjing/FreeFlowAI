import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const trainingCases = [
  {
    id: 1,
    image: '/training-1.jpg',
    title: '海柔创新科技公司',
    subtitle: 'AI营销自动化实战课',
    description: 'AI营销自动化实战课：从爆款到洞察闭环，帮助企业掌握AI生成营销文案、图片的技巧，实现营销内容自动化生产。',
  },
  {
    id: 2,
    image: '/training-2.jpg',
    title: '谷歌跨境电商中心',
    subtitle: 'TapNow广告工作流',
    description: '如何用TapNow打造低成本可复用广告工作流，帮助跨境电商企业降低广告投放成本，提高广告效果。',
  },
  {
    id: 3,
    image: '/training-3.jpg',
    title: '深圳市南山智园',
    subtitle: 'AI职场办公提效系列课',
    description: 'AI职场办公提效系列课，帮助园区企业员工掌握AI办公工具，提升日常工作效率。',
  },
  {
    id: 4,
    image: '/training-4.jpg',
    title: '深圳市人工智能协会',
    subtitle: '扣子智能体社媒爆款',
    description: '如何用扣子智能体打造社媒爆款内容自动化体系，帮助企业实现社交媒体内容自动化运营。',
  },
  {
    id: 5,
    image: '/training-5.jpg',
    title: '深圳市南山智园青年夜校',
    subtitle: 'AI职场办公提效系列课',
    description: 'AI职场办公提效（一）：AI速读文档、会议纪要和公文写作；AI职场办公提效（二）：Word/Excel自动化处理，PPT/图表生成。',
  },
  {
    id: 6,
    image: '/training-6.jpg',
    title: '深圳市龙华总工会',
    subtitle: 'Deepseek职场达人',
    description: '2小时变身AI职场达人：Deepseek从入门到实战，帮助职工快速掌握Deepseek AI工具的使用方法。',
  },
  {
    id: 7,
    image: '/training-7.jpg',
    title: '香港大学MBA学院',
    subtitle: '飞书+扣子办公自动化',
    description: '飞书+扣子实现高效办公自动化，为MBA学员提供前沿的AI办公自动化解决方案。',
  },
  {
    id: 8,
    image: '/training-8.png',
    title: '深圳职业技术大学',
    subtitle: '小红书爆款仿写智能体',
    description: '用扣子打造小红书爆款仿写智能体，帮助学生掌握AI内容创作技巧，提升就业竞争力。',
  },
  {
    id: 9,
    image: '/training-9.jpg',
    title: '深圳赤湾胜宝旺工程有限公司',
    subtitle: '3天AI企业提效系列课',
    description: '3天AI企业提效系列课：1. 职场办公提效全流程实操；2. 飞书&影刀办公自动化；3. 扣子/N8N/Make工作流。',
  },
];

export function Training() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !container || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll('.training-card');
    const totalCards = cards.length;

    const ctx = gsap.context(() => {
      // Set initial positions - cards stacked in the right area
      cards.forEach((card, index) => {
        const isActive = index === 0;
        const offset = (index - 0) * 20;
        
        gsap.set(card, {
          y: offset,
          scale: isActive ? 1 : 0.9,
          opacity: isActive ? 1 : 0.4,
          zIndex: isActive ? 10 : 5 - index,
        });
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${totalCards * 80}%`,
        pin: container,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * totalCards),
            totalCards - 1
          );
          setActiveIndex(newIndex);

          cards.forEach((card, index) => {
            const isActive = index === newIndex;
            const distance = index - newIndex;
            
            // Cards slide up/down in the right area
            const yOffset = distance * 80;
            const scale = isActive ? 1 : 0.88;
            const opacity = isActive ? 1 : (Math.abs(distance) === 1 ? 0.5 : 0.2);
            const zIndex = isActive ? 10 : 5 - Math.abs(distance);

            gsap.to(card, {
              y: yOffset,
              scale: scale,
              opacity: opacity,
              zIndex: zIndex,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="training" ref={sectionRef} className="relative bg-black">
      <div ref={containerRef} className="min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#00f0ff]/5 rounded-full blur-[150px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info (Fixed) */}
            <div className="lg:pr-8">
              <ScrollReveal>
                <Badge className="bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30 mb-4">
                  AI企业培训
                </Badge>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                  35+场线下培训
                  <span className="block text-gradient mt-2">1500+学员信赖</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-[#a3a3a3] mb-8 leading-relaxed">
                  我们深耕AI企业培训领域，课程内容涵盖AI企业职场提效、AI营销内容自动化、
                  AI智能体实操、Deepseek+政务提效等最新AI应用案例。
                </p>
              </ScrollReveal>

              {/* Active Case Info */}
              <div className="bg-[#111] border border-[#222] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span className="text-xs text-[#00f0ff] uppercase tracking-wider">
                    {trainingCases[activeIndex]?.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {trainingCases[activeIndex]?.title}
                </h3>
                <p className="text-sm text-[#a3a3a3]">
                  {trainingCases[activeIndex]?.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mt-6">
                {trainingCases.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#00f0ff] to-[#a855f7]'
                        : 'w-2 bg-[#333]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Cards (Fixed area, cards slide within) */}
            <div className="relative h-[450px] flex items-center justify-center">
              <div ref={cardsContainerRef} className="relative w-full max-w-[360px] h-[400px]">
                {trainingCases.map((item) => (
                  <div
                    key={item.id}
                    className="training-card absolute w-full"
                    style={{ top: '50%', marginTop: '-100px' }}
                  >
                    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden shadow-2xl">
                      <div className="h-44 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-[#00f0ff]">{item.subtitle}</span>
                        <h4 className="text-white font-medium mt-1">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
