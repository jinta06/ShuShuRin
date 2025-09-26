import React from 'react';
import Logo from '../common/Logo';
import heroImage from '../../assets/images/hero/hero-main-visual.webp';

/**
 * Shu Shu Rin ヒーローセクション
 * - フルスクリーン背景画像
 * - エレガントなオーバーレイ
 * - ロゴ・キャッチコピー・説明文の配置
 * - おしゃれなスクロールインジケーター
 */
const Hero = () => {
  // スクロールダウンのスムーズ処理
  const handleScrollDown = () => {
    const nextSection = document.querySelector('#philosophy-section') || 
                       document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[667px] overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          // backgroundImage: 'url(/images/hero/hero-main-visual.webp)',
          filter: 'brightness(0.75) contrast(1.05) saturate(0.9)'
        }}
      />
      
      {/* エレガントな透過オーバーレイ */}
      <div className="absolute inset-0 bg-zinc-500/60" />
      
      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="max-w-sm mx-auto text-center">
          
          {/* ロゴ（小さくエレガントに） */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Logo
              showText={true}
              color="white"
              size="sm"
              className="justify-center drop-shadow-lg"
            />
          </div>
          
          {/* キャッチコピー（中央寄せ・小さめ） */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h1 className="text-white font-serif text-xl font-light leading-relaxed drop-shadow-md tracking-wide">
              年齢を脱ぐ、冒険を着る
            </h1>
          </div>
          
          {/* 説明文（中央寄せ・エレガント） */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <p className="text-white/95 font-serif text-xs font-light leading-relaxed drop-shadow-sm">
                Shu Shu Rinは、姉妹で営む小さなセレクトショップ。<br />
                「着てみたい」と思える一着との出会いが、<br />
                あなたの毎日を少しだけ特別にしてくれるはず。<br />
                今まで選ばなかった色、形、スタイルにも、<br />
                そっと手を伸ばせるように。
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* おしゃれなスクロールインジケーター */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-20 text-center animate-bounce-slow">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="下にスクロール"
        >

          <span className="text-xs font-serif tracking-widest mb-2 opacity-90 group-hover:opacity-100 transition-opacity text-center w-full">
            SCROLL
          </span>
          

          <div className="mx-auto w-5 h-8 border border-white/60 rounded-full relative group-hover:border-white/80 transition-colors">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white/60 rounded-full animate-scroll-dot group-hover:bg-white/80"></div>
          </div>
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
