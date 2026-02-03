import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Cpu, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#00f0ff]" />,
    title: 'AI企业培训',
    description: '面向企业核心部门定制培训方案，帮助内部团队掌握AI+业务核心技能',
    features: [
      '单场/半天/全天/两天一夜训练营',
      'AI办公提效、AI智能体应用',
      '工作流自动化实战',
      '企业落地案例演示',
    ],
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#a855f7]" />,
    title: 'AI+RPA自动化方案',
    description: '为企业定制个性化AI自动化解决方案，实现降本增效',
    features: [
      'AI智能体/工作流定制开发',
      '电商生图生视频工作流',
      '影刀RPA程序开发',
      '企业AI网站/应用开发',
    ],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-[#ec4899]" />,
    title: 'AI企业转型顾问',
    description: '为企业提供系统化、可落地的AI转型顾问服务',
    features: [
      '业务流程拆解与AI机会识别',
      'AI工具推荐与应用指导',
      '定制化AI转型路径规划',
      '阶段性陪跑与落地支持',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge className="bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/30 mb-4">
              我们的服务
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              全方位AI解决方案
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
              从培训到落地，从咨询到开发，助力企业实现智能化转型
            </p>
          </ScrollReveal>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-[#737373] mb-4">
              不确定需要哪种服务？联系我们获取免费咨询
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-[#00f0ff] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              预约咨询 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
