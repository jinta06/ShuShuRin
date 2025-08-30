import React, { useState, useEffect } from 'react';
import { 
  MapPinIcon, 
  ClockIcon, 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';
import { storeInfo, getBusinessHoursStatus } from '../../data/storeInfo';

const AccessInfo = () => {
  const [businessStatus, setBusinessStatus] = useState(null);

  useEffect(() => {
    // 営業時間ステータスを取得
    setBusinessStatus(getBusinessHoursStatus());
    
    // 1分ごとにステータスを更新
    const interval = setInterval(() => {
      setBusinessStatus(getBusinessHoursStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleInstagramDM = () => {
    window.open(storeInfo.contact.instagramDM, '_blank');
  };

  const handleInstagramProfile = () => {
    window.open(storeInfo.contact.instagramUrl, '_blank');
  };

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

        {/* 営業ステータス表示 */}
        {businessStatus && (
          <div className={`mb-8 p-4 rounded-2xl text-center ${
            businessStatus.isOpen 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className={`inline-flex items-center gap-2 text-sm font-medium ${
              businessStatus.isOpen ? 'text-green-700' : 'text-gray-600'
            }`}>
              <ClockIcon className="w-4 h-4" />
              {businessStatus.message}
              {businessStatus.closeTime && ` (${businessStatus.closeTime})`}
              {businessStatus.nextOpenTime && ` - ${businessStatus.nextOpenTime}`}
            </div>
          </div>
        )}

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
          </div>
        </div>

        {/* 営業時間 */}
        <div className="bg-brand-secondary rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mr-4">
              <CalendarDaysIcon className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-display text-xl font-medium text-brand-primary">
              営業時間
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-sophisticated-100">
              <span className="text-sophisticated-500 font-medium">平日</span>
              <span className="font-display text-brand-primary">
                {storeInfo.businessHours.weekday.display}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-sophisticated-100">
              <span className="text-sophisticated-500 font-medium">土日祝</span>
              <span className="font-display text-brand-primary">
                {storeInfo.businessHours.weekend.display}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sophisticated-500 font-medium">定休日</span>
              <span className="font-display text-brand-primary">
                {storeInfo.businessHours.closedDay}
              </span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/60 rounded-xl">
            <p className="text-sophisticated-500 text-xs text-center">
              {storeInfo.businessHours.note}
            </p>
          </div>
        </div>

        {/* お問い合わせ・相談案内 */}
        <div className="bg-brand-secondary rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="font-display text-xl font-medium text-brand-primary mb-3">
              お問い合わせ・ご相談
            </h3>
          </div>

          <div className="mb-6">
            <p className="text-sophisticated-500 text-sm leading-relaxed text-center mb-2">
              {storeInfo.messages.consultation}
            </p>
            <p className="text-sophisticated-500 text-sm leading-relaxed text-center mb-4">
              {storeInfo.messages.service}
            </p>
            <p className="text-brand-primary text-sm font-medium text-center">
              {storeInfo.messages.contactMethod}
            </p>
          </div>

          {/* アクションボタン群 */}
          <div className="space-y-3">
            <button 
              className="
                w-full bg-brand-accent text-white 
                px-6 py-3 rounded-full 
                font-display text-sm font-medium
                shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                transition-all duration-200
                focus:ring-4 focus:ring-brand-accent/30
                focus:outline-none
                inline-flex items-center justify-center gap-2
              "
              onClick={handleInstagramDM}
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Instagram DM でご相談
            </button>

            <button 
              className="
                w-full px-6 py-3 rounded-full 
                font-display text-sm font-medium
                border-2 border-brand-accent text-brand-accent
                bg-transparent hover:bg-brand-accent hover:text-white
                shadow-sm hover:shadow-lg
                transform hover:scale-105 active:scale-95
                transition-all duration-200
                focus:ring-4 focus:ring-brand-accent/30
                focus:outline-none
                inline-flex items-center justify-center gap-2
              "
              onClick={handleInstagramProfile}
            >
              <PhoneIcon className="w-4 h-4" />
              来店予約・お問い合わせ
            </button>
          </div>

          {/* Instagram情報 */}
          <div className="mt-6 pt-6 border-t border-sophisticated-100 text-center">
            <p className="text-sophisticated-500 text-xs">
              Instagram: {storeInfo.contact.instagram}<br />
              コーディネート相談・来店予約もお気軽に
            </p>
          </div>
        </div>

        {/* 将来のGoogleマップ統合エリア */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <div className="text-center">
            <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 text-sm font-medium mb-2">
              Google Maps 統合エリア
            </p>
            <p className="text-gray-400 text-xs">
              将来的にインタラクティブな地図を表示予定
            </p>
          </div>
        </div>

        {/* アクセシビリティ情報 */}
        {storeInfo.accessibility && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-display font-medium text-blue-900 mb-2 text-sm">
              アクセシビリティ
            </h4>
            <div className="text-blue-700 text-xs space-y-1">
              {storeInfo.accessibility.wheelchairAccess && (
                <p>• 車椅子でのアクセス可能</p>
              )}
              {storeInfo.accessibility.elevator && (
                <p>• エレベーター完備</p>
              )}
              {storeInfo.accessibility.publicTransportAccess && (
                <p>• 公共交通機関でのアクセス良好</p>
              )}
              {!storeInfo.accessibility.parkingAvailable && (
                <p>• 専用駐車場なし（近隣コインパーキングをご利用ください）</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AccessInfo;
