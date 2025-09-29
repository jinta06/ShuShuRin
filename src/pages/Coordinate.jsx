import React from 'react';
import CoordinateGallery from '../components/sections/CoordinateGallery';
import SEOHead from '../components/common/SEOHead';

const Coordinate = () => {
  // コーディネートページ専用の構造化データ
  const coordinateStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': 'コーディネート | Shu Shu Rin',
    'description': 'Shu Shu Rin（シュシュリン）のスタイリストが提案するコーディネート写真ギャラリー。あなただけのスタイルを見つけてください。',
    'url': 'https://www.shushurin.com/coordinate',
    'publisher': {
      '@type': 'Organization',
      'name': 'Shu Shu Rin',
      'alternateName': 'シュシュリン'
    }
  };

  return (
    <main className="min-h-screen bg-brand-secondary pt-20">
      {/* SEO設定 */}
      <SEOHead 
        title="コーディネート | Shu Shu Rin（シュシュリン）"
        description="Shu Shu Rin（シュシュリン）のスタイリストが提案するコーディネート写真ギャラリー。お気に入りのアイテムで、あなただけのスタイルを見つけてください。大阪狭山市のアパレルセレクトショップ。"
        keywords="コーディネート, スタイリング, ファッション, Shu Shu Rin, シュシュリン, アパレル, セレクトショップ, 大阪狭山市, 服装提案, おしゃれ, コーデ"
        url="https://www.shushurin.com/coordinate"
        structuredData={coordinateStructuredData}
      />
        {/* ヒーローセクション */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
              Shop the Look
            </h1>
            <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
              Shu Shu Rinのスタイリストが提案する商品コーディネート。<br />
              お気に入りのアイテムで、あなただけのスタイルを見つけてください。
            </p>
            <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
          </div>
        </section>

        {/* ギャラリーセクション */}
        <section className="py-8">
          <CoordinateGallery />
        </section>

    </main>
  );
};

export default Coordinate;