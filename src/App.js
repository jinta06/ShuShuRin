import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Coordinate from './pages/Coordinate';
import BrandStory from './pages/BrandStory';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-secondary">
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