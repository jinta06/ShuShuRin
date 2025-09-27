import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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
      image: instagramImage1,
      caption: '新作コーディネートをご紹介✨',
      instagramUrl: 'https://www.instagram.com/p/DNqDG_dT2YL/?img_index=1'
    },
    {
      id: 2,
      image: instagramImage2,
      caption: '姉妹で営んでいます！',
      instagramUrl: 'https://www.instagram.com/p/DEuVcecJgxa/?img_index=1'
    },
    {
      id: 3,
      image: instagramImage3,
      caption: '店内の様子をお届け',
      instagramUrl: 'https://www.instagram.com/p/C7r_ILkBL5t/?img_index=1'
    },
    {
      id: 4,
      image: instagramImage4,
      caption: 'スタイリングのポイントをご紹介',
      instagramUrl: 'https://www.instagram.com/p/DOGU92-k30-/?img_index=1'
    }
  ];

  const swiperRef = useRef(null);

  const handleInstagramProfile = () => {
    window.open('https://www.instagram.com/shu.shu.rin/', '_blank');
  };

  return (
    <section className="py-8 bg-neutral-elegant">
      <div className="w-full">
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

        {/* Swiperカルーセル（スマホ最適化） */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            centeredSlides={true}
            slidesPerView={2.2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            touchRatio={1.2}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.8,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2.0,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
            }}
            className="w-full"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post.id} className="!h-auto">
                {({ isActive }) => (
                  <div>
                    <div 
                      className={`relative bg-white shadow-lg border border-sophisticated-100 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl ${
                        isActive 
                          ? 'scale-100 opacity-100 hover:scale-105' 
                          : 'scale-90 opacity-60 hover:scale-95 grayscale-[30%]'
                      }`}
                      onClick={() => window.open(post.instagramUrl, '_blank')}
                    >
                      {/* Instagram画像 */}
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.caption}
                          className="w-full h-full object-cover transition-transform duration-300"
                          style={{
                            imageRendering: 'auto',
                            WebkitImageRendering: 'auto',
                            MozImageRendering: 'auto',
                            msImageRendering: 'auto'
                          }}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* プレースホルダー（画像読み込みエラー時） */}
                        <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center hidden">
                          <div className="text-center text-sophisticated-400">
                            <div className="w-12 h-12 mx-auto mb-2 bg-sophisticated-200 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.40-1.439-1.40z"/>
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
                        <p className="text-white text-sm font-medium drop-shadow-lg antialiased">
                          {post.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Instagram フォローセクション */}
        <div className="text-center mt-8 px-4">
          <div className="max-w-sm mx-auto">
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