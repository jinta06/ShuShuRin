// ShuShuRin コーディネート写真データ

export const coordinateCategories = [
  { id: 'all', name: 'すべて', color: 'text-brand-primary' },
  { id: 'casual', name: 'カジュアル', color: 'text-accent-500' },
  { id: 'elegant', name: 'エレガント', color: 'text-sophisticated-500' },
  { id: 'seasonal', name: '季節', color: 'text-primary-500' }
];

export const coordinates = [
  // カジュアルコーディネート
  {
    id: 'casual-01',
    category: 'casual',
    categoryName: 'カジュアル',
    title: 'リラックスカジュアル',
    description: '自然体で心地よい、デイリーカジュアルスタイル',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-01.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-01.jpg',
    tags: ['デイリー', 'リラックス', 'ナチュラル'],
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-02',
    category: 'casual',
    categoryName: 'カジュアル',
    title: 'モダンカジュアル',
    description: '洗練された大人のカジュアルコーディネート',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-02.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-02.jpg',
    tags: ['モダン', '大人', 'スタイリッシュ'],
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-03',
    category: 'casual',
    categoryName: 'カジュアル',
    title: 'エフォートレスカジュアル',
    description: '頑張りすぎない、自然な魅力のカジュアルスタイル',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-03.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-03.jpg',
    tags: ['エフォートレス', '自然', 'シンプル'],
    width: 1170,
    height: 1545
  },
  {
    id: 'casual-04',
    category: 'casual',
    categoryName: 'カジュアル',
    title: 'アーバンカジュアル',
    description: '都会的でスマートなカジュアルコーディネート',
    imagePath: '/assets/images/coordinate/casual/coordinate-casual-04.webp',
    imagePathJpg: '/assets/images/coordinate/casual/coordinate-casual-04.jpg',
    tags: ['アーバン', '都会的', 'スマート'],
    width: 1170,
    height: 1545
  },

  // エレガントコーディネート
  {
    id: 'elegant-01',
    category: 'elegant',
    categoryName: 'エレガント',
    title: 'クラシックエレガント',
    description: '時代を超えて愛される、クラシカルなエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-01.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-01.jpg',
    tags: ['クラシック', '上品', 'タイムレス'],
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-02',
    category: 'elegant',
    categoryName: 'エレガント',
    title: 'モダンエレガント',
    description: '現代的な洗練とエレガンスが融合したスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-02.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-02.jpg',
    tags: ['モダン', '洗練', '上質'],
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-03',
    category: 'elegant',
    categoryName: 'エレガント',
    title: 'ソフィスティケートエレガント',
    description: '知的で洗練された大人のエレガンススタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-03.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-03.jpg',
    tags: ['ソフィスティケート', '知的', '大人'],
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-04',
    category: 'elegant',
    categoryName: 'エレガント',
    title: 'フェミニンエレガント',
    description: '女性らしさと上品さが調和したエレガントスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-04.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-04.jpg',
    tags: ['フェミニン', '女性らしい', '上品'],
    width: 1170,
    height: 1545
  },
  {
    id: 'elegant-05',
    category: 'elegant',
    categoryName: 'エレガント',
    title: 'ラグジュアリーエレガント',
    description: '高級感とエレガンスが織りなす特別なスタイル',
    imagePath: '/assets/images/coordinate/elegant/coordinate-elegant-05.webp',
    imagePathJpg: '/assets/images/coordinate/elegant/coordinate-elegant-05.jpg',
    tags: ['ラグジュアリー', '高級', '特別'],
    width: 1170,
    height: 1545
  },

  // 季節コーディネート
  {
    id: 'seasonal-01',
    category: 'seasonal',
    categoryName: '季節',
    title: 'スプリングコーディネート',
    description: '春の気分を先取りする、軽やかなスタイル',
    imagePath: '/assets/images/coordinate/seasonal/coordinate-seasonal-01.webp',
    imagePathJpg: '/assets/images/coordinate/seasonal/coordinate-seasonal-01.jpg',
    tags: ['春', '軽やか', 'フレッシュ'],
    width: 1170,
    height: 1545
  },
  {
    id: 'seasonal-02',
    category: 'seasonal',
    categoryName: '季節',
    title: 'サマーコーディネート',
    description: '夏の爽やかさを表現した涼しげなスタイル',
    imagePath: '/assets/images/coordinate/seasonal/coordinate-seasonal-02.webp',
    imagePathJpg: '/assets/images/coordinate/seasonal/coordinate-seasonal-02.jpg',
    tags: ['夏', '爽やか', 'クール'],
    width: 1170,
    height: 1545
  },
  {
    id: 'seasonal-03',
    category: 'seasonal',
    categoryName: '季節',
    title: 'オータムコーディネート',
    description: '秋の深みと温かみのあるスタイル',
    imagePath: '/assets/images/coordinate/seasonal/coordinate-seasonal-03.webp',
    imagePathJpg: '/assets/images/coordinate/seasonal/coordinate-seasonal-03.jpg',
    tags: ['秋', '深み', 'ウォーム'],
    width: 1170,
    height: 1545
  },
  {
    id: 'seasonal-04',
    category: 'seasonal',
    categoryName: '季節',
    title: 'ウィンターコーディネート',
    description: '冬の上品さと暖かさを両立したスタイル',
    imagePath: '/assets/images/coordinate/seasonal/coordinate-seasonal-04.webp',
    imagePathJpg: '/assets/images/coordinate/seasonal/coordinate-seasonal-04.jpg',
    tags: ['冬', '上品', '暖かい'],
    width: 1170,
    height: 1545
  }
];

export default coordinates;
