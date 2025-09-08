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
            ShuShuRinの始まりと想いをお伝えします
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
              この想いから、ShuShuRinは生まれました。
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

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-40 overflow-hidden rounded-2xl shadow-md mb-4">
                <picture>
                  <source srcSet={ownersPhotoWebp} type="image/webp" />
                  <img
                    src={ownersPhotoJpg}
                    alt="ShuShuRin店主の写真"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-2 text-center">
                ShuShuRin 店主
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-accent-50 rounded-2xl p-4 text-center">
                <p className="text-brand-accent font-display text-sm font-medium mb-1">
                  セットアップコーデ全国1位
                </p>
                <p className="text-sophisticated-500 text-xs">
                  スタイリング技術で認められた実績
                </p>
              </div>
              
              <div className="bg-accent-50 rounded-2xl p-4 text-center">
                <p className="text-brand-accent font-display text-sm font-medium mb-1">
                  1着で何通りものコーデをご提案
                </p>
                <p className="text-sophisticated-500 text-xs">
                  多様なスタイリングでお客様をサポート
                </p>
              </div>

              <div className="pt-2">
                <p className="text-sophisticated-500 text-sm leading-relaxed text-center">
                  お客様一人ひとりのライフスタイルに寄り添ったスタイリングを得意としています。「似合う」だけではなく、「着ていて心地よい」スタイルをご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗写真セクション */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <SparklesIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              店舗の雰囲気
            </h2>
          </div>

          <div className="space-y-8">
            {/* 店舗外観 */}
            <div className="bg-sophisticated-50 rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="relative w-48 h-64 overflow-hidden rounded-2xl shadow-lg">
                  <picture>
                    <source srcSet={storeExteriorWebp} type="image/webp" />
                    <img
                      src={storeExteriorJpg}
                      alt="ShuShuRin店舗外観"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </div>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-2 text-center">
                温かみのある外観
              </h3>
              <p className="text-sophisticated-500 text-sm leading-relaxed text-center">
                小さな路地にひっそりと佇む、アットホームな雰囲気のお店です。
              </p>
            </div>

            {/* 店舗内装 */}
            <div className="bg-sophisticated-50 rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="relative w-48 h-64 overflow-hidden rounded-2xl shadow-lg">
                  <picture>
                    <source srcSet={storeInteriorWebp} type="image/webp" />
                    <img
                      src={storeInteriorJpg}
                      alt="ShuShuRin店舗内装"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </div>
              </div>
              <h3 className="text-lg font-display text-brand-primary mb-2 text-center">
                心地よい空間
              </h3>
              <p className="text-sophisticated-500 text-sm leading-relaxed text-center">
                ゆったりとお買い物していただける、上品で落ち着いた空間です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandStory;