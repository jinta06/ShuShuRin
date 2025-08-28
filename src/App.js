import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';
import Hero from './components/sections/Hero';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Modal from './components/ui/Modal';
import Carousel from './components/ui/Carousel';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Loading demo function
  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // Modal demo functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Carousel demo data
  const carouselItems = [
    {
      id: 1,
      title: 'エレガントなコーディネート',
      description: '上品でスタイリッシュなスタイリング',
      image: 'https://via.placeholder.com/600x400/C8A882/2C2C2C?text=Style+1'
    },
    {
      id: 2,
      title: 'カジュアルなスタイル',
      description: '日常使いできるリラックススタイル',
      image: 'https://via.placeholder.com/600x400/F8F6F3/2C2C2C?text=Style+2'
    },
    {
      id: 3,
      title: '特別な日のスタイル',
      description: '記念日や特別なシーンに',
      image: 'https://via.placeholder.com/600x400/D4AF37/2C2C2C?text=Style+3'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-secondary">
      {/* Header Component */}
      <Header />

      {/* Hero Section - Phase 3 Issue #5 */}
      <Hero />

      {/* Main Content */}
      <main className="min-h-screen">

        {/* Component Demo Section */}
        <section className="px-4 py-8 bg-neutral-elegant">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-xl font-semibold text-brand-primary mb-6">
              ✨ ShuShuRin 共通コンポーネント完成！
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-accent-50 rounded-lg text-left">
                <h4 className="font-semibold text-brand-primary mb-2">✅ Header</h4>
                <p className="text-sm text-sophisticated-500">
                  ロゴ・ハンバーガーメニュー・ナビゲーション機能
                </p>
              </div>
              
              <div className="p-4 bg-sophisticated-50 rounded-lg text-left">
                <h4 className="font-semibold text-brand-primary mb-2">✅ Footer</h4>
                <p className="text-sm text-sophisticated-500">
                  Instagram DM案内・ブランドメッセージ・コピーライト
                </p>
              </div>
              
              <div className="p-4 bg-brand-secondary rounded-lg text-left border border-brand-accent">
                <h4 className="font-semibold text-brand-primary mb-2">✅ Navigation</h4>
                <p className="text-sm text-sophisticated-500">
                  スマホ用スライドアウトメニュー（Headerに組み込み済み）
                </p>
              </div>
              
              <div className="p-4 bg-accent-100 rounded-lg text-left">
                <h4 className="font-semibold text-brand-primary mb-2">✅ Loading</h4>
                <p className="text-sm text-sophisticated-500">
                  ShuShuRinらしいローディングアニメーション
                </p>
              </div>
            </div>

            {/* Loading Demo Button */}
            <button
              onClick={handleLoadingDemo}
              className="btn-secondary mb-6"
              disabled={isLoading}
            >
              Loading デモを見る
            </button>

            <p className="text-sophisticated-500 text-sm">
              右上のメニューボタンでナビゲーションを試してみてください！
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy-section" className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="w-16 h-0.5 bg-brand-accent mx-auto mb-8"></div>
              <h3 className="font-display text-2xl font-light text-brand-primary mb-8 tracking-wide">
                ShuShuRin's Philosophy
              </h3>
            </div>
            
            <h4 className="font-display text-xl font-medium text-brand-primary mb-8 leading-relaxed">
              それは、自由というスタイル。
            </h4>
            
            <div className="space-y-6 text-sophisticated-500 leading-relaxed">
              <p>
                ShuShuRinが手掛けるのは"心ときめく日常着"。<br />
                毎日、毎年、着たくなるスタンダードで心地よいシルエット。<br />
                そして、気持ちが上がる素敵な色合いと上質な素材。
              </p>
              <p>
                年齢にとらわれず、今の自分がときめく一着を<br />
                自由に選んでほしい。あなたらしさを大切にした<br />
                スタイリングを一緒に見つけませんか？
              </p>
            </div>
            
            <div className="mt-12">
              <Button variant="outline" onClick={openModal}>
                コーディネート相談をする
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-brand-secondary">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-16 h-0.5 bg-brand-accent mx-auto mb-8"></div>
              <h3 className="font-display text-2xl font-light text-brand-primary mb-4 tracking-wide">
                Experience ShuShuRin
              </h3>
            </div>

            {/* Carousel Demo */}
            <div className="mb-12">
              <Carousel 
                items={carouselItems}
                autoPlay={true}
                autoPlayInterval={5000}
                renderItem={(item) => (
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h4 className="font-display text-xl font-medium mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              />
            </div>

            {/* Interactive Demo */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-display text-lg font-medium text-brand-primary mb-4">
                  あなたのスタイルを見つける
                </h4>
                <p className="text-sophisticated-500 leading-relaxed mb-6">
                  お客様一人ひとりの個性を大切に、<br />
                  似合う色や形をご提案いたします。<br />
                  InstagramのDMでお気軽にご相談ください。
                </p>
                <div className="space-y-3">
                  <Button variant="primary" onClick={() => alert('Instagram DMへ移動')} fullWidth>
                    Instagram DM で相談
                  </Button>
                  <Button variant="elegant" onClick={handleLoadingDemo} fullWidth disabled={isLoading}>
                    {isLoading ? 'ロード中...' : 'ローディング体験'}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-sophisticated-100">
                  <h5 className="font-display font-medium text-brand-primary mb-2">パーソナル診断</h5>
                  <p className="text-sophisticated-500 text-sm">あなたに似合う色とスタイルを診断</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-sophisticated-100">
                  <h5 className="font-display font-medium text-brand-primary mb-2">コーディネート提案</h5>
                  <p className="text-sophisticated-500 text-sm">ライフスタイルに合わせたスタイリング</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-sophisticated-100">
                  <h5 className="font-display font-medium text-brand-primary mb-2">アフターサポート</h5>
                  <p className="text-sophisticated-500 text-sm">購入後の着回し相談も承ります</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System Showcase */}
        <section className="py-16 bg-neutral-elegant">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-16 h-0.5 bg-brand-accent mx-auto mb-8"></div>
              <h3 className="font-display text-2xl font-light text-brand-primary mb-4 tracking-wide">
                Design Elements
              </h3>
              <p className="text-sophisticated-500">
                ShuShuRinのデザインシステムをご体験ください
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Buttons Showcase */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-display font-medium text-brand-primary mb-6">Interactive Elements</h4>
                <div className="space-y-4">
                  <Button variant="primary" onClick={() => alert('Primary Action')} fullWidth>
                    プライマリアクション
                  </Button>
                  <Button variant="elegant" onClick={() => alert('Elegant Action')} fullWidth>
                    エレガントアクション
                  </Button>
                  <Button variant="outline" onClick={() => alert('Secondary Action')} fullWidth>
                    セカンダリアクション
                  </Button>
                </div>
              </div>

              {/* Typography Showcase */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-display font-medium text-brand-primary mb-6">Typography & Colors</h4>
                <div className="space-y-4">
                  <div className="text-brand-primary font-display text-lg">Display Font - Noto Serif JP</div>
                  <div className="text-sophisticated-500 font-elegant">Body Font - Inter</div>
                  <div className="flex gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-brand-accent"></div>
                    <div className="w-8 h-8 rounded-full bg-brand-gold"></div>
                    <div className="w-8 h-8 rounded-full bg-sophisticated-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-sophisticated-500 text-sm leading-relaxed">
                すべてのUIコンポーネントが完成しました。<br />
                次は Phase 3: ホームページ実装に進みます ✨
              </p>
            </div>
          </div>
        </section>

        {/* Loading Demo */}
        {isLoading && (
          <Loading 
            message="ShuShuRinローディング中..." 
            fullScreen={true} 
          />
        )}
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Modal Demo */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="md">
        <Modal.Header onClose={closeModal}>
          <Modal.Title>ShuShuRin モーダル</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-sophisticated-500 leading-relaxed mb-4">
            これはShuShuRinのエレガントなモーダルです。上品でスタイリッシュなデザインが特徴です。
          </p>
          <Card variant="outlined">
            <Card.Body>
              <Card.Title>コーディネート相談</Card.Title>
              <Card.Description>
                あなたに似合うスタイルを一緒に見つけませんか？
                姉妹ふたりが丁寧にご相談にお答えします。
              </Card.Description>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={closeModal}>
            キャンセル
          </Button>
          <Button variant="primary" onClick={() => {
            alert('Instagram DMに移動します');
            closeModal();
          }}>
            相談する
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
