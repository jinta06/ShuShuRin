import React, { useEffect, useState, useRef } from 'react';
// Instagram画像をインポート
import instagramImage1 from '../../assets/images/instagram/instagram_newstyle.webp';
import instagramImage2 from '../../assets/images/instagram/instagram_sister.webp';
import instagramImage3 from '../../assets/images/instagram/instagram_interior.webp';
import instagramImage4 from '../../assets/images/instagram/instagram_stylingpoint_02.webp';

const InstagramSection = () => {
  // 4つの投稿データ（画像とキャプション）
  const posts = [
    {
      id: 1,
        image: instagramImage1, // 投稿の画像URL
      caption: '新作コーディネートをご紹介✨',
      instagramUrl: 'https://www.instagram.com/p/DNqDG_dT2YL/?img_index=1' // Instagram投稿のURL
    },
    {
      id: 2,
      image: instagramImage2, // 投稿の画像URL（同じ画像を使用）
      caption: '姉妹で営んでいます！',
      instagramUrl: 'https://www.instagram.com/p/DEuVcecJgxa/?img_index=1' // Instagram投稿のURL
    },
    {
      id: 3,
      image: instagramImage3, // 投稿の画像URL（同じ画像を使用）
      caption: '店内の様子をお届け',
      instagramUrl: 'https://www.instagram.com/p/C7r_ILkBL5t/?img_index=1' // Instagram投稿のURL
    },
    {
      id: 4,
      image: instagramImage4, // 投稿の画像URL（同じ画像を使用）
      caption: 'スタイリングのポイントをご紹介',
      instagramUrl: 'https://www.instagram.com/p/DOGU92-k30-/?img_index=1' // Instagram投稿のURL
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(posts.length * 15); // 中央のセットから開始
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null); // 'horizontal' | 'vertical' | null
  const [isAutoSliding, setIsAutoSliding] = useState(false); // 自動スライド状態管理
  const [isUserInteracting, setIsUserInteracting] = useState(false); // ユーザー操作状態管理
  const sliderRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  // Safari専用transition管理関数
  const applySafariTransition = (enable) => {
    if (sliderRef.current) {
      if (enable) {
        sliderRef.current.style.transition = 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sliderRef.current.style.webkitTransition = 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      } else {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.webkitTransition = 'none';
      }
    }
  };

  // 無限ループ用のデータ配列を作成（完全シームレスループ用）
  const getExtendedPosts = () => {
    // 30セット複製してより長いシームレスループを実現
    const repeats = 30;
    const extended = [];
    for (let i = 0; i < repeats; i++) {
      extended.push(...posts);
    }
    return extended;
  };

  // スワイプ処理（Safari最適化 - 方向判定付き）
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    setDragStart(e.touches[0].clientX);
    setDragStartY(e.touches[0].clientY);
    setSwipeDirection(null);
    setDragOffset(0);
    
    // 自動スライドタイマーをクリア
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = Math.abs(currentX - dragStart);
    const diffY = Math.abs(currentY - dragStartY);
    
    // 初回移動で方向を判定
    if (!swipeDirection && (diffX > 5 || diffY > 5)) {
      if (diffX > diffY) {
        setSwipeDirection('horizontal');
      } else {
        setSwipeDirection('vertical');
      }
    }
    
    // 横スワイプの場合のみ処理
    if (swipeDirection === 'horizontal') {
      const diff = dragStart - currentX;
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // 横スワイプの場合のみスライド変更
    if (swipeDirection === 'horizontal') {
      const threshold = 25; // さらに感度を向上（30→25）
      const velocity = Math.abs(dragOffset) / 100; // 速度も考慮
      
      if (Math.abs(dragOffset) > threshold || velocity > 0.3) {
        if (dragOffset > 0) {
          // 右にスワイプ（次のスライド）
          setCurrentSlide(prev => prev + 1);
        } else {
          // 左にスワイプ（前のスライド）
          setCurrentSlide(prev => prev - 1);
        }
      }
    }
    
    setDragOffset(0);
    setSwipeDirection(null);
    
    // ユーザー操作終了後、少し遅延して自動スライドを再開
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 500);
  };

  // 自動スライド機能（Safari最適化版）
  useEffect(() => {
    if (isDragging || isUserInteracting || isAutoSliding) {
      return;
    }

    autoSlideTimerRef.current = setInterval(() => {
      if (!isDragging && !isUserInteracting && !isAutoSliding) {
        setIsAutoSliding(true);
        setCurrentSlide((prev) => prev + 1);
        
        // transition完了後にisAutoSlidingをリセット
        setTimeout(() => {
          setIsAutoSliding(false);
        }, 600);
      }
    }, 4000); // 4秒ごとにスライド

    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = null;
      }
    };
  }, [isDragging, isUserInteracting, isAutoSliding]);

  // Safari最適化されたシームレスリセット処理
  useEffect(() => {
    const totalSlides = posts.length * 30; // 30セット分
    const midPoint = posts.length * 15; // 中央点
    const bufferZone = posts.length * 3; // バッファゾーン
    
    // 終端または始端のバッファゾーンに入った時に中央にリセット
    if (currentSlide >= totalSlides - bufferZone || currentSlide < bufferZone) {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          // 必ずこの順序で実行：false → requestAnimationFrame → true
          applySafariTransition(false);
          setCurrentSlide(midPoint);
          
          requestAnimationFrame(() => {
            applySafariTransition(true);
          });
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [currentSlide, posts.length]);

  const handleInstagramProfile = () => {
    window.open('https://www.instagram.com/shu.shu.rin/', '_blank');
  };

  const extendedPosts = getExtendedPosts();

  // Safari向け初期化処理
  useEffect(() => {
    if (sliderRef.current) {
      // 初期状態でtransitionを有効化
      applySafariTransition(true);
    }
  }, []);

  // passive: false でイベントリスナーを設定（Safari向け）
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleTouchStartPassive = (e) => {
      if (swipeDirection === 'horizontal') {
        e.preventDefault();
      }
    };

    const handleTouchMovePassive = (e) => {
      if (swipeDirection === 'horizontal') {
        e.preventDefault();
      }
    };

    // passive: false でイベントリスナーを追加
    slider.addEventListener('touchstart', handleTouchStartPassive, { passive: false });
    slider.addEventListener('touchmove', handleTouchMovePassive, { passive: false });

    return () => {
      slider.removeEventListener('touchstart', handleTouchStartPassive);
      slider.removeEventListener('touchmove', handleTouchMovePassive);
    };
  }, [swipeDirection]);

  return (
    <section className="py-8 bg-neutral-elegant" style={{ touchAction: 'pan-y' }}>
      <div className="w-full" style={{ touchAction: 'pan-y' }}>
        {/* セクションヘッダー */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl font-display text-brand-primary mb-3 leading-relaxed">
            Instagram
          </h2>
          <p className="text-sophisticated-500 text-sm leading-relaxed">
            最新のコーディネートやスタイリング情報を<br />
            Instagramでご覧いただけます
          </p>
        </div>

        {/* スライドカルーセル（Safari最適化版 - translate3d対応） */}
        <div className="relative overflow-hidden" style={{ touchAction: 'pan-y' }}>
          <div 
            ref={sliderRef}
            className={`flex ${isDragging && swipeDirection === 'horizontal' ? '' : !isAutoSliding ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{
              transform: `translate3d(calc(-${currentSlide * 60}% + 20% + ${isDragging && swipeDirection === 'horizontal' ? -dragOffset : 0}px), 0, 0)`,
              willChange: 'transform',
              touchAction: 'pan-x',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTransform: `translate3d(calc(-${currentSlide * 60}% + 20% + ${isDragging && swipeDirection === 'horizontal' ? -dragOffset : 0}px), 0, 0)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {extendedPosts.map((post, index) => {
              const isCenter = index === currentSlide;
              const isLeft = index === currentSlide - 1;
              const isRight = index === currentSlide + 1;
              
              // どのカードを表示するかを決定
              const displayNumber = (index % posts.length) + 1;

              return (
              <div
                key={`${post.id}-${index}`}
                  className="flex-shrink-0 w-3/5 px-2"
              >
                  {/* カード */}
                  <div 
                    className={`relative bg-white shadow-lg border border-sophisticated-100 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
                      isCenter ? 'scale-100 opacity-100' : 'scale-100 opacity-70'
                    }`}
                    onClick={() => {
                      if (!isDragging && !isUserInteracting && Math.abs(dragOffset) < 10 && swipeDirection !== 'horizontal') {
                        window.open(post.instagramUrl, '_blank');
                      }
                    }}
                    onPointerDown={(e) => {
                      // ポインターイベントでも対応
                      e.currentTarget.style.setProperty('--touch-active', '1');
                    }}
                    onPointerUp={(e) => {
                      e.currentTarget.style.removeProperty('--touch-active');
                    }}
                    onPointerLeave={(e) => {
                      e.currentTarget.style.removeProperty('--touch-active');
                    }}
                  >
                    {/* Instagram画像 */}
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.caption}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => {
                          // 画像読み込みエラーの場合はプレースホルダーを表示
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* プレースホルダー（画像読み込みエラー時） */}
                      <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center hidden">
                        <div className="text-center text-sophisticated-400">
                          <div className="w-12 h-12 mx-auto mb-2 bg-sophisticated-200 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                            </svg>
                          </div>
                          <p className="text-xs">Instagram Post</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Instagramアイコンオーバーレイ */}
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.40-1.439-1.40z"/>
                      </svg>
                    </div>
                    
                    {/* キャプション */}
                    <div className="p-3 bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 left-0 right-0">
                      <p className="text-white text-sm font-medium drop-shadow-lg">
                        {post.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instagram フォローセクション */}
        <div className="text-center mt-8 px-4">
          <div className="max-w-sm mx-auto">
            {/* 最新情報をチェック */}
            {/* <h3 className="text-lg font-display text-brand-primary mb-2 leading-relaxed">
              最新情報をチェック
            </h3> */}
            
            {/* Instagram アカウント情報 */}
            <div className="mb-6">
              <p className="text-sophisticated-500 text-sm mb-2">
                Instagram: @shu.shu.rin
              </p>
              <p className="text-sophisticated-500 text-xs leading-relaxed">
                最新のスタイリング情報をお届けしています
              </p>
            </div>
            
            {/* フォローボタン */}
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
            onClick={handleInstagramProfile}
          >
              Instagram をフォローする
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
