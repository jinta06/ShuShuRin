import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const ConceptCard = ({ concept, index }) => {
  const handleCardClick = () => {
    // 実際のリンク処理（将来的にルーターを追加予定）
    alert(`「${concept.title}」の詳細ページに移動します（将来実装予定）`);
  };

  return (
    <div 
      className={`
        ${concept.bgColor} 
        rounded-2xl p-8 mb-6 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 ease-in-out
        cursor-pointer
        border border-white/50
        backdrop-blur-sm
        transform hover:scale-[1.02]
        active:scale-[0.98]
      `}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`${concept.title}の詳細を見る`}
    >
      {/* 番号とタイトル */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className={`
            w-12 h-12 rounded-full 
            ${concept.accentColor} bg-white/60 backdrop-blur-sm
            flex items-center justify-center
            text-xl font-display font-bold
            shadow-sm
          `}>
            {concept.number}
          </div>
          <div className="flex-1">
            <h3 className={`
              text-lg font-display font-medium ${concept.textColor} 
              leading-relaxed
            `}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden'
            }}>
              {concept.title}
            </h3>
          </div>
        </div>
        
        {/* 矢印アイコン */}
        <ChevronRightIcon 
          className={`
            w-5 h-5 ${concept.accentColor} 
            flex-shrink-0 ml-2 mt-1
            transform transition-transform duration-200
            group-hover:translate-x-1
          `}
        />
      </div>

      {/* 説明文 */}
      <p className={`
        ${concept.textColor} 
        text-sm leading-relaxed opacity-80
      `}
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden'
      }}>
        {concept.shortDescription}
      </p>

      {/* 詳細へのヒント */}
      <div className="mt-6 pt-4 border-t border-white/30">
        <span className={`
          text-xs ${concept.accentColor} 
          font-medium tracking-wide
          opacity-70
        `}>
          詳細を見る
        </span>
      </div>
    </div>
  );
};

export default ConceptCard;
