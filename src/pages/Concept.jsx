import React, { useEffect } from 'react';
import { HeartIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import { concepts } from '../data/concepts';

const Concept = () => {
  useEffect(() => {
    // ページタイトル設定
    document.title = 'コンセプト | ShuShuRin';
    
    // URLのハッシュがある場合、該当セクションにスクロール
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const getIcon = (conceptId) => {
    switch (conceptId) {
      case 1:
        return <HeartIcon className="w-8 h-8" />;
      case 2:
        return <SparklesIcon className="w-8 h-8" />;
      case 3:
        return <StarIcon className="w-8 h-8" />;
      default:
        return <HeartIcon className="w-8 h-8" />;
    }
  };

  const handleCoordinateNavigation = () => {
    window.location.href = '/coordinate';
  };

  return (
    <main className="min-h-screen bg-brand-secondary pt-20">
      {/* ヒーローセクション */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
            Concept
          </h1>
          <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
            ShuShuRinが大切にしている想いを<br />
            3つのコンセプトでお伝えします
          </p>
          <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
        </div>
      </section>

      {/* コンセプト詳細セクション */}
      <section className="pb-16">
        <div className="max-w-lg mx-auto px-4 space-y-12">
          {concepts.map((concept, index) => (
            <article 
              key={concept.id}
              id={concept.link.split('#')[1]}
              className="bg-white rounded-2xl p-8 shadow-sm border border-sophisticated-100"
            >
              {/* コンセプト番号とアイコン */}
              <div className="flex items-center justify-center mb-6">
                {/* <div className={`flex items-center justify-center w-16 h-16 ${concept.bgColor} rounded-full mr-4`}>
                  <div className={concept.accentColor}>
                    {getIcon(concept.id)}
                  </div>
                </div> */}
                <span className={`text-4xl font-display font-light ${concept.accentColor}`}>
                  {concept.number}
                </span>
              </div>

              {/* タイトル */}
              <h2 className="text-xl font-display font-medium text-brand-primary mb-6 text-center leading-relaxed">
                {concept.title}
              </h2>

              {/* 詳細説明 */}
              <div className="space-y-4">
                {concept.fullDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-sophisticated-500 text-sm leading-relaxed text-center">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* 装飾的な区切り線 */}
              {index < concepts.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="w-8 h-0.5 bg-sophisticated-200"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 px-4 bg-gradient-to-b from-brand-secondary to-sophisticated-50">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sophisticated-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-6">
              <SparklesIcon className="w-8 h-8 text-brand-accent" />
            </div>
            
            <h3 className="text-xl font-display font-medium text-brand-primary mb-4">
              実際のコーディネートを見てみませんか？
            </h3>
            
            <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
              これらのコンセプトを体現した<br />
              実際のスタイリングをご覧いただけます
            </p>
            
            <button 
              onClick={handleCoordinateNavigation}
              className="
                w-full bg-brand-accent text-white 
                px-8 py-3 rounded-full 
                font-display text-sm font-medium
                shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                transition-all duration-200
                focus:ring-4 focus:ring-brand-accent/30
                focus:outline-none
                inline-flex items-center justify-center gap-2
              "
            >
              <SparklesIcon className="w-4 h-4" />
              コーディネートを見る
            </button>
          </div>
        </div>
      </section>

      {/* ページ下部の装飾 */}
      <section className="py-8 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-sophisticated-400 text-xs italic">
            あなたらしい特別な一着との出会いを
          </p>
        </div>
      </section>
    </main>
  );
};

export default Concept;
