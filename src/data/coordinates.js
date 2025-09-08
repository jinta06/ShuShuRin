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
    id: 'coordinate-01',
    category: 'elegant',
    title: 'ドッキングワンピース',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_01.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_01.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-02',
    category: 'elegant',
    title: 'ドット×フリル×リボン',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_02.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_02.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-03',
    category: 'elegant',
    title: 'ジレベスト',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_03.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_03.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-04',
    category: 'casual',
    title: '自然な魅力のカジュアルスタイル',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_04.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_04.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-05',
    category: 'elegant',
    title: 'ラグジュアリー スタイル',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_05.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_05.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-06',
    category: 'elegant',
    title: 'エターナル エレガント',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_06.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_06.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-07',
    category: 'elegant',
    title: 'サロペット',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_07.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_07.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-08',
    category: 'elegant',
    title: 'リファインド エレガント',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_08.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_08.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-09',
    category: 'elegant',
    title: 'ジャンスカ',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_09.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_09.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-10',
    category: 'elegant',
    title: 'アリストクラシー',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_10.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_10.jpg'),
    width: 1170,
    height: 1545
  },
  {
    id: 'coordinate-11',
    category: 'casual',
    title: 'スクエアカラーブラウス',
    description: '　',
    imagePath: require('../assets/images/coordinates/coordinate_11.webp'),
    imagePathJpg: require('../assets/images/coordinates/coordinate_11.jpg'),
    width: 1170,
    height: 1545
  }
];

export default coordinates;