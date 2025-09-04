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
    type: 'irregular', // 不定期営業
    note: '営業日は不定期です',
    instagramReference: 'Instagram のハイライト「営業日」をご確認ください',
    instagramUrl: 'https://www.instagram.com/shu.shu.rin/'
  },

  // アクセシビリティ対応
  accessibility: {
    parking: {
      available: true,
      spaces: 2,
      note: '店舗近くに駐車場2台完備'
    }
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
  }
};

export default storeInfo;
