import React from 'react';
import { HeartIcon, SparklesIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// 画像のimport
import ownersPhotoWebp from '../assets/images/brandstory/owners-photo.webp';
import ownersPhotoJpg from '../assets/images/brandstory/owners-photo.jpg';
import storeExteriorWebp from '../assets/images/brandstory/store-exterior.webp';
import storeExteriorJpg from '../assets/images/brandstory/store-exterior.jpg';
import storeInteriorWebp from '../assets/images/brandstory/store-interior.webp';
import storeInteriorJpg from '../assets/images/brandstory/store-interior.jpg';

const BrandStory = () => {
  return (
    <main className="min-h-screen bg-brand-secondary pt-20">
      {/* ヒーローセクション */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
            Brand Story
          </h1>
          <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
            姉妹で営む小さなセレクトショップ<br />
            Shu Shu Rinの始まりと想いをお伝えします
          </p>
          <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
        </div>
      </section>

      {/* ショップの始まり */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <HeartIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              ショップの始まり
            </h2>
          </div>
          
          <div className="bg-accent-50 rounded-3xl p-8 mb-8">
            <p className="text-sophisticated-500 text-sm leading-relaxed text-center mb-6">
              「年齢を脱ぐ、冒険を着る」<br />
              この想いから、Shu Shu Rinは生まれました。
            </p>
            <div className="space-y-4">
              <p className="text-sophisticated-500 text-sm leading-relaxed">
                姉妹ふたりで始めた小さなセレクトショップ。きっかけは、「もう年だから」という言葉で好きな服を諦めてしまう方々との出会いでした。
              </p>
              <p className="text-sophisticated-500 text-sm leading-relaxed">
                年齢や流行にとらわれず、本当に着たいと思える一着との出会いを大切にしたい。そんな想いで、心に寄り添うスタイリングをご提案しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 店主紹介 */}
      <section className="py-12 bg-gradient-to-b from-white to-brand-secondary">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <UserGroupIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              店主紹介
            </h2>
          </div>

          {/* 写真にオーバーレイしたデザイン */}
          <div className="relative">
            <div className="relative w-full h-80 overflow-hidden rounded-3xl shadow-xl">
              <picture>
                <source srcSet={ownersPhotoWebp} type="image/webp" />
                <img
                  src={ownersPhotoJpg}
                  alt="Shu Shu Rin店主の写真"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* テキストオーバーレイ */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-display font-medium mb-2">
                  Shu Shu Rin 店主
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">セットアップコーデ全国1位</span>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  お客様一人ひとりに寄り添った<br />
                  1着で何通りものコーデをご提案
                </p>
              </div>
            </div>

            {/* フローティングカード */}
            {/* <div className="absolute -bottom-6 left-4 right-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-sophisticated-100">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-display font-bold text-brand-accent mb-1">1着で</div>
                    <div className="text-xs text-sophisticated-500">何通りものコーデ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-display font-bold text-brand-accent mb-1">心地よい</div>
                    <div className="text-xs text-sophisticated-500">スタイリング</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* 下部余白調整 */}
          <div className="h-8"></div>
        </div>
      </section>

      {/* 店舗写真セクション */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <SparklesIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              店舗の雰囲気
            </h2>
          </div>

          <div className="space-y-8">
            {/* 店舗外観 - 店主紹介と同じスタイル */}
            <div className="relative group">
              <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-xl">
                <picture>
                  <source srcSet={storeExteriorWebp} type="image/webp" />
                  <img
                    src={storeExteriorJpg}
                    alt="Shu Shu Rin店舗外観"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
                
                {/* グラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* テキストオーバーレイ（左下） */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-medium mb-2">
                    温かみのある外観
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    住宅街にひっそりと佇む<br />
                    アットホームな雰囲気のお店
                  </p>
                </div>
              </div>
            </div>

            {/* 店舗内装 - 店主紹介と同じスタイル */}
            <div className="relative group">
              <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-xl">
                <picture>
                  <source srcSet={storeInteriorWebp} type="image/webp" />
                  <img
                    src={storeInteriorJpg}
                    alt="Shu Shu Rin店舗内装"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
                
                {/* グラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* テキストオーバーレイ（左下） */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-medium mb-2">
                    心地よい空間
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    ゆったりとお買い物していただける<br />
                    上品で落ち着いた空間
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandStory;