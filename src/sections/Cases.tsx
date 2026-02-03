import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TrendingUp, Users, Clock, Zap, Cpu, Globe, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const clientCases = [
  {
    id: 1,
    image: '/case-1.jpg',
    title: '电商运营自动化',
    client: '准上市亚马逊电商公司',
    description: '开发整套RPA电商自动化运营程序，自动生成listing、批量获取竞品数据，节省2个运营一年20万人工成本。',
    metrics: [
      { icon: 'trending' as const, value: '10x', label: '效率提升' },
      { icon: 'users' as const, value: '2人', label: '节省人力' },
      { icon: 'clock' as const, value: '20万', label: '年省成本' },
    ],
  },
  {
    id: 2,
    image: '/case-2.png',
    title: '小红书社媒运营自动化',
    client: '新西兰房车租赁公司',
    description: '开发小红书自动化系统，实现自动仿写爆款笔记、自动发布，运营效率提高20倍。',
    metrics: [
      { icon: 'trending' as const, value: '20x', label: '效率提升' },
      { icon: 'clock' as const, value: '5000+', label: '节省美元' },
      { icon: 'users' as const, value: '1人', label: '运营团队' },
    ],
  },
  {
    id: 3,
    image: '/case-3.png',
    title: '口腔医疗客服机器人',
    client: '全国连锁口腔医疗机构',
    description: '搭建AI客服机器人，调用内部知识库精准回答，实现自动预约、推送企业微信名片等功能。',
    metrics: [
      { icon: 'users' as const, value: '24/7', label: '全天候服务' },
      { icon: 'trending' as const, value: '95%', label: '准确率' },
      { icon: 'clock' as const, value: '秒级', label: '响应速度' },
    ],
  },
  {
    id: 4,
    image: '/case-4.jpg',
    title: '电商批量生成组图工作流',
    client: '10+家跨境电商企业',
    description: '根据客户需求，搭建电商生图工作流，可实现上传产品图+产品描述后运行，即可批量生成电商全套组图20+张，包括场景图、细节图、尺寸图、A+图、详情页图等。',
    metrics: [
      { icon: 'trending' as const, value: '20x', label: '效率提升' },
      { icon: 'users' as const, value: '1人', label: '节省设计' },
      { icon: 'globe' as const, value: '10+', label: '服务企业' },
    ],
  },
];

const solutions = [
  {
    icon: Zap,
    title: 'AI自动化工作流定制',
    description: '支持TapNow电商生图工作流/扣子/飞书/Make/N8N等主流AI工作流定制开发',
  },
  {
    icon: Cpu,
    title: 'AI智能体开发',
    description: '开发定制各类AI Agent智能体，支持扣子/Make/N8N等主流平台',
  },
  {
    icon: Code,
    title: 'RPA自动化程序开发',
    description: '适用于电商、自媒体运营等各类自动化场景',
  },
  {
    icon: Globe,
    title: '企业AI网站/应用开发定制',
    description: '支持搭建企业官网、AI客服网站等',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'trending': return <TrendingUp className="w-4 h-4" />;
    case 'users': return <Users className="w-4 h-4" />;
    case 'clock': return <Clock className="w-4 h-4" />;
    case 'globe': return <Globe className="w-4 h-4" />;
    default: return null;
  }
};

export function Cases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !container || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll('.case-card');
    const totalCards = cards.length;

    const ctx = gsap.context(() => {
      // Set initial positions - cards stacked in the left area, centered vertically
      cards.forEach((card, index) => {
        const isActive = index === 0;
        const offset = (index - 0) * 30;
        
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
            
            // Cards slide up/down in the left area
            const yOffset = distance * 100;
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
    <section id="cases" ref={sectionRef} className="relative bg-[#080808]">
      <div ref={containerRef} className="min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[150px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Cards (Fixed area, cards slide within, centered) */}
            <div className="relative h-[500px] flex items-center justify-center order-2 lg:order-1">
              <div ref={cardsContainerRef} className="relative w-full max-w-[420px] h-[420px] flex items-center justify-center">
                {clientCases.map((item) => (
                  <div
                    key={item.id}
                    className="case-card absolute w-full"
                    style={{ top: '50%', marginTop: '-140px' }}
                  >
                    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden shadow-2xl">
                      <div className="h-52 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                            {item.client}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-[#a3a3a3] mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.metrics.map((metric, mIndex) => (
                            <div 
                              key={mIndex}
                              className="flex items-center gap-1.5 bg-[#1a1a1a] rounded-lg px-2 py-1"
                            >
                              <span className="text-[#00f0ff]">{getIcon(metric.icon)}</span>
                              <span className="text-xs text-white">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info (Fixed) */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <ScrollReveal>
                <Badge className="bg-[#ec4899]/10 text-[#ec4899] border-[#ec4899]/30 mb-4">
                  客户案例
                </Badge>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                  用AI创造
                  <span className="block text-gradient mt-2">真实价值</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-[#a3a3a3] mb-6 leading-relaxed">
                  我们已为多家行业客户成功落地AI自动化解决方案，覆盖电商、市场营销、医疗、教育、客服等多个场景。
                </p>
              </ScrollReveal>

              {/* Solutions Section */}
              <ScrollReveal delay={0.25}>
                <div className="bg-[#111] border border-[#222] rounded-xl p-5 mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00f0ff]" />
                    我们的解决方案涵盖：
                  </h4>
                  <div className="space-y-3">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <solution.icon className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm text-white font-medium">{solution.title}</span>
                          <span className="text-sm text-[#737373] ml-1">- {solution.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Active Case Info */}
              <div className="bg-[#111] border border-[#222] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
                  <span className="text-xs text-[#ec4899] uppercase tracking-wider">
                    {clientCases[activeIndex]?.client}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {clientCases[activeIndex]?.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] mb-4">
                  {clientCases[activeIndex]?.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {clientCases[activeIndex]?.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-[#1a1a1a] rounded-lg px-3 py-2"
                    >
                      <span className="text-[#00f0ff]">{getIcon(metric.icon)}</span>
                      <div>
                        <div className="text-sm font-semibold text-white">{metric.value}</div>
                        <div className="text-xs text-[#737373]">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mt-6">
                {clientCases.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#ec4899] to-[#a855f7]'
                        : 'w-2 bg-[#333]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
