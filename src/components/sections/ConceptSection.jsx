import React from 'react';
import ConceptCard from './ConceptCard';
import { concepts } from '../../data/concepts';

const ConceptSection = () => {
  return (
    <section className="py-16 px-6 bg-brand-secondary">
      <div className="max-w-lg mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display text-brand-primary mb-4 leading-relaxed">
            Concept
          </h2>
          <p className="text-sophisticated-500 font-light text-sm leading-relaxed">
            ShuShuRinが大切にしている想い
          </p>
        </div>

        {/* コンセプトカード一覧 */}
        <div className="space-y-6">
          {concepts.map((concept, index) => (
            <ConceptCard 
              key={concept.id} 
              concept={concept} 
              index={index}
            />
          ))}
        </div>

        {/* CTA エリア */}
        <div className="text-center mt-12">
          <p className="text-sophisticated-500 text-sm mb-6 leading-relaxed">
            それぞれのコンセプトについて、<br />
            より詳しくご紹介しています
          </p>
          
          <button 
            className="
              bg-brand-accent text-white 
              px-8 py-3 rounded-full 
              font-display text-sm
              shadow-lg hover:shadow-xl
              transform hover:scale-105 active:scale-95
              transition-all duration-200
              focus:ring-4 focus:ring-brand-accent/30
              focus:outline-none
            "
            onClick={() => {
              // 実際のクリック処理（将来的にルーターを追加予定）
              console.log('Navigate to /concept');
              alert('コンセプト詳細ページに移動します（将来実装予定）');
            }}
          >
            コンセプトを詳しく見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
