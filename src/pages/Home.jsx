import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ConceptSection from '../components/sections/ConceptSection';
import ImageGallerySection from '../components/sections/ImageGallerySection';
import InstagramSection from '../components/sections/InstagramSection';
import AccessInfo from '../components/sections/AccessInfo';
import SEOHead from '../components/common/SEOHead';
import { usePageTracking } from '../hooks/usePageTracking';

const Home = () => {
  // ページエンゲージメント追跡
  usePageTracking('home');

  useEffect(() => {
    // ページタイトル設定（SEOHeadで管理するためコメントアウト）
    // document.title = 'Shu Shu Rin | 年齢を脱ぐ、冒険を着る';
    
    // URLのハッシュがある場合、該当セクションにスクロール（ヘッダー高さを考慮）
    if (window.location.hash === '#access') {
      setTimeout(() => {
        const accessSection = document.getElementById('access');
        if (accessSection) {
          const elementPosition = accessSection.offsetTop;
          
          console.log('Access section offsetTop (Home.jsx):', accessSection.offsetTop);
          console.log('Calculated scroll position (Home.jsx):', elementPosition);
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 600); // DOM要素が確実に準備されるよう少し長めの遅延
    }
  }, []);

  // ホームページ専用の構造化データ
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Shu Shu Rin',
    'alternateName': 'シュシュリン',
    'url': 'https://www.shushurin.com',
    'description': '年齢を脱ぐ、冒険を着る。大阪狭山市のアパレルセレクトショップ',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://shushurin.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Shu Shu Rin',
      'alternateName': 'シュシュリン'
    }
  };

  return (
    <main>
      {/* SEO設定 */}
      <SEOHead 
        title="Shu Shu Rin | 年齢を脱ぐ、冒険を着る"
        description="年齢を脱ぐ、冒険を着る。大阪狭山市のアパレルセレクトショップ Shu Shu Rin（シュシュリン）。姉妹で営む小さなセレクトショップで、あなたらしいスタイルを見つけませんか。コーディネート相談も承ります。"
        keywords="Shu Shu Rin, シュシュリン, アパレル, セレクトショップ, 大阪狭山市, 大阪, コーディネート相談, ファッション, 年齢を脱ぐ冒険を着る, 姉妹ショップ, 服選び, スタイリング"
        url="https://www.shushurin.com"
        structuredData={homeStructuredData}
      />

      {/* Hero Section - Phase 3 Issue #5 */}
      <Hero />

      {/* Concept Section - Phase 3 Issue #6 */}
      <ConceptSection />

      {/* Image Gallery Section */}
      <ImageGallerySection />

      {/* Instagram Section - Phase 3 Issue #7 */}
      <InstagramSection />

      {/* Access Section - Phase 3 Issue #7.5 */}
      <AccessInfo />
    </main>
  );
};

export default Home;
