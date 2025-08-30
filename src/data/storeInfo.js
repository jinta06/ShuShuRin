// ShuShuRin 店舗情報データ
// ブランドルール: apparel-brand-site-rules.md に準拠

export const storeInfo = {
  // 基本情報
  name: 'ShuShuRin',
  concept: '年齢を脱ぐ、冒険を着る',
  type: '姉妹で営む小さなセレクトショップ',
  
  // 住所・アクセス
  address: {
    postal: '〒589-0005',
    prefecture: '大阪府',
    city: '大阪狭山市',
    area: '狭山2-942-6',
    full: '〒589-0005 大阪府大阪狭山市狭山2-942-6'
  },
  
  // 最寄り駅
  nearestStations: [
    {
      line: '南海高野線',
      station: '大阪狭山市駅',
      walkTime: '5分',
      primary: true
    }
  ],
  
  // 営業時間
  businessHours: {
    weekday: {
      open: '11:00',
      close: '19:00',
      display: '11:00 - 19:00'
    },
    weekend: {
      open: '10:00',
      close: '11:00',
      display: '10:00 - 11:00'
    },
    closedDay: '火曜日',
    note: '祝日は土日と同じ営業時間です'
  },
  
  // 連絡先情報
  contact: {
    instagram: '@shu.shu.rin',
    instagramUrl: 'https://www.instagram.com/shu.shu.rin/',
    instagramDM: 'https://www.instagram.com/direct/inbox/',
    phone: '', // 非公開
    email: '', // 非公開 - Instagram DMを推奨
    preferredContact: 'Instagram DM'
  },
  
  // Google Maps設定（将来実装用）
  maps: {
    coordinates: {
      lat: 35.6762, // 例座標
      lng: 139.6503
    },
    zoom: 16,
    placeId: 'ShuShuRin_placeholder' // 実際のPlace IDに変更予定
  },
  
  // 特別なメッセージ
  messages: {
    welcome: 'お気軽にお越しください',
    consultation: '「わたしに似合う服ってなんだろう？」そんなご相談もお気軽に。',
    service: 'コーディネートのご相談、商品のご質問、来店予約など、どんなことでもお気軽にご連絡ください。姉妹ふたりで、丁寧に対応させていただきます。',
    contactMethod: 'ご連絡は Instagram DM にてお願いいたします。'
  },
  
  // アクセシビリティ対応
  accessibility: {
    elevator: true,
    wheelchairAccess: true,
    parkingAvailable: false,
    publicTransportAccess: true
  }
};

// 営業時間判定ユーティリティ関数
export const getBusinessHoursStatus = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0: 日曜, 1: 月曜, ..., 6: 土曜
  const currentTime = now.getHours() * 100 + now.getMinutes(); // HHMM形式
  
  // 火曜日（定休日）
  if (currentDay === 2) {
    return {
      isOpen: false,
      status: 'closed',
      message: '本日は定休日です',
      nextOpenTime: '明日 11:00 から営業'
    };
  }
  
  // 平日の営業時間判定
  let openTime, closeTime;
  if (currentDay >= 1 && currentDay <= 5) { // 月-金
    openTime = 1100; // 11:00
    closeTime = 1900; // 19:00
  } else { // 土日
    openTime = 1000; // 10:00
    closeTime = 2000; // 20:00
  }
  
  if (currentTime >= openTime && currentTime <= closeTime) {
    return {
      isOpen: true,
      status: 'open',
      message: '営業中',
      closeTime: `${Math.floor(closeTime/100)}:${String(closeTime%100).padStart(2, '0')} まで`
    };
  } else if (currentTime < openTime) {
    return {
      isOpen: false,
      status: 'before_open',
      message: '開店前',
      nextOpenTime: `${Math.floor(openTime/100)}:${String(openTime%100).padStart(2, '0')} から営業`
    };
  } else {
    return {
      isOpen: false,
      status: 'after_close',
      message: '営業終了',
      nextOpenTime: '明日 11:00 から営業'
    };
  }
};

export default storeInfo;
