// Shu Shu Rin コーディネート写真データ

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
  2. category: 'casual' または 'elegant' （参考用、フィルタリングは無効）
  3. imagePath: WebP形式のパス（優先）
  4. imagePathJpg: JPG形式のパス（フォールバック）
  
  オプションフィールド:
  5. title: 画像下に表示されるタイトル（省略可）
  6. description: 画像下に表示される説明文（省略可）
  7. width/height: 画像の実際のサイズ（アスペクト比計算用、省略時は3:4）
  8. large: true の場合、2列幅で大きく表示（省略時は通常サイズ）
  9. order: 表示順序を制御する数値（小さい数値ほど先に表示、省略時は配列順）
  
  ギャラリー表示順序:
  - orderプロパティがある場合、数値順にソートして表示
  - orderプロパティがない場合、配列の順番通りに表示
  - large: true が設定されたアイテムが大きい画像として表示（2列幅）
*/
export const coordinates = [
  // 2025 Autumn/Winter Collection
  {
    id: 'coordinate-001',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_01.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_01.jpg'),
    width: 1080,
    height: 1440,
    order: 1
  },
  {
    id: 'coordinate-002',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_02.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_02.jpg'),
    width: 1080,
    height: 1440,
    order: 2
  },
  {
    id: 'coordinate-003',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_03.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_03.jpg'),
    width: 1080,
    height: 1440,
    order: 3
  },
  {
    id: 'coordinate-004',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_04.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_04.jpg'),
    width: 1080,
    height: 1440,
    order: 4
  },
  {
    id: 'coordinate-005',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_06.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_06.jpg'),
    width: 1080,
    height: 1440,
    order: 5,
    large: true

  },
  {
    id: 'coordinate-006',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_05.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_05.jpg'),
    width: 1080,
    height: 1440,
    order: 6
  },
  {
    id: 'coordinate-007',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_07.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_07.jpg'),
    width: 1080,
    height: 1440,
    order: 7,
  },
  {
    id: 'coordinate-008',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_08.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_08.jpg'),
    width: 1080,
    height: 1440,
    order: 8,
  },
  {
    id: 'coordinate-009',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_09.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_09.jpg'),
    width: 1080,
    height: 1440,
    order: 9,
  },
  {
    id: 'coordinate-010',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_2way_002.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_2way_002.jpg'),
    width: 1080,
    height: 1440,
    order: 10,
    large: true
  },
  {
    id: 'coordinate-011',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_10.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_10.jpg'),
    width: 1080,
    height: 1440,
    order: 11,
  },
  {
    id: 'coordinate-012',
    title: '',
    description: '　',
    imagePath: require('../assets/images/coordinates/default/coordinate_11.webp'),
    imagePathJpg: require('../assets/images/coordinates/default/coordinate_11.jpg'),
    width: 1080,
    height: 1440,
    order: 12,
  }
];

export default coordinates;