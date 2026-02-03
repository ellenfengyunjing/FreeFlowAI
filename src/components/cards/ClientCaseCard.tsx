import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Clock } from 'lucide-react';

interface ClientCaseCardProps {
  image: string;
  title: string;
  client: string;
  description: string;
  metrics: { icon: 'trending' | 'users' | 'clock'; value: string; label: string }[];
  isActive?: boolean;
}

export function ClientCaseCard({ 
  image, 
  title, 
  client, 
  description, 
  metrics,
  isActive = false 
}: ClientCaseCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'trending': return <TrendingUp className="w-4 h-4" />;
      case 'users': return <Users className="w-4 h-4" />;
      case 'clock': return <Clock className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <Card className={`arc-card absolute w-[340px] md:w-[450px] transition-all duration-500 ${
      isActive 
        ? 'scale-100 opacity-100 z-20' 
        : 'scale-90 opacity-50 z-10'
    }`}>
      <div className="relative overflow-hidden rounded-lg bg-[#111] border border-[#222]">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
          
          {/* Client badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
              {client}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-[#a3a3a3] mb-4 line-clamp-2">{description}</p>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-3">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
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
        </CardContent>
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899]" />
        )}
      </div>
    </Card>
  );
}
