import React from 'react';
import { 
  MapPinIcon, 
  ClockIcon, 
  ArrowRightIcon,
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';
import { storeInfo } from '../../data/storeInfo';

const AccessInfo = () => {

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display text-brand-primary mb-4 leading-relaxed">
            Access
          </h2>
          <p className="text-sophisticated-500 text-sm leading-relaxed">
            {storeInfo.messages.welcome}
          </p>
        </div>



        {/* 店舗基本情報 */}
        <div className="bg-brand-secondary rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="font-display text-xl font-medium text-brand-primary mb-6 text-center">
            店舗情報
          </h3>
          
          <div className="space-y-6">
            {/* 住所 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                <MapPinIcon className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-brand-primary mb-2">
                  住所
                </h4>
                <address className="text-sophisticated-500 text-sm leading-relaxed not-italic">
                  {storeInfo.address.full}
                </address>
              </div>
            </div>

            {/* 最寄り駅 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                <ArrowRightIcon className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-brand-primary mb-2">
                  最寄り駅
                </h4>
                <div className="space-y-1">
                  {storeInfo.nearestStations.map((station, index) => (
                    <p key={index} className="text-sophisticated-500 text-sm">
                      {station.line} 「{station.station}」 徒歩{station.walkTime}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* 営業時間 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                <CalendarDaysIcon className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-brand-primary mb-2">
                  営業時間
                </h4>
                <div className="space-y-3">
                  <p className="text-sophisticated-500 text-sm">
                    {storeInfo.businessHours.note}
                  </p>
                  <p className="text-brand-primary text-sm font-medium">
                    {storeInfo.businessHours.instagramReference}
                  </p>
                  <a
                    href={storeInfo.businessHours.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      bg-brand-accent text-white 
                      px-4 py-2 rounded-full 
                      font-display text-xs font-medium
                      shadow-md hover:shadow-lg
                      transform hover:scale-105 active:scale-95
                      transition-all duration-200
                      focus:ring-4 focus:ring-brand-accent/30
                      focus:outline-none
                      gap-2
                    "
                  >
                    <CalendarDaysIcon className="w-3 h-3" />
                    Instagramで確認
                  </a>
                </div>
              </div>
            </div>

            {/* 駐車場 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                <ArrowRightIcon className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-brand-primary mb-2">
                  駐車場
                </h4>
                <p className="text-sophisticated-500 text-sm">
                  {storeInfo.accessibility.parking.note}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Google マップ */}
        <div className="mt-8 bg-brand-secondary rounded-2xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <MapPinIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="font-display text-xl font-medium text-brand-primary mb-2">
              アクセスマップ
            </h3>
            <p className="text-sophisticated-500 text-sm">
              ShuShuRin の場所をマップでご確認いただけます
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border border-sophisticated-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.9806830020175!2d135.55185607519692!3d34.50337399377591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d72667b95529%3A0x4f3ed612d79a8d85!2sShu%20Shu%20Rin!5e0!3m2!1sja!2sjp!4v1756663302532!5m2!1sja!2sjp" 
              width="100%" 
              height="300" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ShuShuRin 店舗地図"
            />
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sophisticated-500 text-xs leading-relaxed">
              南海高野線「大阪狭山市駅」から徒歩5分<br />
              店舗近くに駐車場2台完備
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessInfo;
