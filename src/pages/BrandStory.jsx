import React from 'react';
import { HeartIcon, SparklesIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const BrandStory = () => {
  return (
    <main className="min-h-screen bg-brand-secondary">
      {/* ヒーローセクション */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
            Brand Story
          </h1>
          <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
            姉妹で営む小さなセレクトショップ<br />
            ShuShuRinの始まりと想いをお伝えします
          </p>
          <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
        </div>
      </section>

      {/* ショップの始まり */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <HeartIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              ショップの始まり
            </h2>
          </div>
          
          <div className="bg-accent-50 rounded-3xl p-8 mb-8">
            <p className="text-sophisticated-500 text-sm leading-relaxed text-center mb-6">
              「年齢を脱ぐ、冒険を着る」<br />
              この想いから、ShuShuRinは生まれました。
            </p>
            <div className="space-y-4">
              <p className="text-sophisticated-500 text-sm leading-relaxed">
                姉妹ふたりで始めた小さなセレクトショップ。きっかけは、「もう年だから」という言葉で好きな服を諦めてしまう方々との出会いでした。
              </p>
              <p className="text-sophisticated-500 text-sm leading-relaxed">
                年齢や流行にとらわれず、本当に着たいと思える一着との出会いを大切にしたい。そんな想いで、心に寄り添うスタイリングをご提案しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 姉妹デザイナー紹介 */}
      <section className="py-12 bg-gradient-to-b from-white to-brand-secondary">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <UserGroupIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              姉妹デザイナー紹介
            </h2>
          </div>

          <div className="space-y-6">
            {/* 姉 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-sophisticated-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-sophisticated-400 text-xs">姉の写真</span>
                </div>
                <h3 className="text-lg font-display text-brand-primary mb-2">
                  姉 - スタイリング担当
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  お客様一人ひとりのライフスタイルに寄り添ったスタイリングを得意としています。
                </p>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  「似合う」だけではなく、「着ていて心地よい」スタイルをご提案いたします。
                </p>
              </div>
            </div>

            {/* 妹 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-sophisticated-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-sophisticated-400 text-xs">妹の写真</span>
                </div>
                <h3 className="text-lg font-display text-brand-primary mb-2">
                  妹 - セレクト担当
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  素材やディテールにこだわったアイテムの買い付けを担当しています。
                </p>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  長く愛用していただける、特別な一着との出会いをお手伝いします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セレクト基準・こだわり */}
      <section className="py-12 bg-brand-secondary">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <StarIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              セレクト基準・こだわり
            </h2>
          </div>

          <div className="space-y-6">
            {/* 品質へのこだわり */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-display text-brand-primary mb-4 text-center">
                品質へのこだわり
              </h3>
              <div className="space-y-3">
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  素材の質感、縫製の丁寧さ、デザインの美しさ。すべてに妥協せず、長く愛用していただけるアイテムのみを厳選しています。
                </p>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  流行に左右されない、時代を超えて愛される普遍的な美しさを大切にしています。
                </p>
              </div>
            </div>

            {/* お客様との向き合い方 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-display text-brand-primary mb-4 text-center">
                お客様との向き合い方
              </h3>
              <div className="space-y-3">
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  一人ひとりの個性や好み、ライフスタイルを大切にしながら、新しい自分との出会いをサポートいたします。
                </p>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  「これを着たい」と心が動く瞬間を、一緒に見つけられたら何よりも嬉しいです。
                </p>
              </div>
            </div>

            {/* セレクトのコンセプト */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-display text-brand-primary mb-4 text-center">
                セレクトのコンセプト
              </h3>
              <div className="space-y-3">
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  カジュアルからエレガントまで、さまざまなシーンに対応できる幅広いアイテムをご用意しています。
                </p>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  日常の中に特別を感じられる、そんな服との出会いをお手伝いします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗写真セクション */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <SparklesIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              店舗の雰囲気
            </h2>
          </div>

          <div className="space-y-6">
            {/* 店舗外観 */}
            <div className="bg-sophisticated-50 rounded-3xl p-6">
              <div className="aspect-video bg-sophisticated-100 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-sophisticated-400 text-sm">店舗外観写真</span>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-2 text-center">
                温かみのある外観
              </h3>
              <p className="text-sophisticated-500 text-sm leading-relaxed text-center">
                小さな路地にひっそりと佇む、アットホームな雰囲気のお店です。
              </p>
            </div>

            {/* 店舗内装 */}
            <div className="bg-sophisticated-50 rounded-3xl p-6">
              <div className="aspect-video bg-sophisticated-100 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-sophisticated-400 text-sm">店舗内装写真</span>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-2 text-center">
                心地よい空間
              </h3>
              <p className="text-sophisticated-500 text-sm leading-relaxed text-center">
                ゆったりとお買い物していただける、上品で落ち着いた空間です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトCTA */}
      <section className="py-12 bg-gradient-to-br from-accent-50 to-sophisticated-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <HeartIcon className="w-8 h-8 text-brand-accent" />
            </div>
            
            <h3 className="text-xl font-display text-brand-primary mb-4">
              お気軽にご相談ください
            </h3>
            
            <p className="text-sophisticated-500 text-sm leading-relaxed mb-6">
              スタイリングのご相談や来店予約など<br />
              InstagramのDMからお声がけください
            </p>
            
            <a
              href="https://instagram.com/shushurin_select"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full bg-brand-accent text-white 
                px-8 py-3 rounded-full 
                font-display text-sm font-medium
                shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                transition-all duration-200
                focus:ring-4 focus:ring-brand-accent/30
                focus:outline-none
                inline-flex items-center justify-center gap-2
              "
              style={{ minHeight: '44px' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
              Instagram DM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandStory;
