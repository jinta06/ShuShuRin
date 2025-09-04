import React, { useState, useCallback } from 'react';
import { coordinates, coordinateCategories } from '../../data/coordinates';
import Modal from '../ui/Modal';

const CoordinateGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // カテゴリ別フィルタリング
  const filteredCoordinates = selectedCategory === 'all' 
    ? coordinates 
    : coordinates.filter(coord => coord.category === selectedCategory);

  // 画像クリック時のモーダル表示
  const handleImageClick = useCallback((coordinate) => {
    setSelectedImage(coordinate);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  return (
    <div className="max-w-md mx-auto px-4">
      {/* カテゴリフィルター - スマホ専用デザイン */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {coordinateCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-white text-sophisticated-500 active:bg-accent-50 active:text-brand-primary shadow-md'
              }`}
              style={{ minHeight: '44px' }} // タッチターゲット最小サイズ
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* スマホ専用ギャラリーレイアウト */}
      <div className="space-y-6">
        {filteredCoordinates.map((coordinate, index) => (
          <div
            key={coordinate.id}
            className="group cursor-pointer active:scale-95 transition-transform duration-200"
            onClick={() => handleImageClick(coordinate)}
          >
            {/* スマホ専用エレガントカード */}
            <div className="bg-white rounded-3xl shadow-lg active:shadow-xl transition-all duration-300 overflow-hidden">
              {/* 画像 */}
              <div className="relative overflow-hidden">
                <picture>
                  <source srcSet={coordinate.imagePath} type="image/webp" />
                  <img
                    src={coordinate.imagePathJpg}
                    alt={coordinate.title}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '3/4' }} // 縦長の3:4比率
                    loading="lazy"
                  />
                </picture>

                {/* エレガントな拡大アイコン */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* カテゴリバッジ */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sophisticated-500 rounded-full text-xs font-medium shadow-sm">
                    {coordinate.categoryName}
                  </span>
                </div>
              </div>

              {/* カード情報セクション */}
              <div className="p-6">
                <h3 className="text-xl font-display font-medium text-brand-primary mb-2">
                  {coordinate.title}
                </h3>
                <p className="text-sophisticated-500 text-sm leading-relaxed mb-4">
                  {coordinate.description}
                </p>
                
                {/* タグ表示 */}
                <div className="flex flex-wrap gap-2">
                  {coordinate.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent-50 text-accent-500 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 空の状態 - スマホ専用 */}
      {filteredCoordinates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-sophisticated-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-sophisticated-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-display text-sophisticated-500 mb-2">
            コーディネートが見つかりません
          </h3>
          <p className="text-sm text-sophisticated-400">
            別のカテゴリをお試しください
          </p>
        </div>
      )}

      {/* スマホ専用画像モーダル */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedImage && (
          <div className="max-w-sm mx-auto">
            {/* モーダル内画像 */}
            <div className="relative mb-6">
              <picture>
                <source srcSet={selectedImage.imagePath} type="image/webp" />
                <img
                  src={selectedImage.imagePathJpg}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain rounded-2xl"
                  style={{ aspectRatio: '3/4', maxHeight: '60vh' }}
                />
              </picture>
              
              {/* 閉じるボタン */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white active:bg-black/80 transition-colors"
                style={{ minHeight: '44px', minWidth: '44px' }} // タッチターゲット最小サイズ
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* モーダル内情報 */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="px-3 py-1 bg-accent-50 text-accent-500 rounded-full text-sm font-medium">
                  {selectedImage.categoryName}
                </span>
              </div>
              <h2 className="text-xl font-display font-medium text-brand-primary mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-sophisticated-500 leading-relaxed text-sm mb-4">
                {selectedImage.description}
              </p>
              
              {/* タグ表示 */}
              <div className="flex flex-wrap justify-center gap-2">
                {selectedImage.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-sophisticated-50 text-sophisticated-500 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CoordinateGallery;
