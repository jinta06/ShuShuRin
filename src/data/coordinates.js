// ShuShuRin コーディネート写真データ

/*
  カテゴリ設定:
  - 現在使用中: casual（カジュアル）, elegant（エレガント）
*/
export const coordinateCategories = [
  { id: 'all', name: 'すべて', color: 'text-brand-primary' },
  { id: 'casual', name: 'カジュアル', color: 'text-accent-500' },
  { id: 'elegant', name: 'エレガント', color: 'text-sophisticated-500' }
];

/*
  コーディネート画像データ:
  
  必須フィールド:
  1. id: 一意識別子
  2. category: 'casual' または 'elegant' （フィルタリング用）
  3. imagePath: WebP形式のパス（優先）
  4. imagePathJpg: JPG形式のパス（フォールバック）
  
  オプションフィールド:
  5. title: 画像下に表示されるタイトル（省略可）
  6. description: 画像下に表示される説明文（省略可）
  7. width/height: 画像の実際のサイズ（アスペクト比計算用、省略時は3:4）
  
  ギャラリー表示順序:
  - 配列の順番通りに表示されます
  - 7番目、15番目、23番目...が大きい画像として表示（2列幅）
*/
export const coordinates = [
  {
    id: 'casual-01',
    category: 'casual',
    title: 'リラックスカジュアル',
    description: '自然体で心地よい、デイリーカジュアルスタイル',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-01.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-01.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-02',
    category: 'casual',
    title: 'モダンカジュアル',
    description: '洗練された大人のカジュアルコーディネート',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-02.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-02.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-03',
    category: 'casual',
    title: 'エフォートレスカジュアル',
    description: '頑張りすぎない、自然な魅力のカジュアルスタイル',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-03.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-03.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-04',
    category: 'casual',
    title: 'アーバンカジュアル',
    description: '都会的でスマートなカジュアルコーディネート',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-04.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-04.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-01',
    category: 'elegant',
    title: 'クラシックエレガント',
    description: '時代を超えて愛される、クラシカルなエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-01.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-01.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-02',
    category: 'elegant',
    title: 'モダンエレガント',
    description: '現代的な洗練とエレガンスが融合したスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-02.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-02.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-03',
    category: 'elegant',
    title: 'ソフィスティケートエレガント', 
    description: '知的で洗練された大人のエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-03.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-03.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-04',
    category: 'elegant',
    title: 'フェミニンエレガント',
    description: '女性らしさと上品さが調和したエレガントスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-04.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-04.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-05',
    category: 'elegant',
    title: 'ラグジュアリーエレガント',
    description: '高級感とエレガンスが織りなす特別なスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-05.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-05.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-06',
    category: 'elegant',
    title: 'クラシックエレガント',
    description: '時代を超えて愛される、クラシカルなエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-01.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-01.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-07',
    category: 'elegant',
    title: 'モダンエレガント',
    description: '現代的な洗練とエレガンスが融合したスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-02.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-02.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-08',
    category: 'elegant',
    title: 'ソフィスティケートエレガント', 
    description: '知的で洗練された大人のエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-03.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-03.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-09',
    category: 'elegant',
    title: 'フェミニンエレガント',
    description: '女性らしさと上品さが調和したエレガントスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-04.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-04.jpg',
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-10',
    category: 'elegant',
    title: 'ラグジュアリーエレガント',
    description: '高級感とエレガンスが織りなす特別なスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-05.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-05.jpg',
    width: 1170,
    height: 1545
  }
];

export default coordinates;