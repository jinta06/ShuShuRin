import { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-brand-secondary shadow-sm relative z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* ShuShuRin Logo */}
            <div className="flex items-center">
              <Logo 
                showText={true} 
                color="black" 
                size="md" 
                className="cursor-pointer"
              />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
              aria-label="メニューを開く"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-brand-primary transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-brand-primary transition-all duration-300 mt-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-brand-primary transition-all duration-300 mt-1 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-xs bg-brand-secondary shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
              aria-label="メニューを閉じる"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="block w-6 h-0.5 bg-brand-primary rotate-45 absolute"></span>
                <span className="block w-6 h-0.5 bg-brand-primary -rotate-45 absolute"></span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <a
              href="/"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              ホーム
            </a>
            <a
              href="/concept"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              コンセプト
            </a>
            <a
              href="/coordinate"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              コーディネート
            </a>
            <a
              href="/brand-story"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              ブランドストーリー
            </a>
            <a
              href="/access"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              アクセス
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-lg font-elegant font-medium text-brand-primary hover:bg-accent-50 hover:text-brand-accent rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              お問い合わせ
            </a>
          </div>

          {/* Instagram Link */}
          <div className="mt-8 pt-6 border-t border-sophisticated-100">
            <a
              href="https://instagram.com/shushurin_select"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 text-base text-sophisticated-500 hover:text-brand-accent transition-colors duration-200"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
