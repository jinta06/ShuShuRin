import React from 'react';

/**
 * ShuShuRin カードコンポーネント
 * 
 * @param {string} variant - 'default' | 'elevated' | 'outlined' | 'glass'
 * @param {string} padding - 'none' | 'sm' | 'md' | 'lg'
 * @param {boolean} hoverable - ホバー効果の有無
 * @param {string} className - 追加のCSSクラス
 * @param {ReactNode} children - カード内容
 */
const Card = ({ 
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  children,
  ...props
}) => {
  // パディング設定
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // バリアント設定
  const variantClasses = {
    default: `
      bg-white
      shadow-md
      border border-sophisticated-100
    `,
    elevated: `
      bg-white
      shadow-lg shadow-sophisticated-500/10
      border border-sophisticated-50
    `,
    outlined: `
      bg-brand-secondary
      border-2 border-brand-accent
      shadow-sm
    `,
    glass: `
      bg-white/80
      backdrop-blur-sm
      shadow-xl shadow-sophisticated-500/20
      border border-white/30
    `
  };

  // ホバー効果
  const hoverClasses = hoverable ? `
    hover:shadow-xl hover:shadow-sophisticated-500/15
    hover:-translate-y-1
    hover:scale-[1.02]
    cursor-pointer
  ` : '';

  // 基本クラス
  const baseClasses = `
    rounded-2xl
    transition-all duration-300 ease-in-out
    overflow-hidden
  `;

  // 最終的なクラス名
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      className={cardClasses}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * カードヘッダーコンポーネント
 */
Card.Header = ({ className = '', children, ...props }) => (
  <div 
    className={`px-6 py-4 border-b border-sophisticated-100 ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * カードボディコンポーネント
 */
Card.Body = ({ className = '', children, ...props }) => (
  <div 
    className={`px-6 py-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * カードフッターコンポーネント
 */
Card.Footer = ({ className = '', children, ...props }) => (
  <div 
    className={`px-6 py-4 border-t border-sophisticated-100 bg-neutral-elegant ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * カード画像コンポーネント
 */
Card.Image = ({ src, alt, className = '', aspectRatio = 'aspect-video', ...props }) => (
  <div className={`overflow-hidden ${aspectRatio}`}>
    <img 
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    />
  </div>
);

/**
 * カードタイトルコンポーネント
 */
Card.Title = ({ className = '', children, ...props }) => (
  <h3 
    className={`text-lg font-display font-semibold text-brand-primary mb-2 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

/**
 * カード説明コンポーネント
 */
Card.Description = ({ className = '', children, ...props }) => (
  <p 
    className={`text-sophisticated-500 leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </p>
);

export default Card;

