# GA4（Google Analytics 4）実装ガイド

**Shu Shu Rinサイト用のGoogle Analytics 4実装方法**

---

## 🎯 実装の目的

- **ユーザー行動分析**: サイト訪問者の動線把握
- **コンバージョン追跡**: Instagram DM問い合わせ・来店予約の効果測定
- **SEO効果測定**: 検索エンジンからの流入分析
- **ページパフォーマンス**: 読み込み速度と離脱率の監視

---

## 📋 実装手順

### 1. Google Analytics 4アカウントの作成

#### 1-1. Google Analyticsにアクセス
- [Google Analytics](https://analytics.google.com/) にアクセス
- Googleアカウントでログイン

#### 1-2. プロパティ作成
```
プロパティ名: Shu Shu Rin
国/地域: 日本
通貨: 日本円（JPY）
業界: アパレル・アクセサリー
```

#### 1-3. データストリーム設定
```
プラットフォーム: ウェブ
ウェブサイトのURL: https://www.shushurin.com
ストリーム名: Shu Shu Rin Website
```

#### 1-4. 測定IDを取得
- **測定ID**: `G-XXXXXXXXX` 形式
- この測定IDをメモしておく

---

### 2. サイトへの実装

#### 2-1. 環境変数の設定

**.env ファイル作成**（プロジェクトルート）
```bash
# GA4測定ID
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXX
```

#### 2-2. GTMもしくは直接実装

**方法A: Google Tag Manager（推奨）**
```html
<!-- Google Tag Manager - public/index.html の <head> 内 -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Google Tag Manager (noscript) - <body> 直後 -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

**方法B: 直接実装（現在の方法）**
```html
<!-- 既に public/index.html に実装済み -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VMWSZCBJMF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VMWSZCBJMF');
</script>
```

---

### 3. 重要イベントの追跡設定

#### 3-1. GAユーティリティ関数の作成

**src/utils/analytics.js**
```javascript
// GA4イベント送信ユーティリティ
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'general',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// ページビュー追跡
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Instagram DM問い合わせ追跡
export const trackInstagramDM = (source = 'unknown') => {
  trackEvent('instagram_dm_click', {
    category: 'engagement',
    label: source,
    value: 1
  });
};

// コーディネート相談追跡
export const trackConsultationInquiry = () => {
  trackEvent('consultation_inquiry', {
    category: 'conversion',
    label: 'coordinate_consultation',
    value: 1
  });
};

// ページ滞在時間追跡
export const trackEngagement = (pageName, timeSpent) => {
  trackEvent('page_engagement', {
    category: 'engagement',
    label: pageName,
    value: timeSpent
  });
};
```

#### 3-2. React Routerとの連携

**src/App.js でページビュー追跡**
```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時にGA4に送信
    trackPageView(location.pathname, document.title);
  }, [location]);

  // ... 既存のコード
}
```

#### 3-3. 重要ボタンにイベント追跡を追加

**Instagram DMボタン**
```javascript
import { trackInstagramDM } from '../utils/analytics';

const handleInstagramDM = () => {
  // GA4イベント送信
  trackInstagramDM('header_button');
  
  // Instagram DM画面を開く
  window.open('https://www.instagram.com/direct/t/...', '_blank');
};
```

**コーディネート相談ボタン**
```javascript
import { trackConsultationInquiry } from '../utils/analytics';

const handleConsultationClick = () => {
  trackConsultationInquiry();
  // 相談ページへの遷移処理
};
```

---

### 4. 主要追跡イベント一覧

#### 4-1. コンバージョンイベント

| イベント名 | 説明 | トリガー |
|-----------|------|----------|
| `instagram_dm_click` | Instagram DM問い合わせ | DMボタンクリック |
| `consultation_inquiry` | コーディネート相談 | 相談ボタンクリック |
| `store_visit_intent` | 来店意思表示 | アクセス情報閲覧 |
| `contact_page_view` | お問い合わせページ閲覧 | コンタクトページ表示 |

#### 4-2. エンゲージメントイベント

| イベント名 | 説明 | トリガー |
|-----------|------|----------|
| `page_view` | ページビュー | ページ表示時 |
| `scroll_depth` | スクロール深度 | 25%, 50%, 75%, 100% |
| `image_view` | 画像閲覧 | ギャラリー画像クリック |
| `concept_read` | コンセプト詳細閲覧 | コンセプトページ滞在 |

#### 4-3. ナビゲーションイベント

| イベント名 | 説明 | トリガー |
|-----------|------|----------|
| `menu_click` | メニュー項目クリック | ナビゲーション使用 |
| `external_link_click` | 外部リンクアクセス | Instagram等への遷移 |
| `search_intent` | 検索意図 | 検索流入の追跡 |

---

### 5. カスタムディメンション設定

#### 5-1. GA4管理画面での設定

**カスタムディメンション**
```
1. user_type: 新規/リピーター
2. traffic_source: 検索/SNS/直接/リファラー
3. device_category: mobile/desktop/tablet
4. page_category: home/concept/coordinate/brand-story/contact
```

#### 5-2. 実装例

```javascript
// ユーザー属性の送信
export const setUserProperties = (properties) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      custom_map: {
        custom_parameter_1: 'user_type',
        custom_parameter_2: 'traffic_source'
      }
    });
  }
};
```

---

### 6. 効果測定・レポート設定

#### 6-1. 目標設定

**コンバージョン目標**
1. **Instagram DM問い合わせ** (最重要)
2. **コーディネート相談申込み**
3. **来店予約**
4. **ブランドストーリー完読**

#### 6-2. カスタムレポート

**週次レポート項目**
- ページビュー数
- ユニークユーザー数
- Instagram DM問い合わせ数
- 平均セッション時間
- 直帰率
- 検索キーワード（「シュシュリン」等）

---

### 7. プライバシー・GDPR対応

#### 7-1. Cookie同意機能（将来実装）

```javascript
// Cookie同意バナー実装例
const CookieConsent = () => {
  const [consent, setConsent] = useState(null);

  const handleAccept = () => {
    setConsent(true);
    // GA4の初期化
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
  };

  const handleDecline = () => {
    setConsent(false);
    window.gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
  };

  // バナー表示ロジック
};
```

---

### 8. 実装後の確認方法

#### 8-1. リアルタイム確認

1. **GA4管理画面** → **リアルタイム**
2. サイトにアクセスしてユーザーが表示されるか確認
3. 各ページのページビューが記録されるか確認

#### 8-2. イベント動作確認

1. **GA4管理画面** → **イベント**
2. Instagram DMボタンをクリック
3. `instagram_dm_click` イベントが記録されるか確認

#### 8-3. デバッグモード

```javascript
// 開発環境でのデバッグ
window.gtag('config', 'G-XXXXXXXXX', {
  debug_mode: true  // 開発時のみtrue
});
```

---

### 9. 月次分析レポート例

#### 9-1. 重要指標

```
【月次GA4レポート - Shu Shu Rin】

■ 基本指標
- ページビュー: XXX回
- ユニークユーザー: XXX人
- 平均セッション時間: X分XX秒
- 直帰率: XX%

■ コンバージョン
- Instagram DM問い合わせ: XX件
- コーディネート相談: XX件
- 来店予約: XX件

■ 流入経路
- 検索エンジン: XX%（「シュシュリン」「大阪狭山市 アパレル」等）
- SNS: XX%
- 直接アクセス: XX%
- その他: XX%

■ 人気ページ
1. ホーム: XXXビュー
2. コーディネート: XXXビュー  
3. コンセプト: XXXビュー
```

---

## 🚀 実装優先度

### 高優先度（即座に実装）
1. ✅ **基本GA4設定**（既に実装済み）
2. 🔄 **Instagram DMボタン追跡**
3. 🔄 **ページビュー追跡**

### 中優先度（1-2週間以内）
4. 📊 **コンバージョン目標設定**
5. 📈 **カスタムイベント実装**
6. 📋 **月次レポート設定**

### 低優先度（必要に応じて）
7. 🔒 **Cookie同意機能**
8. 📊 **高度な分析設定**
9. 🎯 **A/Bテスト機能**

---

**このガイドに沿って実装することで、Shu Shu Rinサイトの効果的な分析とマーケティング最適化が可能になります！**
