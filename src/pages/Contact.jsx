import React from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  QuestionMarkCircleIcon, 
  HeartIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/common/SEOHead';
import { trackInstagramDM, trackConsultationInquiry } from '../utils/analytics';
import { usePageTracking } from '../hooks/usePageTracking';

const Contact = () => {
  // ページエンゲージメント追跡
  usePageTracking('contact');

  // Instagram DMボタンクリック処理
  const handleInstagramDMClick = () => {
    // GA4イベント追跡
    trackInstagramDM('contact_page');
    trackConsultationInquiry('contact_page');
    
    // Instagram DM画面を開く
    window.open('https://www.instagram.com/shu.shu.rin/', '_blank');
  };

  // よくある質問データ
  const faqData = [
    {
      id: 1,
      question: 'コーディネート相談は無料ですか？',
      answer: 'はい、無料でご相談いただけます。お気軽にInstagram DMからお声がけください。'
    },
    {
      id: 2,
      question: '来店予約は必要ですか？',
      answer: 'ご予約をいただけますと、よりゆっくりとご相談いただけます。Instagram DMから事前にご連絡ください。'
    },
    {
      id: 3,
      question: 'どのような年代の方が多いですか？',
      answer: '20代から70代まで、幅広い年齢層の方にご利用いただいています。年齢を気にせず、お気軽にお越しください。'
    },
    {
      id: 4,
      question: 'サイズの相談もできますか？',
      answer: 'もちろんです。体型やサイズに関するご相談も、丁寧にお答えいたします。'
    },
    {
      id: 5,
      question: '返品・交換について教えてください',
      answer: '商品の状態によりご相談させていただきます。詳細はInstagram DMからお問い合わせください。'
    },
    {
      id: 6,
      question: '営業時間を教えてください',
      answer: '営業時間はInstagramのハイライトでご確認いただけます。変更がある場合もございますので、事前にご確認ください。'
    }
  ];

  // コンタクトページ専用の構造化データ
  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'お問い合わせ | Shu Shu Rin',
    'description': 'Shu Shu Rin（シュシュリン）へのお問い合わせはInstagram DMで承ります。コーディネート相談、商品のご質問、来店予約など、お気軽にご連絡ください。',
    'url': 'https://www.shushurin.com/contact',
    'mainEntity': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'コーディネート相談は無料ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'はい、無料でご相談いただけます。お気軽にInstagram DMからお声がけください。'
          }
        },
        {
          '@type': 'Question',
          'name': '来店予約は必要ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ご予約をいただけますと、よりゆっくりとご相談いただけます。Instagram DMから事前にご連絡ください。'
          }
        },
        {
          '@type': 'Question',
          'name': 'どのような年代の方が多いですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '20代から70代まで、幅広い年齢層の方にご利用いただいています。年齢を気にせず、お気軽にお越しください。'
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-brand-secondary pt-20">
      {/* SEO設定 */}
      <SEOHead 
        title="お問い合わせ | Shu Shu Rin（シュシュリン）"
        description="Shu Shu Rin（シュシュリン）へのお問い合わせはInstagram DMで承ります。コーディネート相談、商品のご質問、来店予約など、お気軽にご連絡ください。大阪狭山市のアパレルセレクトショップ。"
        keywords="お問い合わせ, Instagram DM, コーディネート相談, Shu Shu Rin, シュシュリン, アパレル, セレクトショップ, 大阪狭山市, 来店予約, よくある質問"
        url="https://www.shushurin.com/contact"
        structuredData={contactStructuredData}
      />
      {/* ヒーローセクション */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-display text-brand-primary mb-6 leading-relaxed">
            Contact
          </h1>
          <p className="text-sophisticated-500 text-sm leading-relaxed mb-8">
            スタイリングのご相談、ご質問など<br />
            お気軽にお声がけください
          </p>
          <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
        </div>
      </section>

      {/* メインコンテンツセクション */}
      <section className="py-12 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              Instagram DM
            </h2>
          </div>
          
          {/* メインメッセージ */}
          <div className="bg-accent-50 rounded-3xl p-6 mb-6">
            <div className="space-y-3 text-center">
              <p className="text-sophisticated-500 text-base leading-relaxed">
                「わたしに似合う服ってなんだろう？」<br />
                そんなご相談もお気軽に。
              </p>
              <div className="pt-2">
                <p className="text-brand-accent font-display font-medium text-base">
                  ご連絡は Instagram DM にてお願いいたします。
                </p>
              </div>
            </div>
          </div>

          {/* 相談内容例 */}
          <div className="bg-sophisticated-50 rounded-3xl p-6 mb-6">
            <h3 className="text-lg font-display text-brand-primary mb-4 text-center">
              ご相談内容例
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sophisticated-500 text-sm">スタイリング・コーディネートのご相談</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sophisticated-500 text-sm">商品に関するご質問・お問い合わせ</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sophisticated-500 text-sm">来店予約・営業時間のご確認</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sophisticated-500 text-sm">サイズ・体型に関するご相談</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sophisticated-500 text-sm">返品・交換に関するお問い合わせ</p>
              </div>
            </div>
          </div>

          {/* Instagram DMボタン */}
          <div className="text-center">
            <button
              onClick={handleInstagramDMClick}
              className="
                bg-brand-accent text-white 
                px-8 py-3 rounded-full 
                font-display text-sm
                shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                transition-all duration-200
                focus:ring-4 focus:ring-brand-accent/30
                focus:outline-none
                inline-flex items-center justify-center gap-2
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
              </svg>
              Instagram DMで相談する
            </button>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-12 bg-brand-secondary">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4">
              <QuestionMarkCircleIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-display text-brand-primary mb-4">
              よくある質問
            </h2>
            <p className="text-sophisticated-500 text-sm">
              皆さまからよくいただくご質問をまとめました
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl p-6">
                <h3 className="text-base font-display font-medium text-brand-primary mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-sophisticated-500 text-sm leading-relaxed">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sophisticated-500 text-sm leading-relaxed">
              その他のご質問につきましても、<br />
              お気軽にInstagram DMからお声がけください。
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;