import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      {/* Instagram DM Section */}
      <div className="px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-display text-xl font-semibold mb-4 text-brand-secondary">
            お気軽にご相談ください
          </h3>
          <p className="text-brand-secondary/80 text-base leading-relaxed mb-6">
            「わたしに似合う服ってなんだろう？」<br />
            そんなご相談もお気軽に。<br /><br />
            コーディネートのご相談、商品のご質問、<br />
            来店予約など、どんなことでも<br />
            姉妹ふたりで丁寧に対応いたします。
          </p>
          
          {/* Instagram DM Button */}
          <a
            href="https://instagram.com/shushurin_select"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-accent text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-brand-accent/90 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 mb-4 active:scale-95"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram DM でご相談
          </a>
          
          <p className="text-brand-secondary/60 text-sm">
            お返事まで少しお時間をいただく場合があります
          </p>
        </div>
      </div>

      {/* Brand Message */}
      <div className="px-4 py-6 border-t border-brand-accent/20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-brand-secondary/70 text-sm leading-relaxed mb-6">
            年齢にとらわれず、今の自分がときめく一着を<br />
            自由に選んでほしい。<br />
            あなたらしさを大切にした<br />
            スタイリングを一緒に見つけませんか？
          </p>
          
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <Logo 
              showText={true} 
              color="white" 
              size="md"
            />
          </div>
          <p className="text-brand-secondary/50 text-xs italic font-display">
            年齢を脱ぐ、冒険を着る
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 py-4 border-t border-brand-accent/20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-brand-secondary/50 text-xs">
            © 2025 ShuShuRin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
