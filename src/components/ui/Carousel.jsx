import React, { useState, useEffect, useRef } from 'react';

/**
 * ShuShuRin カルーセルコンポーネント
 * 
 * @param {Array} items - 表示アイテムの配列
 * @param {boolean} autoPlay - 自動再生
 * @param {number} autoPlayInterval - 自動再生間隔（ミリ秒）
 * @param {boolean} showDots - ドット表示
 * @param {boolean} showArrows - 矢印表示
 * @param {boolean} infinite - 無限ループ
 * @param {Function} renderItem - アイテム描画関数
 * @param {string} className - 追加のCSSクラス
 */
const Carousel = ({ 
  items = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  infinite = true,
  renderItem,
  className = '',
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);

  // 自動再生
  useEffect(() => {
    if (autoPlay && items.length > 1) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, currentIndex]);

  // 次のスライド
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (infinite) {
        return prev === items.length - 1 ? 0 : prev + 1;
      }
      return Math.min(prev + 1, items.length - 1);
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // 前のスライド
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (infinite) {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
      return Math.max(prev - 1, 0);
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // 特定のスライドに移動
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // タッチイベント
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // 自動再生の一時停止
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // 自動再生の再開
  const resumeAutoPlay = () => {
    if (autoPlay && items.length > 1) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
  };

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-64 bg-sophisticated-50 rounded-2xl">
        <p className="text-sophisticated-500 font-elegant">表示するアイテムがありません</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden bg-white shadow-lg ${className}`}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      {...props}
    >
      {/* メインカルーセル */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0"
            >
              {renderItem ? renderItem(item, index) : (
                <div className="aspect-video bg-sophisticated-100 flex items-center justify-center">
                  <span className="text-sophisticated-500">Item {index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 矢印ナビゲーション */}
      {showArrows && items.length > 1 && (
        <>
          {/* 左矢印 */}
          <button
            type="button"
            onClick={prevSlide}
            disabled={!infinite && currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-sophisticated-200 flex items-center justify-center text-brand-primary hover:bg-white hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            aria-label="前のスライド"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 右矢印 */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={!infinite && currentIndex === items.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-sophisticated-200 flex items-center justify-center text-brand-primary hover:bg-white hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            aria-label="次のスライド"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* ドットインジケーター */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${
                index === currentIndex
                  ? 'bg-brand-accent w-6'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`スライド ${index + 1} に移動`}
            />
          ))}
        </div>
      )}

      {/* スライド番号表示 */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-elegant">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
};

export default Carousel;

