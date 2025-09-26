import React from 'react';
import { coordinates } from '../../data/coordinates';

const CoordinateGallery = () => {
  // 全てのコーディネートを表示（orderプロパティでソート）
  const displayCoordinates = [...coordinates].sort((a, b) => {
    // orderプロパティがある場合は数値順でソート
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    // orderプロパティがない場合は元の配列順を維持
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return 0;
  });


  // アイテムが大きい画像かどうかを判定（データのlargeオプションで制御）
  const isLargeItem = (coordinate) => {
    return coordinate.large === true;
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

        {/* メインギャラリー - ファッション風変則グリッドレイアウト */}
        <div>
        {/* 
          変則グリッドパターン（スマホ幅制限 max-w-lg 適用）:
          - 通常: 2列グリッド（grid-cols-2）
          - 大きい画像: largeオプションがtrueの場合、2列幅で表示（col-span-2）
          - 大きい画像も縦長アスペクト比を維持（横長にはならない）
        */}
        <div className="grid grid-cols-2 gap-2">
          {displayCoordinates.map((coordinate, index) => {
            const isLarge = isLargeItem(coordinate);
            
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
        {displayCoordinates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 bg-sophisticated-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-sophisticated-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-display text-sophisticated-400 mb-2 tracking-wide">
              コーディネートが見つかりません
            </h3>
            <p className="text-sm text-sophisticated-300">
              しばらくお待ちください
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinateGallery;