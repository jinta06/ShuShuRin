import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Modal from './components/ui/Modal';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal demo functions
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-brand-secondary">
        {/* Header Component */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
        </Routes>

        {/* Testing UI Components - 開発時のみ表示（後で削除） */}
        {process.env.NODE_ENV === 'development' && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-display text-brand-primary mb-8 text-center">
                Testing UI Components (Development Only)
              </h2>
              
              <div className="space-y-6">
                {/* Loading Demo */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-primary">Loading</h3>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 2000);
                    }}
                    fullWidth
                  >
                    Test Loading (2s)
                  </Button>
                </div>

                {/* Modal Demo */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-primary">Modal</h3>
                  <Button 
                    variant="secondary" 
                    onClick={() => setIsModalOpen(true)}
                    fullWidth
                  >
                    Open Modal
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer Component */}
        <Footer />

        {/* Loading Demo */}
        {isLoading && (
          <Loading 
            message="ShuShuRinローディング中..." 
            fullScreen={true} 
          />
        )}

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
    </Router>
  );
}

export default App;