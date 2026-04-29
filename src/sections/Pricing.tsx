import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { PricingCard } from '@/components/cards/PricingCard';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    title: '快速体验套餐',
    price: '￥3,000 – ￥5,000',
    priceUnit: '/ 次',
    description: '基于现有AI工具快速适配企业需求，7天内拥有首个可落地AI工具',
    features: [
      '基于现有AI工具快速适配企业需求',
      '针对单一场景微调优化（运营/内容/客服/选品等）',
      '快速部署上线，可直接使用',
      '使用教程文档 1份',
      '线上交付讲解 1次',
    ],
    support: [
      '免费优化调整 1次',
      '线上答疑支持 7天',
    ],
    deliverables: [
      '7天内拥有首个可落地AI工具',
      '团队成员可立即开始使用',
      '快速验证AI提效价值',
    ],
    featured: false,
  },
  {
    title: '轻量化定制陪跑套餐',
    price: '￥10,000 – ￥15,000',
    priceUnit: '/ 月',
    description: '定制开发1个核心业务模块，1个月陪跑支持，效率提升3-10倍',
    features: [
      '定制开发 1个核心业务模块',
      '工具部署 + 使用教程交付',
      '线上培训 1次（1小时）',
      '1个月陪跑支持（答疑/优化/落地）',
    ],
    support: [
      'AI 选品分析工具',
      'AI Listing 生成工具',
      'AI 产品组图生成工具',
      'AI 视频生成工具',
      'AI 广告数据分析工具',
    ],
    supportLabel: '可落地方向',
    deliverables: [
      '完成1个核心业务流程自动化',
      '节省大量重复人工时间',
      '团队稳定使用AI工具协作',
      '效率提升 3-10倍',
    ],
    featured: true,
  },
  {
    title: '企业深度定制套餐',
    price: '￥30,000 – ￥50,000',
    priceUnit: '/ 月',
    description: '定制开发3-5个业务板块自动化系统，1个月深度陪跑咨询',
    features: [
      '定制开发 3-5个业务板块自动化系统',
      '工具部署 + 全套教程文档',
      '线上培训 2次（每次1小时）',
      '1个月深度陪跑咨询（推进落地/团队培训/优化升级规划）',
    ],
    support: [
      '选品运营',
      '内容生产',
      '广告投放',
      '客服售后',
      '数据分析',
    ],
    supportLabel: '可覆盖多个板块自动化',
    deliverables: [
      '企业可复用自动化资产',
      '用AI自动化系统代替重复人工，节省每年几十万人力成本',
      '建立企业AI自动化运营体系',
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
