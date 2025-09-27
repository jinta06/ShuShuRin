import React from 'react';
import sectionMainVisual1 from '../../assets/images/brandstory/store-interior.webp';
import sectionMainVisual2 from '../../assets/images/brandstory/store-exterior.webp';

const ImageGallerySection = () => {
  return (
    <section className="pb-32 bg-brand-secondary">
      <div className="w-full">
        {/* 2枚の画像を横並びで配置 */}
        <div className="grid grid-cols-2 gap-0 items-start">
          {/* 左の画像（20px下にオフセット） */}
          <div className="relative transform translate-y-16">
            <div className="overflow-hidden shadow-lg">
              <img 
                src={sectionMainVisual1} 
                alt="Gallery Image Left"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* 右の画像 */}
          <div className="relative">
            <div className="overflow-hidden shadow-lg">
              <img 
                src={sectionMainVisual2} 
                alt="Gallery Image Right"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
