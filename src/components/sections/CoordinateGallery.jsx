import React, { useState } from 'react';
import { coordinates } from '../../data/coordinates';

const CoordinateGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // カジュアルときれいめ（エレガント）のみ表示するカテゴリ
  const filteredCategories = [
    { id: 'all', name: 'All', color: 'text-brand-primary' },
    { id: 'casual', name: 'Casual', color: 'text-accent-500' },
    { id: 'elegant', name: 'Elegant', color: 'text-sophisticated-500' }
  ];

  // カテゴリ別フィルタリング
  const availableCoordinates = coordinates.filter(coord => 
    coord.category === 'casual' || coord.category === 'elegant'
  );
  
  const filteredCoordinates = selectedCategory === 'all' 
    ? availableCoordinates 
    : availableCoordinates.filter(coord => coord.category === selectedCategory);


  // アイテムが大きい画像かどうかを判定（7番目、15番目、23番目...）
  const isLargeItem = (index) => {
    return (index + 1) % 7 === 0;
  };

  // 画像の適切なアスペクト比を計算（width/heightから）
  const getAspectRatio = (coordinate, isLarge) => {
    // 大きい画像も通常画像も同じ縦長比率を維持
    if (coordinate.width && coordinate.height) {
      return `${coordinate.width}/${coordinate.height}`;
    }
    return '3/4'; // デフォルト（縦長）
  };

  return (
    <div className="w-full">
      {/* スマホ幅制限を適用 - 他のページと同じmax-w-lg */}
      <div className="max-w-lg mx-auto px-4">
        {/* カテゴリフィルター - ミニマルなアパレルスタイル */}
        <div className="mb-12">
          <div className="flex justify-center items-center">
            <div className="flex gap-8">
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative font-display text-sm tracking-wider uppercase transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'text-brand-primary'
                      : 'text-sophisticated-400 hover:text-brand-primary'
                  }`}
                >
                  {category.name}
                  {/* アンダーライン */}
                  <div className={`absolute -bottom-2 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                    selectedCategory === category.id ? 'w-full' : 'w-0'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* メインギャラリー - ファッション風変則グリッドレイアウト */}
        <div>
        {/* 
          変則グリッドパターン（スマホ幅制限 max-w-lg 適用）:
          - 6枚（2列×3行）の後に1枚の大きい画像
          - パターン: 2列, 2列, 2列, 1列（大）, 2列, 2列, 2列, 1列（大）...
          - 大きい画像: 7番目、15番目、23番目...（7で割り切れる番号）
          - 大きい画像も縦長アスペクト比を維持（横長にはならない）
        */}
        <div className="grid grid-cols-2 gap-2">
          {filteredCoordinates.map((coordinate, index) => {
            const isLarge = isLargeItem(index);
            
            return (
              <div 
                key={coordinate.id}
                className={`${isLarge ? 'col-span-2' : ''}`}
              >
                {/* 
                  画像アイテム:
                  - 通常: 1列幅（grid-cols-2の1つ分）
                  - 大きい: 2列幅（col-span-2で全幅）
                */}
                <div className="relative">
                  {/* メイン画像 */}
                  <div className="relative overflow-hidden">
                    <picture>
                      <source srcSet={coordinate.imagePath} type="image/webp" />
                      <img
                        src={coordinate.imagePathJpg}
                        alt={`${coordinate.title || `coordinate ${index + 1}`}`}
                        className="w-full h-auto object-cover"
                        style={{ 
                          aspectRatio: getAspectRatio(coordinate, isLarge)
                        }}
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>

                {/* タイトルと説明 - 写真外の左上に配置 */}
                <div className="mt-1 space-y-0.5">
                  {coordinate.title && (
                    <div className="text-xs font-display tracking-wide text-brand-primary font-medium">
                      {coordinate.title}
                    </div>
                  )}
                  {coordinate.description && (
                    <div className="text-xs text-sophisticated-400 leading-relaxed">
                      {coordinate.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

        {/* 空の状態 */}
        {filteredCoordinates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 bg-sophisticated-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-sophisticated-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-display text-sophisticated-400 mb-2 tracking-wide">
              No coordinates found
            </h3>
            <p className="text-sm text-sophisticated-300">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinateGallery;