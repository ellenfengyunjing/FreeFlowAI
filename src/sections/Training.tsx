import { useEffect, useState, useCallback, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

const baseUrl = import.meta.env.BASE_URL;
const trainingCases = [
  { id: 1, image: `${baseUrl}training-1.jpg`, title: '海柔创新科技公司', subtitle: 'AI营销自动化实战课', description: 'AI营销自动化实战课：从爆款到洞察闭环，帮助企业掌握AI生成营销文案、图片的技巧，实现营销内容自动化生产。' },
  { id: 2, image: `${baseUrl}training-2.jpg`, title: '谷歌跨境电商中心', subtitle: 'TapNow广告工作流', description: '如何用TapNow打造低成本可复用广告工作流，帮助跨境电商企业降低广告投放成本，提高广告效果。' },
  { id: 3, image: `${baseUrl}training-3.jpg`, title: '深圳市南山智园', subtitle: 'AI职场办公提效系列课', description: 'AI职场办公提效系列课，帮助园区企业员工掌握AI办公工具，提升日常工作效率。' },
  { id: 4, image: `${baseUrl}training-4.jpg`, title: '深圳市人工智能协会', subtitle: '扣子智能体社媒爆款', description: '如何用扣子智能体打造社媒爆款内容自动化体系，帮助企业实现社交媒体内容自动化运营。' },
  { id: 5, image: `${baseUrl}training-5.jpg`, title: '深圳市南山智园青年夜校', subtitle: 'AI职场办公提效系列课', description: 'AI职场办公提效（一）：AI速读文档、会议纪要和公文写作；AI职场办公提效（二）：Word/Excel自动化处理，PPT/图表生成。' },
  { id: 6, image: `${baseUrl}training-6.jpg`, title: '深圳市龙华总工会', subtitle: 'Deepseek职场达人', description: '2小时变身AI职场达人：Deepseek从入门到实战，帮助职工快速掌握Deepseek AI工具的使用方法。' },
  { id: 7, image: `${baseUrl}training-7.jpg`, title: '香港大学MBA学院', subtitle: '飞书+扣子办公自动化', description: '飞书+扣子实现高效办公自动化，为MBA学员提供前沿的AI办公自动化解决方案。' },
  { id: 8, image: `${baseUrl}training-8.png`, title: '深圳职业技术大学', subtitle: '小红书爆款仿写智能体', description: '用扣子打造小红书爆款仿写智能体，帮助学生掌握AI内容创作技巧，提升就业竞争力。' },
  { id: 9, image: `${baseUrl}training-9.jpg`, title: '深圳赤湾胜宝旺工程有限公司', subtitle: '3天AI企业提效系列课', description: '3天AI企业提效系列课：1. 职场办公提效全流程实操；2. 飞书&影刀办公自动化；3. 扣子/N8N/Make工作流。' },
  { id: 10, image: `${baseUrl}training-10.jpg`, title: '深圳市春野创新科技有限公司', subtitle: '龙虾Skills+扣子网页开发', description: '如何用扣子开发抖音带货视频生成网站、批量生图网站；如何使用WorkBuddy龙虾并调用Skills完成竞品调研、选品、Listing生成等任务。' },
  { id: 11, image: `${baseUrl}training-11.jpg`, title: '跨境电商龙虾Skill实操闭门会', subtitle: '2小时打造电商运营自动化', description: 'AI趋势与跨境落地案例；龙虾Skill零基础快速入门；亚马逊自动化龙虾Skills实战。' },
];

export function Training() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  // Close modal on click outside
  useEffect(() => {
    if (expandedId === null) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setExpandedId(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [expandedId]);

  // Close modal on Escape
  useEffect(() => {
    if (expandedId === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedId(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [expandedId]);

  const expandedCase = expandedId !== null
    ? trainingCases.find(c => c.id === expandedId)
    : null;

  return (
    <section id="training" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <Badge className="bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30 mb-4">
              企业培训
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              AI赋能团队
              <span className="block text-gradient mt-2">激发组织潜力</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
              我们为企业、政府机构、高校及产业园区提供定制化AI培训服务，课程涵盖AI办公提效、营销自动化、智能体开发等方向，已累计开展35+场线下培训，覆盖1500+名学员，帮助团队快速掌握AI工具，实现业务提效与数字化转型。
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <div className="px-8 md:px-12">
          <Carousel
            opts={{ align: 'center', loop: true }}
            plugins={[WheelGesturesPlugin()]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {trainingCases.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-[85%] md:basis-[45%] lg:basis-[33.333%]"
                >
                  <div
                    className={`transition-all duration-300 cursor-pointer ${
                      index === activeIndex
                        ? 'scale-105 opacity-100'
                        : 'scale-95 opacity-50'
                    }`}
                    onClick={() => {
                      if (index === activeIndex) {
                        setExpandedId(item.id);
                      } else {
                        api?.scrollTo(index);
                      }
                    }}
                  >
                    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden shadow-2xl hover:border-[#00f0ff]/30 transition-colors">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block text-xs bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded mb-2">
                          {item.subtitle}
                        </span>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className={`text-sm text-[#a3a3a3] ${index === activeIndex ? '' : 'line-clamp-2'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#111] border-[#333] text-white hover:bg-[#222] hover:text-white" />
            <CarouselNext className="bg-[#111] border-[#333] text-white hover:bg-[#222] hover:text-white" />
          </Carousel>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {trainingCases.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-[#00f0ff] to-[#a855f7]'
                  : 'w-2 bg-[#333] hover:bg-[#555]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Expanded modal overlay */}
      {expandedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div ref={modalRef} className="relative bg-[#111] border border-[#222] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setExpandedId(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={expandedCase.image}
              alt={expandedCase.title}
              className="w-full aspect-video object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <span className="inline-block text-xs bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded mb-3">
                {expandedCase.subtitle}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">{expandedCase.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{expandedCase.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}