import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Award, Users, BookOpen, Globe } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '35+', label: '线下培训场次' },
  { icon: Users, value: '1500+', label: '培训学员' },
  { icon: Award, value: '10+', label: '合作机构' },
  { icon: Globe, value: '30+', label: '服务企业' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Company Info */}
          <div>
            <ScrollReveal>
              <Badge className="bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30 mb-4">
                关于我们
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                用AI赋能企业
                <span className="block text-gradient mt-2">实现智能化转型</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
                <p>
                  深圳市自在无界科技有限公司是一家为企业提供AI自动化解决方案、AI企业培训与企业AI转型顾问服务的公司，致力于用AI赋能企业，帮助企业实现AI业务转型与降本增效。
                </p>
                <p>
                  公司成立于2025年3月，位于深圳市福田区，服务客户覆盖：跨境电商、品牌营销、医疗、教育、客服、出海企业服务等各行业领域。
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-[#111] border border-[#222] rounded-xl p-4 text-center hover:border-[#00f0ff]/30 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-[#00f0ff] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#737373]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Founder Info */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal delay={0.2}>
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-5 mb-6">
                  {/* Founder Photo */}
                  <div className="w-24 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-[#1a1a1a]">
                    <img 
                      src={`${import.meta.env.BASE_URL}ellen-feng.png`} 
                      alt="冯韵静 Ellen Feng"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">冯韵静 Ellen Feng</h3>
                    <p className="text-[#00f0ff] text-sm">CEO / 创始人</p>
                    <p className="text-[#737373] text-sm mt-1">准上市公司AI转型顾问</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-[#e5e5e5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-2 flex-shrink-0" />
                    资深AI培训导师，AI Agent开发专家，RPA工程师
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[#e5e5e5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 flex-shrink-0" />
                    6000+粉AI自媒体博主（Ellen AI实战派）
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[#e5e5e5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] mt-2 flex-shrink-0" />
                    阿姆斯特丹大学硕士，10年海外市场营销经验
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#222]">
                  <p className="text-sm text-[#a3a3a3] mb-3 leading-relaxed">
                    共开展35+场AI线下培训，累计培训学员1500+名，拥有3000+学员的AI学习社群，
                    为跨境电商公司、东南亚财税公司、海外房车公司等30+企业提供AI自动化解决方案。
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#222]">
                  <p className="text-sm text-[#737373] mb-3">曾担任AI客座讲师的机构：</p>
                  <div className="flex flex-wrap gap-2">
                    {['谷歌跨境电商中心', '亚马逊中国', '深圳人工智能产业协会', '香港大学MBA', '深职院'].map((org, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-[#1a1a1a] text-[#a3a3a3] px-2 py-1 rounded"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
