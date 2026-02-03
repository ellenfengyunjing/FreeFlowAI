import { Card, CardContent } from '@/components/ui/card';

interface TrainingCaseCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  isActive?: boolean;
}

export function TrainingCaseCard({ 
  image, 
  title, 
  subtitle, 
  description,
  isActive = false 
}: TrainingCaseCardProps) {
  return (
    <Card className={`arc-card absolute w-[320px] md:w-[400px] transition-all duration-500 ${
      isActive 
        ? 'scale-100 opacity-100 z-20' 
        : 'scale-90 opacity-50 z-10'
    }`}>
      <div className="relative overflow-hidden rounded-lg bg-[#111] border border-[#222]">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
            <span className="text-xs text-[#00f0ff] uppercase tracking-wider">{subtitle}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-[#a3a3a3] line-clamp-2">{description}</p>
        </CardContent>
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899]" />
        )}
      </div>
    </Card>
  );
}
