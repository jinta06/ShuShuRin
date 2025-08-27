import React from 'react';

/**
 * ShuShuRin ロゴコンポーネント（新仕様）
 * 
 * @param {boolean} showText - テキストを表示するか
 * @param {string} color - 'gold' | 'black' | 'white'
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - 追加のCSSクラス
 */
const Logo = ({ 
  showText = true, 
  color = 'gold', 
  size = 'md', 
  className = '' 
}) => {
  // シンボルサイズの定義
  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // テキストサイズの定義
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  };

  // カラーの定義
  const colorClasses = {
    gold: 'text-brand-gold',
    black: 'text-brand-primary',
    white: 'text-white'
  };

  // 影効果の設定（白い場合のみ）
  const shadowClass = color === 'white' ? 'drop-shadow-lg' : '';

  // プレースホルダーSVGシンボル（将来的に実際のロゴファイルに置き換え）
  const PlaceholderSymbol = () => (
    <svg 
      viewBox="0 0 80 80" 
      fill="currentColor" 
      className={`${symbolSizes[size]} ${colorClasses[color]} ${shadowClass}`}
    >
      <circle cx="40" cy="40" r="30" fill="currentColor" fillOpacity="0.1" />
      <path 
        d="M40 15 L60 40 L40 65 L20 40 Z" 
        fill="currentColor"
      />
      <circle cx="40" cy="40" r="8" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <PlaceholderSymbol />
      {showText && (
        <span className={`font-display ${textSizes[size]} ${color === 'white' ? 'text-white' : 'text-brand-primary'} ${shadowClass} font-medium tracking-wide`}>
          ShuShuRin
        </span>
      )}
    </div>
  );
};

export default Logo;
