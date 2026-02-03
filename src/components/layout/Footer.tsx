import { MessageCircle, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gradient font-display">
                FreeFlow
              </span>
              <span className="text-xs text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">
                AI
              </span>
            </div>
            <p className="text-sm text-[#737373] mb-4">
              Where AI Sets You Free<br />
              用AI赋能企业，实现智能化转型
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-[#737373] hover:text-[#00f0ff] transition-colors">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#737373] hover:text-[#00f0ff] transition-colors">
                  服务
                </a>
              </li>
              <li>
                <a href="#training" className="text-sm text-[#737373] hover:text-[#00f0ff] transition-colors">
                  培训案例
                </a>
              </li>
              <li>
                <a href="#cases" className="text-sm text-[#737373] hover:text-[#00f0ff] transition-colors">
                  客户案例
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-sm text-[#737373]">微信号: EllenAI2046</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-sm text-[#737373]">微信: Ellen AI实战派</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-sm text-[#737373]">小红书: @Ellen AI实战派</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#737373]">
            © 2025 深圳市自在无界科技有限公司. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#737373] hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-sm text-[#737373] hover:text-white transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
