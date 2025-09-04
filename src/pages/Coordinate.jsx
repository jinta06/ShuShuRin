import React from 'react';
import CoordinateGallery from '../components/sections/CoordinateGallery';

const Coordinate = () => {
  return (
    <main className="min-h-screen bg-brand-secondary pt-20">{/* Header height offset */}
        {/* ヒーローセクション */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
              Coordinate
            </h1>
            <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
              ShuShuRinが提案する、あなたらしいスタイルのコーディネート。<br />
              季節やシーンに合わせて、新しい自分との出会いを楽しんでください。
            </p>
            <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
          </div>
        </section>

        {/* ギャラリーセクション */}
        <section className="py-8">
          <CoordinateGallery />
        </section>

        {/* コンセプトセクション - スマホ専用 */}
        <section className="py-12 bg-white">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-2xl font-display text-brand-primary mb-8">
              コーディネートに込めた想い
            </h2>
            <div className="space-y-6">
              <div className="bg-accent-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-display text-brand-primary mb-3">
                  カジュアル
                </h3>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  日常に寄り添う、自然体で心地よいスタイル。頑張りすぎない魅力を大切にしています。
                </p>
              </div>

              <div className="bg-sophisticated-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-sophisticated-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-display text-brand-primary mb-3">
                  エレガント
                </h3>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  洗練された大人の上品さ。時代を超えて愛される、クラシカルな美しさを表現しています。
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-display text-brand-primary mb-3">
                  季節
                </h3>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  四季の移ろいとともに。それぞれの季節の魅力を引き出すコーディネートをご提案します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* コンサルティング案内セクション - スマホ専用 */}
        <section className="py-12 bg-gradient-to-br from-accent-50 to-sophisticated-50">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              コーディネート相談
            </h2>
            <p className="text-base text-sophisticated-500 leading-relaxed mb-8">
              「どのスタイルが私に似合うかな？」「今日のお出かけにはどれがいい？」<br />
              そんなご質問やご相談も、お気軽にお声がけください。
            </p>
            
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-3">
                Instagram DM
              </h3>
              <p className="text-sophisticated-500 text-sm leading-relaxed mb-6">
                スタイリングのご相談は、InstagramのDMからお気軽にどうぞ。姉妹ふたりで丁寧にお答えします。
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
                style={{ minHeight: '44px' }} // タッチターゲット最小サイズ
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
                相談してみる
              </a>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Coordinate;
