import React from 'react';
import CoordinateGallery from '../components/sections/CoordinateGallery';

const Coordinate = () => {
  return (
    <main className="min-h-screen bg-brand-secondary pt-20">{/* Header height offset */}
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