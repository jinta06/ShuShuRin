import { useEffect, useRef } from 'react';
import { trackEngagement, trackScrollDepth } from '../utils/analytics';

/**
 * ページエンゲージメント追跡フック
 * @param {string} pageName - ページ名
 */
export const usePageTracking = (pageName) => {
  const pageStartTime = useRef(Date.now());
  const scrollThresholds = useRef(new Set());

  useEffect(() => {
    // ページ読み込み時の時刻を記録
    pageStartTime.current = Date.now();
    scrollThresholds.current.clear();

    // スクロール深度追跡
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // 25%, 50%, 75%, 100%のマイルストーンを追跡
      const milestones = [25, 50, 75, 100];
      milestones.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollThresholds.current.has(threshold)) {
          scrollThresholds.current.add(threshold);
          trackScrollDepth(threshold, pageName);
        }
      });
    };

    // ページアンロード時に滞在時間を送信
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      trackEngagement(pageName, timeSpent);
    };

    // ページ非表示時（タブ切り替え等）に滞在時間を送信
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
        trackEngagement(pageName, timeSpent);
      } else {
        // ページが再表示された時は開始時刻をリセット
        pageStartTime.current = Date.now();
      }
    };

    // イベントリスナーを設定
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pageName]);

  // 30秒ごとに滞在時間を送信（セッション継続の把握）
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent >= 30) {
        trackEngagement(pageName, timeSpent);
        pageStartTime.current = Date.now(); // リセット
      }
    }, 30000); // 30秒間隔

    return () => clearInterval(interval);
  }, [pageName]);
};
