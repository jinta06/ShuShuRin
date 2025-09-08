import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ConceptSection from '../components/sections/ConceptSection';
import InstagramSection from '../components/sections/InstagramSection';
import AccessInfo from '../components/sections/AccessInfo';

const Home = () => {
  useEffect(() => {
    // ページタイトル設定
    document.title = 'ShuShuRin | 年齢を脱ぐ、冒険を着る';
    
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

  return (
    <main>
      {/* Hero Section - Phase 3 Issue #5 */}
      <Hero />

      {/* Concept Section - Phase 3 Issue #6 */}
      <ConceptSection />

      {/* Instagram Section - Phase 3 Issue #7 */}
      <InstagramSection />

      {/* Access Section - Phase 3 Issue #7.5 */}
      <AccessInfo />
    </main>
  );
};

export default Home;
