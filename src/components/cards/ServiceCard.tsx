import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="group relative bg-[#111] border-[#222] hover:border-[#00f0ff]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-transparent to-[#a855f7]/10" />
      </div>
      
      <CardHeader className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#a855f7]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-white group-hover:text-gradient-cyan transition-all duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-[#a3a3a3] mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-[#e5e5e5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
