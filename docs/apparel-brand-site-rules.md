# ShuShuRin - アパレルセレクトショップサイト作成ルール & ガイドライン

## プロジェクト概要

**店名**: ShuShuRin（シュシュリン）  
**コンセプト**: 「年齢を脱ぐ、冒険を着る」  
**業態**: 姉妹で営む小さなセレクトショップ

スマートフォン専用のアパレルセレクトショップサイトを作成するための包括的なルールとガイドラインです。
年齢にとらわれない自由なおしゃれと、心に寄り添う温かみのあるブランド体験を提供します。

### 参考サイト
- [ピープル（株式会社ピープル）](https://m-people.co.jp/) - エシカルファッションブランド
- デザインの方向性：温かみ、親しみやすさ、上品さ、自由で冒険的な精神

---

## 🎨 デザイン方針

### UI/UXコンセプト
- **ターゲット**: 年齢にとらわれないおしゃれを楽しみたい女性
- **キーワード**: 上品、エレガント、洗練、冒険的、自由、心に寄り添う、特別感、高級感
- **避けるべき**: 堅い印象、年齢制限を感じさせる表現、画一的なスタイル、過度にシンプル、安っぽい、チープ感、温かすぎる色調

### デザインルール
1. **カラーパレット**
   - メインカラー：ブランドアイデンティティを表現する色
   - アクセントカラー：2-3色まで
   - ニュートラルカラー：グレー、ベージュ、オフホワイト
   - 高級感のある配色を心がける

2. **タイポグラフィ**
   - フォント：最大3種類まで
   - ヘッダー：ブランド感のあるエレガントなフォント
   - ボディ：読みやすさを重視したフォント
   - 和文：Noto Serif JP、英文：Crimson Text、サンセリフ：Inter、Noto Sans JP等

3. **レイアウト**
   - スマホファースト（320px-414px想定）
   - 余白を効果的に活用
   - セクション間の明確な区切り
   - スクロール体験の最適化

---

## 🛠️ 技術スタック

### 推奨技術
- **Framework**: React 18+
- **CSS Framework**: Tailwind CSS（カスタマイズ前提）
- **Icon**: Heroicons、Lucide React
- **Animation**: Framer Motion
- **画像最適化**: Next.js Image（Next.js使用時）

### Tailwind CSS採用理由
✅ **採用推奨**
- 高度なカスタマイズが可能
- レスポンシブデザインが簡単
- ユーティリティファーストで開発効率UP
- プロダクションビルドでファイルサイズ最適化
- コンポーネント化との相性が良い

```javascript
// カスタムカラーパレット例
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2C2C2C',   // エレガントなダークグレー
          secondary: '#F8F6F3', // 上品なオフホワイト
          accent: '#C8A882',    // 洗練されたゴールド
          gold: '#D4AF37',      // リッチゴールド（ロゴ用）
        },
        neutral: {
          elegant: '#FAFAFA',   // エレガントな背景
          sophisticated: '#F4F4F4', // 洗練された背景
          charcoal: '#3A3A3A',  // 上品なチャコール
        }
      },
      fontFamily: {
        sans: ['Noto Serif JP', 'Crimson Text', 'Georgia', 'serif'], // スタイリッシュな明朝体ベース
        display: ['Noto Serif JP', 'Georgia', 'serif'], // 上品で洗練されたセリフフォント
        elegant: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'], // クリーンなサンセリフ
        luxury: ['Crimson Text', 'Times New Roman', 'serif'] // 高級感のあるセリフ
      }
    }
  }
}
```

---

## 📁 ディレクトリ構造

```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── common/          # 共通コンポーネント
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── Loading.jsx
│   ├── ui/              # UIコンポーネント
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── Carousel.jsx
│   └── sections/        # セクション単位のコンポーネント
│       ├── Hero.jsx
│       ├── ConceptCard.jsx
│       ├── CoordinateGallery.jsx
│       ├── StorySection.jsx
│       └── AccessInfo.jsx
├── pages/               # ページコンポーネント
│   ├── Home.jsx
│   ├── Concept.jsx
│   ├── Coordinate.jsx
│   ├── BrandStory.jsx
│   ├── Access.jsx
│   └── Contact.jsx
├── hooks/               # カスタムフック
│   ├── useScrollAnimation.js
│   └── useModal.js
├── utils/               # ユーティリティ関数
│   ├── constants.js
│   └── helpers.js
├── assets/              # 静的アセット
│   ├── images/
│   │   ├── logo/        # ロゴファイル
│   │   ├── hero/        # メインビジュアル
│   │   ├── coordinate/  # コーディネート写真
│   │   ├── store/       # 店舗写真
│   │   └── designers/   # デザイナー写真
│   └── icons/
├── styles/              # スタイル関連
│   ├── globals.css
│   └── components.css
└── data/                # データファイル
    ├── concepts.js      # 3つのコンセプト内容
    ├── coordinates.js   # コーディネート写真データ
    ├── storeInfo.js     # 店舗・アクセス情報
    └── designers.js     # デザイナー情報
```

---

## 📋 ファイル命名規則

### コンポーネントファイル
- **PascalCase** を使用
- 拡張子: `.jsx` （TypeScript使用時は `.tsx`）
- 例: `HeroSection.jsx`, `ProductCard.jsx`, `NavigationMenu.jsx`

### ページファイル
- **PascalCase** を使用
- ページを表す名前
- 例: `Home.jsx`, `About.jsx`, `Collection.jsx`

### フック
- **camelCase** で `use` プレフィックス
- 例: `useScrollAnimation.js`, `useProductData.js`

### ユーティリティ
- **camelCase** を使用
- 例: `formatPrice.js`, `imageHelpers.js`

### 画像ファイル
- **kebab-case** を使用
- 意味のある名前
- 例: `hero-main-visual.jpg`, `product-dress-01.jpg`

---

## 🌐 URL構造

### ルート設計
```
/ (root)                    # ホームページ（「年齢を脱ぐ、冒険を着る」）
├── /concept                # コンセプト（3つのコンセプト詳細）
├── /coordinate             # コーディネート（写真ギャラリー）
├── /brand-story            # ブランドストーリー・デザイナー紹介
├── /access                 # アクセス（住所・営業時間）
└── /contact               # お問い合わせ（Instagram DM案内）
```

### URL命名ルール
- **小文字**を使用
- **ハイフン区切り**（kebab-case）
- 日本語は使用しない
- SEOを意識した意味のあるURL
- 階層は3階層まで

---

## 📱 スマートフォン対応仕様

### レスポンシブブレークポイント
```css
/* Tailwind CSS ブレークポイント */
sm: 375px    /* iPhone SE */
md: 414px    /* iPhone Pro Max */
lg: 430px    /* 大型スマートフォン */
```

### パフォーマンス要件
- **Initial Load**: 3秒以内
- **画像**: WebP形式、適切なサイズ最適化
- **Core Web Vitals**: 全て "Good" 評価
- **Bundle Size**: 500KB以下（初回読み込み）

### UX要件
- **タッチターゲット**: 44px以上
- **フォントサイズ**: 16px以上（本文）
- **コントラスト比**: WCAG AA準拠
- **スクロール**: スムーズスクロール実装

---

## 🎯 必須実装機能

### コアページ
1. **ホームページ**
   - ヒーローセクション（「年齢を脱ぐ、冒険を着る」）
   - ショップ紹介（姉妹で営む小さなセレクトショップ）
   - 3つのコンセプト概要
   - Instagram投稿埋め込み

2. **コンセプトページ**
   - ①年齢に縛られない"好き"を纏う
   - ②「なんとなく選ぶ」から、「本当に着たい服を選ぶ」へ
   - ③自分だけの"特別"を見つける喜び
   - 各コンセプトの詳細説明

3. **コーディネートページ**
   - スタイリング写真ギャラリー
   - アイテム別カテゴリ表示
   - おすすめコーディネート紹介

4. **ブランドストーリーページ**
   - ショップの始まり・想い
   - 姉妹デザイナー紹介
   - セレクト基準・こだわり

5. **アクセスページ**
   - 住所・最寄り駅
   - 営業時間・定休日
   - 店舗写真
   - 来店予約案内

6. **コンタクトページ**
   - Instagram DM案内
   - コーディネート相談受付
   - よくある質問

### インタラクション
- **スムーズスクロール**
- **パララックス効果**（適度に）
- **フェードイン/アウト**アニメーション
- **画像ホバー効果**
- **ローディングアニメーション**

---

## 🎨 デザインシステム

### コンポーネント設計原則
1. **再利用性**: 複数箇所で使用可能
2. **拡張性**: 将来的な機能追加に対応
3. **一貫性**: デザインガイドラインに準拠
4. **アクセシビリティ**: WCAG準拠

### カラーシステム例
```javascript
const colors = {
  primary: {
    50: '#fafafa',    // エレガントホワイト
    100: '#f4f4f5',   // 上品なライトグレー
    500: '#2c2c2c',   // 洗練されたダークグレー
    900: '#1a1a1a'    // ディープブラック
  },
  accent: {
    50: '#fefcf3',    // シャンパンホワイト
    100: '#fef3e2',   // ライトゴールド
    500: '#c8a882',   // エレガントゴールド
    900: '#8b6914'    // リッチゴールド
  },
  sophisticated: {
    50: '#f8f6f3',    // 上品なオフホワイト
    100: '#f1ede8',   // ソフトベージュ
    500: '#a0957d',   // モダンタープ
    900: '#5d5346'    // ダークタープ
  },
  neutral: {
    50: '#fafafa',    
    100: '#f4f4f4',   
    500: '#6b7280',   // ソフィスティケートグレー
    900: '#1f2937'    
  }
}
```

---

## 🎨 ロゴ仕様・ガイドライン

### ロゴバリエーション
ShuShuRinではシンボルマーク1つとプログラム実装による展開を行います：

1. **正方形ロゴ（シンボルマーク）**
   - ロゴマークのみ（画像ファイル）
   - 推奨サイズ：80px × 80px
   - 最小サイズ：40px × 40px
   - 用途：ファビコン、SNSアイコン、ローディング

2. **テキストロゴ（プログラム実装）**
   - "ShuShuRin"テキストをフォントで表現
   - シンボルマークと組み合わせて横長レイアウト構成
   - 用途：ヘッダー、フッター、メインビジュアル
   - フォント：display（Noto Serif JP）または elegant（Inter）

### ロゴカラーバリエーション
各ロゴパターンで以下3色を用意：

1. **ゴールド版** `#D4AF37` (メイン推奨)
   - 高級感とエレガンスを演出
   - 白・ライトグレー背景で使用
   - ブランドの特別感を最も表現

2. **ブラック版** `#2C2C2C`
   - 洗練された印象
   - 白・ライト系背景で使用
   - モノトーンデザインにマッチ

3. **ホワイト版** `#FFFFFF`
   - ダーク背景・写真背景で使用
   - 影付きで視認性確保
   - ヒーローセクション等で活用

### ファイル命名規則
```
logo/
├── square/                  # 正方形ロゴ（シンボルマーク）
│   ├── shushurin-symbol-gold.svg
│   ├── shushurin-symbol-gold.png (80x80)
│   ├── shushurin-symbol-black.svg
│   ├── shushurin-symbol-black.png (80x80)
│   ├── shushurin-symbol-white.svg
│   └── shushurin-symbol-white.png (80x80)
└── favicon/                 # ファビコン用
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png (180x180)
```

### プログラム実装でのロゴ表示
```jsx
// シンボルマーク + テキストの組み合わせ例
<div className="flex items-center gap-3">
  <img src="/logo/square/shushurin-symbol-gold.svg" className="w-8 h-8" />
  <span className="font-display text-xl text-brand-primary">ShuShuRin</span>
</div>
```

### 使用ガイドライン
```jsx
// 新しいロゴコンポーネント例
const Logo = ({ showText = true, color = 'gold', size = 'md', className = '' }) => {
  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={`/logo/square/shushurin-symbol-${color}.svg`}
        alt="ShuShuRin Symbol"
        className={symbolSizes[size]}
      />
      {showText && (
        <span className={`font-display ${textSizes[size]} text-brand-${color === 'white' ? 'secondary' : 'primary'}`}>
          ShuShuRin
        </span>
      )}
    </div>
  );
};
```

### 推奨配置パターン
1. **ヘッダー**: シンボル+テキスト ゴールド（中サイズ）
2. **ヒーローセクション**: シンボル+テキスト ホワイト（大サイズ）+ 影効果
3. **フッター**: シンボル+テキスト ホワイト（中サイズ）
4. **ファビコン**: シンボルのみ ゴールド
5. **ローディング**: シンボルのみ ゴールド（中央配置・アニメーション）

---

## 🗺️ ホームページ アクセスセクション・Google Maps 仕様

### Google Maps 統合仕様

ShuShuRinホームページにエレガントなアクセス情報セクションを実装し、上品なGoogle Maps表示を行います。

#### 基本仕様
```javascript
// Google Maps 設定
const mapConfig = {
  // 表示設定
  center: { lat: 35.6762, lng: 139.6503 }, // 店舗座標（例）
  zoom: 16,                                 // 適度なズーム
  mapTypeId: 'roadmap',                     // 道路地図
  
  // UI制御
  disableDefaultUI: true,                   // デフォルトUI非表示
  gestureHandling: 'cooperative',           // スクロール競合回避
  
  // 有効化するコントロール
  controls: {
    zoomControl: true,       // ズームボタン
    mapTypeControl: false,   // 地図タイプ切替なし
    streetViewControl: false, // ストリートビューなし
    fullscreenControl: true  // フルスクリーンあり
  }
};
```

#### エレガントなマップスタイル
```javascript
// ShuShuRin専用カスタムマップスタイル
const mapStyles = [
  {
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [{ "color": "#f8f6f3" }]  // 上品なオフホワイト背景
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }]  // 道路を白に
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#2c2c2c" }]  // エレガントなダークグレー文字
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#a0957d" }]  // モダンタープの水色
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#f1ede8" }]  // ソフトベージュのランドマーク
  },
  {
    "featureType": "poi.business",
    "stylers": [{ "visibility": "off" }] // 不要な店舗情報を非表示
  }
];
```

### アクセスセクション レイアウト仕様

#### セクション構成
```jsx
const AccessSection = () => {
  return (
    <section className="py-16 bg-brand-secondary">
      {/* セクションヘッダー */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display text-brand-primary mb-4">
          Access
        </h2>
        <p className="text-sophisticated-500 font-light">
          お気軽にお越しください
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* 店舗情報 */}
        <div className="space-y-8">
          <StoreInfo />
          <BusinessHours />
          <ContactInfo />
        </div>

        {/* Google Maps */}
        <div className="relative">
          <ElegantGoogleMap />
        </div>
      </div>
    </section>
  );
};
```

#### 店舗情報コンポーネント仕様
```jsx
const StoreInfo = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-xl font-display text-brand-primary mb-6">
        店舗情報
      </h3>
      
      <div className="space-y-4">
        {/* 住所 */}
        <div className="flex items-start space-x-4">
          <MapPinIcon className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-brand-primary">住所</p>
            <p className="text-sophisticated-500 text-sm leading-relaxed">
              〒150-0001<br />
              東京都渋谷区神宮前1-2-3<br />
              ShuShuRin Building 1F
            </p>
          </div>
        </div>

        {/* 最寄り駅 */}
        <div className="flex items-start space-x-4">
          <TrainIcon className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-brand-primary">最寄り駅</p>
            <p className="text-sophisticated-500 text-sm">
              JR山手線「原宿駅」徒歩5分<br />
              東京メトロ「明治神宮前駅」徒歩3分
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### Google Maps コンポーネント実装

#### ElegantGoogleMap コンポーネント
```jsx
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const ElegantGoogleMap = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '16px',
    overflow: 'hidden'
  };

  const center = {
    lat: 35.6762, // 実際の店舗座標
    lng: 139.6503
  };

  return (
    <div className="relative">
      {/* マップオーバーレイフレーム */}
      <div className="absolute inset-0 rounded-2xl border-2 border-brand-accent/20 pointer-events-none z-10" />
      
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            gestureHandling: 'cooperative',
            zoomControl: true,
            zoomControlOptions: {
              position: window.google?.maps.ControlPosition.RIGHT_BOTTOM
            }
          }}
        >
          {/* カスタムマーカー */}
          <Marker
            position={center}
            icon={{
              url: '/assets/images/logo/square/shushurin-logo-square-gold.svg',
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 20)
            }}
          />
        </GoogleMap>
      </LoadScript>

      {/* 地図下部の装飾 */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
        <p className="text-xs text-brand-primary font-medium">ShuShuRin</p>
        <p className="text-xs text-sophisticated-500">セレクトショップ</p>
      </div>
    </div>
  );
};
```

### 営業時間・コンタクト情報

#### BusinessHours コンポーネント
```jsx
const BusinessHours = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-xl font-display text-brand-primary mb-6">
        営業時間
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-sophisticated-100">
          <span className="text-sophisticated-500">平日</span>
          <span className="font-medium text-brand-primary">11:00 - 19:00</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-sophisticated-100">
          <span className="text-sophisticated-500">土日祝</span>
          <span className="font-medium text-brand-primary">10:00 - 20:00</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sophisticated-500">定休日</span>
          <span className="font-medium text-brand-primary">火曜日</span>
        </div>
      </div>
    </div>
  );
};
```

### パフォーマンス最適化

#### 遅延読み込み対応
```jsx
import { lazy, Suspense } from 'react';

// Google Maps コンポーネントの遅延読み込み
const LazyGoogleMap = lazy(() => import('./components/ElegantGoogleMap'));

const AccessSection = () => {
  return (
    <section className="py-16 bg-brand-secondary">
      {/* ... 他のコンテンツ ... */}
      
      <Suspense fallback={
        <div className="h-96 bg-sophisticated-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sophisticated-500">地図を読み込んでいます...</p>
          </div>
        </div>
      }>
        <LazyGoogleMap />
      </Suspense>
    </section>
  );
};
```

### レスポンシブ対応

#### モバイル最適化
```css
/* スマートフォン用調整 */
@media (max-width: 768px) {
  .access-section {
    padding: 3rem 1rem;
  }
  
  .map-container {
    height: 300px;
    margin-top: 2rem;
  }
  
  .store-info-card {
    margin-bottom: 1.5rem;
  }
}

/* タッチデバイス用ジェスチャー調整 */
.google-map-container {
  touch-action: manipulation;
}
```

### アクセシビリティ配慮

#### 地図の代替情報
```jsx
const MapFallback = () => {
  return (
    <div className="bg-sophisticated-50 rounded-2xl p-8 text-center">
      <MapPinIcon className="w-12 h-12 text-brand-accent mx-auto mb-4" />
      <p className="text-brand-primary font-medium mb-2">
        地図が表示できません
      </p>
      <p className="text-sophisticated-500 text-sm mb-4">
        下記の住所をご確認ください
      </p>
      <address className="text-brand-primary not-italic">
        〒150-0001<br />
        東京都渋谷区神宮前1-2-3<br />
        ShuShuRin Building 1F
      </address>
    </div>
  );
};
```

### 環境変数設定

#### .env ファイル
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

#### API キー制限設定
- HTTPリファラー制限
- Maps JavaScript API のみ有効
- 日別クエリ制限設定

この仕様により、ShuShuRinらしい上品でエレガントなアクセスセクションと、ブランドカラーに統一されたGoogle Maps表示が実現できます！

---

## 🖼️ ヒーローセクション背景画像仕様

### 画像サイズ・仕様

```javascript
// ヒーローセクション背景画像仕様
const heroImageSpecs = {
  // 基本サイズ（スマホ対応）
  mobile: {
    width: '430px',      // 大型スマホ対応
    height: '100vh',     // ビューポート全体
    aspectRatio: '9:16', // 縦長比率
    minHeight: '667px'   // iPhone SE対応
  },
  
  // ファイル仕様
  fileSpecs: {
    format: 'WebP',      // 軽量化・高品質
    fallback: 'JPG',     // 互換性確保
    quality: '85%',      // 高品質維持
    maxFileSize: '500KB' // パフォーマンス重視
  },

  // 解像度対応（レスポンシブ画像）
  resolution: {
    '1x': '430×932px',   // 標準解像度
    '2x': '860×1864px',  // Retinaディスプレイ
    '3x': '1290×2796px'  // 高解像度スマホ
  }
}
```

### エレガントフィルター・オーバーレイ

背景画像が鮮やかすぎる場合の上品な調整方法：

```css
/* 上品なグレーオーバーレイ */
.hero-background {
  position: relative;
  background-image: url('hero-main-visual.webp');
  background-size: cover;
  background-position: center;
  height: 100vh;
  min-height: 667px; /* iPhone SE対応 */
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(44, 44, 44, 0.4) 0%,     /* エレガントダークグレー */
    rgba(44, 44, 44, 0.2) 50%,    /* 中央部分を薄く */
    rgba(44, 44, 44, 0.3) 100%    /* 下部少し濃く */
  );
  z-index: 1;
}

/* 洗練されたフィルター効果 */
.hero-background img {
  filter: 
    brightness(0.85)       /* 少し暗めに調整 */
    contrast(1.1)          /* コントラスト向上 */
    saturate(0.8)          /* 彩度を落とし上品に */
    sepia(0.1);           /* わずかなセピア調 */
}
```

### Tailwind CSS 実装例

```jsx
const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[667px] overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/hero/hero-main-visual.webp')`,
          filter: 'brightness(0.85) contrast(1.1) saturate(0.8) sepia(0.1)'
        }}
      />
      
      {/* エレガントオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-brand-primary/20 to-brand-primary/30" />
      
      {/* コンテンツレイヤー */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-sm mx-auto">
          {/* ロゴ（ホワイト版・大サイズ・影効果） */}
          <img 
            src="/assets/images/logo/horizontal/shushurin-logo-horizontal-white.svg"
            alt="ShuShuRin"
            className="w-80 h-26 mx-auto mb-8 drop-shadow-lg filter"
          />
          
          {/* メインメッセージ */}
          <h1 className="text-white text-2xl font-display font-light mb-4 drop-shadow-md leading-relaxed">
            年齢を脱ぐ、冒険を着る
          </h1>
          
          <p className="text-white/90 text-sm font-light leading-relaxed drop-shadow-sm">
            姉妹で営む小さなセレクトショップ<br />
            あなたらしい特別な一着との出会いを
          </p>
        </div>
      </div>
    </section>
  );
};
```

### 推奨画像コンテンツ

#### 被写体・構図
1. **被写体**: 
   - 大人の女性のエレガントなライフスタイルシーン
   - 洗練されたファッションアイテム
   - 上品なインテリア・空間・テクスチャ

2. **色調**: 
   - ニュートラルトーン中心（ベージュ、グレー、ホワイト系）
   - 金色・ゴールドのアクセントがあるとロゴと調和
   - 過度に鮮やかな色は避ける

3. **構図**:
   - 中央にロゴ・テキストを配置する余白確保
   - 縦構図（スマホ対応）
   - 上下にコンテンツエリア確保
   - 被写体は画面の1/3以下に配置

### ファイル命名・配置

```
assets/images/hero/
├── hero-main-visual.webp          # メイン背景画像
├── hero-main-visual.jpg           # フォールバック用
├── hero-main-visual@2x.webp       # Retina対応
├── hero-main-visual@3x.webp       # 高解像度対応
└── hero-placeholder.svg           # ローディング用プレースホルダー
```

### パフォーマンス最適化

1. **遅延読み込み**: ヒーロー画像は即座に表示する必要があるため`loading="eager"`
2. **プリロード**: `<link rel="preload" as="image" href="hero-main-visual.webp">`
3. **WebP対応**: モダンブラウザ向けにWebP、古いブラウザ向けにJPGフォールバック
4. **レスポンシブ画像**: 解像度に応じた適切なサイズ配信

### アクセシビリティ配慮

- **コントラスト比**: テキストと背景のコントラスト比4.5:1以上確保
- **代替テキスト**: 背景画像の場合は`alt=""`で装飾的画像として扱う
- **フォーカス**: ロゴにフォーカス可能な場合は明確なフォーカスリング表示

---

## 📐 コーディング規約

### React コンポーネント
```jsx
// 良い例
const ProductCard = ({ product, onSelect, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};
```

### CSS クラス命名
- **Tailwind ユーティリティ**を優先
- カスタムクラスは **BEM記法**
- 例: `hero__title--large`, `product-card__image`

---

## 🚀 開発フロー

### ブランチ戦略
```
main                 # 本番環境
├── develop         # 開発統合ブランチ
├── feature/hero    # 機能開発ブランチ
├── feature/collection
└── hotfix/bug-fix  # 緊急修正
```

### コミットメッセージ
```
feat: ヒーローセクションのアニメーション実装
fix: モバイル表示時のレイアウト修正
style: Tailwind設定のカラーパレット更新
docs: README.mdの更新
```

---

## ✅ 品質チェックリスト

### デザイン品質
- [ ] ブランドカラーが一貫して使用されている
- [ ] フォントサイズとライン間隔が適切
- [ ] 画像が高品質で最適化されている
- [ ] タッチしやすいボタンサイズ
- [ ] 読みやすいコントラスト比

### 技術品質
- [ ] レスポンシブデザインが正しく動作
- [ ] 画像の遅延読み込み実装
- [ ] エラーハンドリング
- [ ] アクセシビリティ対応
- [ ] SEOメタデータ設定

### ユーザビリティ
- [ ] 直感的なナビゲーション
- [ ] 3秒以内の初回読み込み
- [ ] スムーズなスクロール体験
- [ ] 適切なフィードバック表示

---

## 🎯 成功指標

### 技術指標
- **PageSpeed Insights**: 90点以上
- **Core Web Vitals**: すべて "Good"
- **Bundle Size**: 500KB以下
- **エラー率**: 1%以下

### ユーザー体験指標
- **直帰率**: 50%以下
- **平均セッション時間**: 2分以上
- **ページビュー/セッション**: 3ページ以上

---

## 📝 ShuShuRin 専用コンテンツ詳細

### ホームページ - メインメッセージ
```
「年齢を脱ぐ、冒険を着る」

ShuShuRinは、姉妹で営む小さなセレクトショップ。
「着てみたい」と思える一着との出会いが、あなたの毎日を少しだけ特別にしてくれるはず。
今まで選ばなかった色、形、スタイルにも、そっと手を伸ばせるように。
```

### 3つのコンセプト

#### ① 年齢に縛られない"好き"を纏う
```
「もう歳だから…」そんな言葉で、好きな服を諦めていませんか？
年齢や流行にとらわれず、今の自分がときめく一着を自由に選んでほしい。
誰かの"正解"ではなく、あなたらしさを大切にしたスタイリングで、
もっと自分らしいおしゃれを楽しんでみませんか？
```

#### ② 「なんとなく選ぶ」から、「本当に着たい服を選ぶ」へ
```
何を着てもピンとこない、似合うものがわからない。
そんなあなたの気持ちに寄り添いながら、一緒にあなたらしいスタイルを見つけます。
迷ったら、無理に決めなくて大丈夫。
でも「これを着たい」と心が動く瞬間が来たら、その気持ちを大切に。
「なんとなく」から、「これが好き」に出会える、その瞬間を一緒に喜べたら嬉しいです。
```

#### ③ 自分だけの"特別"を見つける喜び
```
毎日の中に、ちょっとした特別を感じたいあなたへ。
素材やデザイン、細部にまでこだわったアイテムを揃えています。
誰かに似合う服ではなく、あなたの心を動かす一着が日常に彩りを添えてくれるはず。
服を選ぶ楽しさと、新しい自分との出会いを、この場所で見つけてみませんか？
```

### コンタクトページ - メッセージ
```
「わたしに似合う服ってなんだろう？」そんなご相談もお気軽に。

コーディネートのご相談、商品のご質問、来店予約など、
どんなことでもお気軽にご連絡ください。
姉妹ふたりで、丁寧に対応させていただきます。

ご連絡は Instagram DM にてお願いいたします。
```

### 実装時の注意点
1. **上品でエレガントな表現**: 硬いビジネス用語は避けつつ、洗練された語りかけるような文章
2. **年齢への配慮**: 年齢制限を感じさせない表現を心がける
3. **姉妹感**: 二人で営んでいる特別感と上品さを表現
4. **冒険的な要素**: 新しいスタイルへの挑戦を後押しする表現（高級感を保持）
5. **Instagram連携**: SNSとの自然な連携を重視
6. **特別感の演出**: 選ばれた感、プレミアム感を大切に

---

*このルールに従って、ShuShuRinらしいエレガンスと冒険心に満ちたセレクトショップサイトを構築しましょう。*

---

**Labels**: `shushurin`, `select-shop`, `sisters`, `mobile-first`, `tailwind`, `react`, `apparel`  
**Priority**: High  
**Status**: Ready for Development  
**Last Updated**: 2024-12
