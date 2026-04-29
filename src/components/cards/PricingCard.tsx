import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  support: string[];
  supportLabel?: string;
  deliverables: string[];
  featured?: boolean;
  ctaText?: string;
}

export function PricingCard({
  title,
  price,
  priceUnit,
  description,
  features,
  support,
  supportLabel = '售后支持',
  deliverables,
  featured = false,
  ctaText = '咨询详情',
}: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? 'bg-gradient-to-b from-[#111] to-[#1a1a1a] border-[#00f0ff]/50 scale-105 z-10'
          : 'bg-[#111] border-[#222] hover:border-[#a855f7]/50'
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black text-xs font-semibold px-4 py-1 rounded-bl-lg">
            推荐
          </div>
        </div>
      )}

      {featured && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 via-transparent to-[#a855f7]/20" />
        </div>
      )}
      <CardHeader className="relative z-10 pb-2">
        <CardTitle className={`text-xl font-semibold ${featured ? 'text-gradient' : 'text-white'}`}>
          {title}
        </CardTitle>
        <div className="mt-3">
          <span className={`text-2xl font-bold ${featured ? 'text-[#00f0ff]' : 'text-white'}`}>{price}</span>
          <span className="text-sm text-[#737373] ml-1">{priceUnit}</span>
        </div>
        <p className="text-sm text-[#a3a3a3] mt-2">{description}</p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-5 pt-2">
        {/* 服务内容 */}
        <div>
          <h5 className="text-xs text-[#737373] uppercase tracking-wider mb-2">服务内容</h5>
          <ul className="space-y-2">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${featured ? 'bg-[#00f0ff]' : 'bg-[#a855f7]'}`} />
                <span className="text-sm text-[#e5e5e5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 售后支持 */}
        <div>
          <h5 className="text-xs text-[#737373] uppercase tracking-wider mb-2">{supportLabel}</h5>
          <ul className="space-y-2">
            {support.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${featured ? 'bg-[#00f0ff]' : 'bg-[#a855f7]'}`} />
                <span className="text-sm text-[#e5e5e5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 交付结果 */}
        <div className={`rounded-lg p-3 ${featured ? 'bg-[#00f0ff]/5 border border-[#00f0ff]/10' : 'bg-[#1a1a1a]'}`}>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-[#00f0ff]' : 'text-[#a855f7]'}`} />
                <span className="text-sm text-[#e5e5e5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          className={`w-full mt-4 ${
            featured
              ? 'bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black hover:opacity-90'
              : 'bg-transparent border border-[#333] text-white hover:bg-[#222]'
          }`}
          onClick={() => window.open('https://ccnkpg6fj0oc.feishu.cn/share/base/form/shrcnrO1fb8XWn0bpJq0EF4UyCd', '_blank')}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
