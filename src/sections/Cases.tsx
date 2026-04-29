import { useEffect, useState, useCallback, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TrendingUp, Users, Clock, Zap, Cpu, Globe, Code, ChevronLeft, ChevronRight, X } from 'lucide-react';
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
const clientCases = [
  {
    id: 1,
    images: [`${baseUrl}case-1.jpg`],
    title: '亚马逊RPA网页操作自动化',
    client: '年营收过亿拟上市亚马逊企业',
    description: '提供咨询+自动化系统落地服务，1小时采集400+条竞品数据，1天生成1000+张商品图，节省2名运营岗位，年省20万+成本。',
    metrics: [
      { icon: 'trending' as const, value: '1000+', label: '日产商品图' },
      { icon: 'users' as const, value: '2人', label: '节省岗位' },
      { icon: 'clock' as const, value: '20万+', label: '年省成本' },
    ],
  },
  {
    id: 2,
    images: [`${baseUrl}case-2.png`],
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
    images: [`${baseUrl}case-3.png`],
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
    images: [`${baseUrl}case-4.jpg`],
    title: '电商批量生成组图工作流',
    client: '10+家跨境电商企业',
    description: '搭建电商生图工作流，上传产品图+描述即可批量生成全套组图20+张，包括场景图、细节图、尺寸图、A+图等。',
    metrics: [
      { icon: 'trending' as const, value: '20x', label: '效率提升' },
      { icon: 'users' as const, value: '1人', label: '节省设计' },
      { icon: 'globe' as const, value: '10+', label: '服务企业' },
    ],
  },
  {
    id: 5,
    images: [`${baseUrl}case-5.png`, `${baseUrl}case-6.png`, `${baseUrl}case-7.png`],
    title: 'AI生图工作流日产300+素材图',
    client: '美国品牌营销Agency',
    description: '定制多行业AI生图工作流，覆盖珠宝、服装、户外、工业品等类目，1天生成300+张商用图片，单图抽卡控制在3次内。',
    metrics: [
      { icon: 'trending' as const, value: '300+', label: '日产图片' },
      { icon: 'trending' as const, value: '10x+', label: '效率提升' },
      { icon: 'clock' as const, value: '≤3次', label: '单图抽卡' },
    ],
  },
  {
    id: 9,
    images: [`${baseUrl}case-9.png`, `${baseUrl}case-10.png`],
    title: '亚马逊产品视频批量生成',
    client: '铺货型亚马逊电商公司',
    description: '搭建AI视频工作流，上传产品图后自动生成脚本、分镜、字幕、成片，单视频成本控制在30元内，素材上线周期缩短80%+。',
    metrics: [
      { icon: 'trending' as const, value: '10x+', label: '效率提升' },
      { icon: 'clock' as const, value: '≤30元', label: '单视频成本' },
      { icon: 'trending' as const, value: '80%+', label: '周期缩短' },
    ],
  },
  {
    id: 13,
    images: [`${baseUrl}case-13.jpg`],
    title: '抖音服装带货视频批量生成',
    client: '抖音服装带货团队',
    description: '定制AI视频生成网站，上传产品图即可批量生成带货视频，1套系统替代5人团队周产能，视频更新周期由2-3天缩短至1小时。',
    metrics: [
      { icon: 'trending' as const, value: '10x+', label: '视频产能' },
      { icon: 'users' as const, value: '5人', label: '替代团队' },
      { icon: 'clock' as const, value: '1h', label: '更新周期' },
    ],
  },
  {
    id: 14,
    images: [`${baseUrl}case-14.jpg`],
    title: '参考图批量生成产品组图',
    client: '美客多服装电商公司',
    description: '搭建AI出图网站，上传参考图后一键替换产品与文案，保留原图排版与爆款视觉结构，数十张图片制作由半天缩短至15分钟。',
    metrics: [
      { icon: 'trending' as const, value: '100+', label: '批量生成' },
      { icon: 'clock' as const, value: '15min', label: '制作时间' },
      { icon: 'trending' as const, value: '8x+', label: '上新效率' },
    ],
  },
  {
    id: 12,
    images: [`${baseUrl}case-12.jpg`, `${baseUrl}case-15.jpg`, `${baseUrl}case-16.jpg`],
    title: '龙虾 Skill 驱动亚马逊运营全流程自动化',
    client: '年营收过亿亚马逊电商公司',
    description: '基于龙虾 Skill 定制全套自动化流程，打通选品分析、Listing生成、组图生成、视频生成全链路，上新效率整体提升5倍+。',
    metrics: [
      { icon: 'trending' as const, value: '10x', label: 'Listing效率' },
      { icon: 'clock' as const, value: '30min', label: '组图制作' },
      { icon: 'trending' as const, value: '5x+', label: '上新效率' },
    ],
  },
];

const solutions = [
  { icon: Zap, title: 'AI自动化工作流定制', description: '支持TapNow电商生图工作流/扣子/飞书/Make/N8N等主流AI工作流定制开发' },
  { icon: Cpu, title: 'AI智能体开发', description: '开发定制各类AI Agent智能体，支持扣子/Make/N8N等主流平台' },
  { icon: Code, title: 'RPA自动化程序开发', description: '适用于电商、自媒体运营等各类自动化场景' },
  { icon: Globe, title: '企业AI网站/应用开发定制', description: '支持搭建企业官网、AI客服网站等' },
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
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({});
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

  const expandedCase = expandedId !== null ? clientCases.find(c => c.id === expandedId) : null;

  return (
    <section id="cases" className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
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
            <p className="text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed mb-6">
              我们专注于提供AI企业自动化解决方案，通过搭建低门槛、轻量化、模块化的AI自动化系统，我们帮助企业真正实现降本增效、提高业务效率、实现AI升级转型，服务30+企业，覆盖电商、市场营销、医疗、教育、客服等多行业领域。
            </p>
          </ScrollReveal>
        </div>

        {/* Solutions bar */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {solutions.map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-4 py-2">
                <s.icon className="w-4 h-4 text-[#a855f7]" />
                <span className="text-sm text-[#e5e5e5]">{s.title}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="px-8 md:px-12">
          <Carousel
            opts={{ align: 'center', loop: true }}
            plugins={[WheelGesturesPlugin()]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clientCases.map((item, index) => (
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
                    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden shadow-2xl hover:border-[#ec4899]/30 transition-colors">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={item.images[imageIndices[item.id] || 0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {item.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndices(prev => ({
                                  ...prev,
                                  [item.id]: ((prev[item.id] || 0) - 1 + item.images.length) % item.images.length,
                                }));
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndices(prev => ({
                                  ...prev,
                                  [item.id]: ((prev[item.id] || 0) + 1) % item.images.length,
                                }));
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {item.images.map((_, imgIdx) => (
                                <span
                                  key={imgIdx}
                                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    imgIdx === (imageIndices[item.id] || 0) ? 'bg-white' : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                            {item.client}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className={`text-sm text-[#a3a3a3] mb-3 ${index === activeIndex ? '' : 'line-clamp-2'}`}>{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="flex items-center gap-1.5 bg-[#1a1a1a] rounded-lg px-2 py-1">
                              <span className="text-[#00f0ff]">{getIcon(metric.icon)}</span>
                              <span className="text-xs text-white">{metric.value}</span>
                            </div>
                          ))}
                        </div>
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
          {clientCases.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-[#ec4899] to-[#a855f7]'
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
            <div className="aspect-video overflow-hidden relative rounded-t-2xl">
              <img
                src={expandedCase.images[imageIndices[expandedCase.id] || 0]}
                alt={expandedCase.title}
                className="w-full h-full object-cover"
              />
              {expandedCase.images.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      setImageIndices(prev => ({
                        ...prev,
                        [expandedCase.id]: ((prev[expandedCase.id] || 0) - 1 + expandedCase.images.length) % expandedCase.images.length,
                      }));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      setImageIndices(prev => ({
                        ...prev,
                        [expandedCase.id]: ((prev[expandedCase.id] || 0) + 1) % expandedCase.images.length,
                      }));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {expandedCase.images.map((_, imgIdx) => (
                      <span
                        key={imgIdx}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          imgIdx === (imageIndices[expandedCase.id] || 0) ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#ec4899]" />
                <span className="text-xs text-[#ec4899] uppercase tracking-wider">{expandedCase.client}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{expandedCase.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">{expandedCase.description}</p>
              <div className="flex flex-wrap gap-3">
                {expandedCase.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#1a1a1a] rounded-lg px-3 py-2">
                    <span className="text-[#00f0ff]">{getIcon(metric.icon)}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{metric.value}</div>
                      <div className="text-xs text-[#737373]">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
