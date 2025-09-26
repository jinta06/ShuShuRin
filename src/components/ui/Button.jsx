import React from 'react';

/**
 * Shu Shu Rin ボタンコンポーネント
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'elegant' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - 無効状態
 * @param {boolean} fullWidth - 全幅表示
 * @param {string} className - 追加のCSSクラス
 * @param {Function} onClick - クリックハンドラ
 * @param {ReactNode} children - ボタン内容
 */
const Button = ({ 
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  children,
  ...props
}) => {
  // サイズ設定
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  };

  // バリアント設定
  const variantClasses = {
    primary: `
      bg-brand-primary text-white 
      hover:bg-primary-900 hover:shadow-lg
      focus:ring-2 focus:ring-brand-primary/30
      active:bg-primary-900 active:scale-95
      disabled:bg-neutral-300 disabled:text-neutral-500
    `,
    secondary: `
      bg-brand-accent text-brand-primary 
      hover:bg-accent-900 hover:text-white hover:shadow-lg
      focus:ring-2 focus:ring-brand-accent/30
      active:bg-accent-900 active:scale-95
      disabled:bg-neutral-200 disabled:text-neutral-400
    `,
    elegant: `
      bg-brand-secondary text-brand-primary border-2 border-brand-accent
      hover:bg-brand-accent hover:text-white hover:shadow-lg
      focus:ring-2 focus:ring-brand-accent/30
      active:bg-brand-accent active:scale-95
      disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-300
    `,
    outline: `
      bg-transparent text-brand-primary border-2 border-brand-primary
      hover:bg-brand-primary hover:text-white hover:shadow-lg
      focus:ring-2 focus:ring-brand-primary/30
      active:bg-brand-primary active:scale-95
      disabled:text-neutral-400 disabled:border-neutral-300
    `
  };

  // 基本クラス
  const baseClasses = `
    inline-flex items-center justify-center
    font-elegant font-medium
    rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none
    cursor-pointer
    select-none
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed' : ''}
  `;

  // 最終的なクラス名
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

