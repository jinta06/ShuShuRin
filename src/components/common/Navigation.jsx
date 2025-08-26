const Navigation = ({ isOpen, onClose, className = '' }) => {
  const navigationItems = [
    { name: 'ホーム', href: '/', description: 'ShuShuRinトップページ' },
    { name: 'コンセプト', href: '/concept', description: '3つのコンセプト' },
    { name: 'コーディネート', href: '/coordinate', description: 'スタイリング写真' },
    { name: 'ブランドストーリー', href: '/brand-story', description: '姉妹の想い' },
    { name: 'アクセス', href: '/access', description: '店舗情報' },
    { name: 'お問い合わせ', href: '/contact', description: 'ご相談・ご質問' },
  ];

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30"
        onClick={onClose}
      />

      {/* Navigation Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${className}`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <h2 className="font-display text-lg font-semibold text-neutral-900">
              メニュー
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-warm-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="メニューを閉じる"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="block w-6 h-0.5 bg-neutral-900 rotate-45 absolute"></span>
                <span className="block w-6 h-0.5 bg-neutral-900 -rotate-45 absolute"></span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-4">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group block px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-neutral-900 group-hover:text-primary-600">
                      {item.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="p-6 border-t border-neutral-200">
            {/* Instagram Link */}
            <a
              href="https://instagram.com/shushurin_select"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 mb-4"
              onClick={handleLinkClick}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>

            {/* Brand Message */}
            <div className="text-center">
              <p className="text-xs text-neutral-500 leading-relaxed">
                年齢を脱ぐ、冒険を着る<br />
                姉妹で営む小さなセレクトショップ
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
