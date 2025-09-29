// GA4イベント追跡ユーティリティ
// 測定ID: G-VMWSZCBJMF

/**
 * GA4イベント送信ユーティリティ
 * @param {string} eventName - イベント名
 * @param {Object} parameters - イベントパラメータ
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'general',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
    
    // 開発環境でのデバッグログ
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4 Event tracked:', eventName, parameters);
    }
  }
};

/**
 * ページビュー追跡
 * @param {string} pagePath - ページパス
 * @param {string} pageTitle - ページタイトル
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-VMWSZCBJMF', {
      page_path: pagePath,
      page_title: pageTitle
    });
    
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4 Page view tracked:', pagePath, pageTitle);
    }
  }
};

/**
 * Instagram DM問い合わせ追跡（最重要コンバージョン）
 * @param {string} source - 発生源（header, footer, contact等）
 */
export const trackInstagramDM = (source = 'unknown') => {
  trackEvent('instagram_dm_click', {
    category: 'conversion',
    label: source,
    value: 1,
    // カスタムパラメータ
    button_location: source,
    conversion_type: 'instagram_inquiry'
  });
};

/**
 * コーディネート相談追跡
 * @param {string} source - 発生源
 */
export const trackConsultationInquiry = (source = 'unknown') => {
  trackEvent('consultation_inquiry', {
    category: 'conversion',
    label: 'coordinate_consultation',
    value: 1,
    source: source
  });
};

/**
 * 来店予約意向追跡
 */
export const trackStoreVisitIntent = () => {
  trackEvent('store_visit_intent', {
    category: 'engagement',
    label: 'access_page_view',
    value: 1
  });
};

/**
 * ページ滞在時間追跡
 * @param {string} pageName - ページ名
 * @param {number} timeSpent - 滞在時間（秒）
 */
export const trackEngagement = (pageName, timeSpent) => {
  // 30秒以上の滞在のみ記録
  if (timeSpent >= 30) {
    trackEvent('page_engagement', {
      category: 'engagement',
      label: pageName,
      value: timeSpent,
      engagement_time: timeSpent
    });
  }
};

/**
 * ナビゲーション使用追跡
 * @param {string} menuItem - クリックされたメニュー項目
 * @param {string} currentPage - 現在のページ
 */
export const trackNavigation = (menuItem, currentPage = '') => {
  trackEvent('navigation_click', {
    category: 'navigation',
    label: menuItem,
    current_page: currentPage
  });
};

/**
 * 画像表示追跡（ギャラリー等）
 * @param {string} imageType - 画像タイプ（coordinate, brand_story等）
 * @param {string} imageName - 画像名
 */
export const trackImageView = (imageType, imageName = '') => {
  trackEvent('image_view', {
    category: 'engagement',
    label: imageType,
    image_name: imageName
  });
};

/**
 * コンセプト詳細閲覧追跡
 * @param {number} conceptId - コンセプトID (1-3)
 * @param {string} conceptName - コンセプト名
 */
export const trackConceptView = (conceptId, conceptName) => {
  trackEvent('concept_detail_view', {
    category: 'content_engagement',
    label: conceptName,
    concept_id: conceptId
  });
};

/**
 * 外部リンククリック追跡
 * @param {string} linkType - リンクタイプ（instagram, external等）
 * @param {string} destination - 遷移先
 */
export const trackExternalLink = (linkType, destination) => {
  trackEvent('external_link_click', {
    category: 'outbound',
    label: linkType,
    destination: destination
  });
};

/**
 * スクロール深度追跡
 * @param {number} percentage - スクロール率（25, 50, 75, 100）
 * @param {string} pageName - ページ名
 */
export const trackScrollDepth = (percentage, pageName) => {
  trackEvent('scroll_depth', {
    category: 'engagement',
    label: `${percentage}%`,
    page_name: pageName,
    scroll_percentage: percentage
  });
};

/**
 * エラー追跡
 * @param {string} errorType - エラータイプ
 * @param {string} errorMessage - エラーメッセージ
 */
export const trackError = (errorType, errorMessage) => {
  trackEvent('error_occurred', {
    category: 'error',
    label: errorType,
    error_message: errorMessage
  });
};

/**
 * 検索意図追跡（URLパラメータから判定）
 */
export const trackSearchIntent = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    
    if (utm_source || utm_medium) {
      trackEvent('search_traffic', {
        category: 'acquisition',
        label: utm_source || 'unknown',
        utm_source: utm_source,
        utm_medium: utm_medium,
        utm_campaign: utm_campaign
      });
    }
  }
};

/**
 * ユーザー属性設定
 * @param {Object} properties - ユーザー属性
 */
export const setUserProperties = (properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-VMWSZCBJMF', {
      user_properties: properties
    });
  }
};
