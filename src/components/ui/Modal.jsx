import React, { useEffect, useRef } from 'react';

/**
 * Shu Shu Rin モーダルコンポーネント
 * 
 * @param {boolean} isOpen - モーダル表示状態
 * @param {Function} onClose - モーダルを閉じる関数
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * @param {boolean} closeOnOverlay - オーバーレイクリックで閉じるか
 * @param {boolean} closeOnEsc - ESCキーで閉じるか
 * @param {string} className - 追加のCSSクラス
 * @param {ReactNode} children - モーダル内容
 */
const Modal = ({ 
  isOpen = false,
  onClose,
  size = 'md',
  closeOnOverlay = true,
  closeOnEsc = true,
  className = '',
  children,
  ...props
}) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // サイズ設定
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg', 
    xl: 'max-w-xl',
    full: 'max-w-full mx-4'
  };

  // ESCキー処理
  useEffect(() => {
    const handleEscape = (event) => {
      if (closeOnEsc && event.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // スクロール禁止
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEsc, onClose]);

  // オーバーレイクリック処理
  const handleOverlayClick = (event) => {
    if (closeOnOverlay && event.target === overlayRef.current) {
      onClose?.();
    }
  };

  // フォーカス管理
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      
      {/* モーダルコンテンツ */}
      <div
        ref={modalRef}
        className={`
          relative
          w-full
          ${sizeClasses[size]}
          bg-white
          rounded-2xl
          shadow-2xl
          border border-sophisticated-100
          overflow-hidden
          animate-slide-up
          focus:outline-none
          ${className}
        `}
        tabIndex={-1}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * モーダルヘッダーコンポーネント
 */
Modal.Header = ({ onClose, showCloseButton = true, className = '', children, ...props }) => (
  <div 
    className={`flex items-center justify-between px-6 py-4 border-b border-sophisticated-100 bg-brand-secondary ${className}`}
    {...props}
  >
    <div className="flex-1">
      {children}
    </div>
    {showCloseButton && (
      <button
        type="button"
        onClick={onClose}
        className="ml-4 p-2 text-sophisticated-500 hover:text-brand-primary hover:bg-sophisticated-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        aria-label="モーダルを閉じる"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    )}
  </div>
);

/**
 * モーダルタイトルコンポーネント
 */
Modal.Title = ({ className = '', children, ...props }) => (
  <h2 
    id="modal-title"
    className={`text-xl font-display font-semibold text-brand-primary ${className}`}
    {...props}
  >
    {children}
  </h2>
);

/**
 * モーダルボディコンポーネント
 */
Modal.Body = ({ className = '', children, ...props }) => (
  <div 
    className={`px-6 py-4 max-h-96 overflow-y-auto ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * モーダルフッターコンポーネント
 */
Modal.Footer = ({ className = '', children, ...props }) => (
  <div 
    className={`flex items-center justify-end gap-3 px-6 py-4 border-t border-sophisticated-100 bg-neutral-elegant ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Modal;

