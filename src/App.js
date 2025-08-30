import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';
import Hero from './components/sections/Hero';
import ConceptSection from './components/sections/ConceptSection';
import InstagramSection from './components/sections/InstagramSection';
import AccessInfo from './components/sections/AccessInfo';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Modal from './components/ui/Modal';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal demo functions
  const closeModal = () => setIsModalOpen(false);



  return (
    <div className="min-h-screen bg-brand-secondary">
      {/* Header Component */}
      <Header />

      {/* Hero Section - Phase 3 Issue #5 */}
      <Hero />

      {/* Concept Section - Phase 3 Issue #6 */}
      <ConceptSection />

      {/* Main Content */}
      <main className="min-h-screen">

        {/* Instagram Section - Issue #7 */}
        <InstagramSection />

        {/* Coordinate Preview Section - 将来実装予定 */}
        <section className="py-16 bg-brand-secondary">
          <div className="max-w-lg mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl font-light text-brand-primary mb-4 tracking-wide">
                Coordinate
              </h3>
              <p className="text-sophisticated-500 text-sm">
                ShuShuRinが提案するスタイリング
              </p>
            </div>

            {/* プレースホルダーカード */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                <h4 className="font-display font-medium text-brand-primary mb-4">
                  エレガントなコーディネート
                </h4>
                <p className="text-sophisticated-500 text-sm leading-relaxed mb-4">
                  上品でスタイリッシュなスタイリングをご提案。
                  年齢を重ねても素敵に着こなせるアイテムを中心に組み合わせています。
                </p>
                <div className="h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                  <span className="text-sophisticated-500 text-sm">コーディネート写真</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                <h4 className="font-display font-medium text-brand-primary mb-4">
                  カジュアルなスタイル
                </h4>
                <p className="text-sophisticated-500 text-sm leading-relaxed mb-4">
                  日常使いできるリラックススタイル。
                  快適さと上品さを両立したアイテムをセレクトしています。
                </p>
                <div className="h-32 bg-gradient-to-br from-sophisticated-100 to-sophisticated-200 rounded-xl flex items-center justify-center">
                  <span className="text-sophisticated-500 text-sm">コーディネート写真</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                className="
                  px-6 py-3 rounded-full 
                  font-display text-sm
                  border-2 border-brand-accent text-brand-accent
                  bg-transparent hover:bg-brand-accent hover:text-white
                  shadow-sm hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  transition-all duration-200
                  focus:ring-4 focus:ring-brand-accent/30
                  focus:outline-none
                "
                onClick={() => {
                  alert('コーディネート一覧ページに移動します（将来実装予定）');
                }}
              >
                コーディネート一覧を見る
              </button>
            </div>
          </div>
        </section>

        {/* Access Section - Issue #7.5 */}
        <AccessInfo />

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
