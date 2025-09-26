import React from 'react';
import LogoBlack from '../../assets/images/logo/square/shushurin-symbol-black.svg';
import LogoWhite from '../../assets/images/logo/square/shushurin-symbol-white.svg';

/**
 * Shu Shu Rin ロゴコンポーネント（新仕様）
 * 
 * @param {boolean} showText - テキストを表示するか
 * @param {string} color - 'gold' | 'black' | 'white'
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - 追加のCSSクラス
 */
const Logo = ({ 
  showText = true, 
  color = 'black',
  size = 'md', 
  className = '' 
}) => {
  // シンボルサイズの定義
  const symbolSizes = {
    sm: 'h-6',
    md: 'h-8', 
    lg: 'h-12',
    xl: 'h-16'
  };

  // テキストサイズの定義
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  };

  // ロゴ画像を color に応じて切り替え
  const imageSrc = color === 'white' ? LogoBlack : LogoWhite;

  // カラーの定義
  // const colorClasses = {
  //   gold: 'text-brand-gold',
  //   black: 'text-brand-primary',
  //   white: 'text-white'
  // };

  // 影効果の設定（白い場合のみ）
  // const shadowClass = color === 'white' ? 'drop-shadow-lg' : '';

  // プレースホルダーSVGシンボル（将来的に実際のロゴファイルに置き換え）
  // const PlaceholderSymbol = () => (
  //   <svg 
  //     viewBox="0 0 80 80" 
  //     fill="currentColor" 
  //     className={`${symbolSizes[size]} ${colorClasses[color]} ${shadowClass}`}
  //   >
  //     <circle cx="40" cy="40" r="30" fill="currentColor" fillOpacity="0.1" />
  //     <path 
  //       d="M40 15 L60 40 L40 65 L20 40 Z" 
  //       fill="currentColor"
  //     />
  //     <circle cx="40" cy="40" r="8" fill="currentColor" fillOpacity="0.3" />
  //   </svg>
  // );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={imageSrc} 
        alt="Shu Shu Rin Logo"  
        className={`${symbolSizes[size]} w-auto`} 
      />
      {showText && (
        <span className={`font-display ${textSizes[size]} ${color === 'white' ? 'text-white' : 'text-brand-primary'} font-medium tracking-wide`}>
          Shu Shu Rin
        </span>
      )}
    </div>
  );
};

export default Logo;
