import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description: string;
  items: { label: string; value: string }[];
  featured?: boolean;
  ctaText?: string;
}

export function PricingCard({ 
  title, 
  description, 
  items, 
  featured = false,
  ctaText = '咨询详情'
}: PricingCardProps) {
  return (
    <Card className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
      featured 
        ? 'bg-gradient-to-b from-[#111] to-[#1a1a1a] border-[#00f0ff]/50 scale-105 z-10' 
        : 'bg-[#111] border-[#222] hover:border-[#a855f7]/50'
    }`}>
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black text-xs font-semibold px-4 py-1 rounded-bl-lg">
            推荐
          </div>
        </div>
      )}
      
      {/* Glow effect for featured */}
      {featured && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 via-transparent to-[#a855f7]/20" />
        </div>
      )}
      
      <CardHeader className="relative z-10">
        <CardTitle className={`text-xl font-semibold ${featured ? 'text-gradient' : 'text-white'}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-[#a3a3a3] mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-[#222] last:border-0">
              <span className="text-sm text-[#e5e5e5]">{item.label}</span>
              <span className={`text-sm font-semibold ${featured ? 'text-[#00f0ff]' : 'text-white'}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full mt-4 ${
            featured 
              ? 'bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black hover:opacity-90' 
              : 'bg-transparent border border-[#333] text-white hover:bg-[#222]'
          }`}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
