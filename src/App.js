import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Loading demo function
  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-6 leading-tight">
              年齢を脱ぐ、<br />
              冒険を着る
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              ShuShuRinは、姉妹で営む小さなセレクトショップ。<br />
              「着てみたい」と思える一着との出会いが、<br />
              あなたの毎日を少しだけ特別にしてくれるはず。<br />
              今まで選ばなかった色、形、スタイルにも、<br />
              そっと手を伸ばせるように。
            </p>
            <button className="btn-primary mb-8">
              コンセプトを見る
            </button>
          </div>
        </section>

        {/* Component Demo Section */}
        <section className="px-4 py-8 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-6">
              🎉 共通コンポーネント完成！
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-primary-50 rounded-lg text-left">
                <h4 className="font-semibold text-primary-900 mb-2">✅ Header</h4>
                <p className="text-sm text-primary-700">
                  ロゴ・ハンバーガーメニュー・ナビゲーション機能
                </p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg text-left">
                <h4 className="font-semibold text-secondary-900 mb-2">✅ Footer</h4>
                <p className="text-sm text-secondary-700">
                  Instagram DM案内・ブランドメッセージ・コピーライト
                </p>
              </div>
              
              <div className="p-4 bg-warm-50 rounded-lg text-left border">
                <h4 className="font-semibold text-neutral-900 mb-2">✅ Navigation</h4>
                <p className="text-sm text-neutral-700">
                  スマホ用スライドアウトメニュー（Headerに組み込み済み）
                </p>
              </div>
              
              <div className="p-4 bg-neutral-50 rounded-lg text-left">
                <h4 className="font-semibold text-neutral-900 mb-2">✅ Loading</h4>
                <p className="text-sm text-neutral-700">
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

            <p className="text-neutral-500 text-sm">
              右上のメニューボタンでナビゲーションを試してみてください！<br />
              次は Phase 3: ホームページ実装に進みます 🚀
            </p>
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
    </div>
  );
}

export default App;
