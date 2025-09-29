import React, { useEffect } from 'react';

const SEOHead = ({ 
  title = 'Shu Shu Rin | 年齢を脱ぐ、冒険を着る',
  description = '年齢を脱ぐ、冒険を着る。大阪狭山市のアパレルセレクトショップ Shu Shu Rin（シュシュリン）。姉妹で営む小さなセレクトショップで、あなたらしいスタイルを見つけませんか。',
  keywords = 'Shu Shu Rin, シュシュリン, アパレル, セレクトショップ, 大阪狭山市, 大阪, コーディネート相談, ファッション, 年齢を脱ぐ冒険を着る, 姉妹ショップ',
  image = '/logo512.png',
  url = 'https://www.shushurin.com',
  type = 'website',
  structuredData = null
}) => {
  useEffect(() => {
    // 基本メタタグの設定
    document.title = title;
    
    // 既存のメタタグを更新または新規作成
    const updateOrCreateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 基本メタタグ
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);
    
    // Open Graph
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:image', `https://www.shushurin.com${image}`, true);
    updateOrCreateMeta('og:url', url, true);
    updateOrCreateMeta('og:type', type, true);
    updateOrCreateMeta('og:site_name', 'Shu Shu Rin', true);
    updateOrCreateMeta('og:locale', 'ja_JP', true);
    
    // Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', `https://www.shushurin.com${image}`);
    
    // 構造化データ
    if (structuredData) {
      // 既存の構造化データスクリプトを削除
      const existingScript = document.querySelector('script[data-seo-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // 新しい構造化データを追加
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // このコンポーネントは何もレンダリングしない
};

export default SEOHead;
