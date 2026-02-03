import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { PricingCard } from '@/components/cards/PricingCard';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    title: 'AI企业培训',
    description: '灵活多样的培训方案，满足不同企业需求',
    items: [
      { label: '单节课 (1.5小时)', value: '¥2,500' },
      { label: '半天培训 (3小时)', value: '¥4,000' },
      { label: '全天培训 (6小时)', value: '¥8,000' },
      { label: '两天一夜训练营', value: '¥15,000' },
    ],
    featured: false,
  },
  {
    title: 'AI工作流/RPA定制',
    description: '根据需求定制开发，首月免费维护',
    items: [
      { label: '简单定制', value: '¥1,000-3,000' },
      { label: '中等定制', value: '¥3,000-10,000' },
      { label: '高难度定制', value: '¥10,000+' },
      { label: '月度维护', value: '¥2,000/月' },
    ],
    featured: true,
  },
  {
    title: 'AI企业转型咨询',
    description: '系统化顾问服务，全程陪跑落地',
    items: [
      { label: '基础咨询', value: '¥299/小时' },
      { label: '企业诊断+方案', value: '¥1,000/小时' },
      { label: '月度顾问服务', value: '¥10,000/月' },
      { label: '含培训顾问', value: '¥15,000/月' },
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00f0ff]/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge className="bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30 mb-4">
              合作方式
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              灵活的服务方案
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
              满足不同规模企业的需求，让AI转型更加轻松
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Process */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20">
            <h3 className="text-xl font-semibold text-white text-center mb-8">合作流程</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { step: '01', title: '对接需求', desc: '明确功能、预算、周期' },
                { step: '02', title: '确定方案', desc: '提供方案和报价' },
                { step: '03', title: '开发交付', desc: '定期汇报，优化交付' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-[#111] border border-[#222] rounded-xl p-4 w-48 text-center hover:border-[#00f0ff]/30 transition-colors">
                    <span className="text-2xl font-bold text-gradient">{item.step}</span>
                    <h4 className="text-white font-medium mt-2">{item.title}</h4>
                    <p className="text-xs text-[#737373] mt-1">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block text-[#333]">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
