import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Coordinate from './pages/Coordinate';
import BrandStory from './pages/BrandStory';
import Contact from './pages/Contact';
import { trackPageView, trackSearchIntent } from './utils/analytics';

// GA4ページビュー追跡コンポーネント
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時にGA4に送信
    trackPageView(location.pathname, document.title);
    
    // 検索流入の追跡
    trackSearchIntent();
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-secondary">
        {/* GA4ページビュー追跡 */}
        <PageTracker />
        
        {/* Header Component */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/coordinate" element={<Coordinate />} />
          <Route path="/brand-story" element={<BrandStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;