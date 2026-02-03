import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, BookOpen, Video, QrCode, X } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const contactMethods = [
  {
    icon: MessageCircle,
    label: '微信',
    value: '扫码添加微信',
    qrCode: `${baseUrl}qr-wechat.png`,
  },
  {
    icon: BookOpen,
    label: '小红书',
    value: '扫码关注小红书',
    qrCode: `${baseUrl}qr-xiaohongshu.png`,
  },
  {
    icon: Video,
    label: '抖音',
    value: '扫码关注抖音',
    qrCode: `${baseUrl}qr-douyin.png`,
  },
  {
    icon: QrCode,
    label: '公众号/视频号',
    value: '扫码关注公众号',
    qrCode: `${baseUrl}qr-gongzhonghao.jpg`,
  },
];

export function Contact() {
  const [selectedQR, setSelectedQR] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <Badge className="bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/30 mb-4">
              联系我们
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              期待与您合作
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#a3a3a3]">
              扫码关注，获取更多AI实战干货
            </p>
          </ScrollReveal>
        </div>

        {/* QR Codes Grid */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-[#111] border border-[#222] rounded-xl p-5 hover:border-[#00f0ff]/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedQR(method.qrCode)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#a855f7]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-[#00f0ff]" />
                  </div>
                  <p className="text-white font-medium mb-1">{method.label}</p>
                  <p className="text-xs text-[#737373]">{method.value}</p>
                  
                  {/* QR Code Preview */}
                  <div className="mt-4 w-24 h-24 rounded-lg overflow-hidden bg-white p-1">
                    <img 
                      src={method.qrCode} 
                      alt={method.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center bg-gradient-to-r from-[#00f0ff]/10 via-[#a855f7]/10 to-[#ec4899]/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3">
              准备好开始AI转型了吗？
            </h3>
            <p className="text-[#a3a3a3] mb-6">
              立即联系我们，获取免费的AI转型咨询
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black font-semibold px-8 hover:opacity-90"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              点击咨询
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* QR Code Modal */}
      {selectedQR && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedQR(null)}
        >
          <div className="relative bg-[#111] border border-[#222] rounded-2xl p-6 max-w-sm w-full mx-4">
            <button
              className="absolute top-3 right-3 text-[#737373] hover:text-white transition-colors"
              onClick={() => setSelectedQR(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square rounded-xl overflow-hidden bg-white p-2">
              <img 
                src={selectedQR} 
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-[#a3a3a3] text-sm mt-4">
              扫码添加/关注
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
