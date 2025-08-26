const Loading = ({ message = '読み込み中...', fullScreen = false }) => {
  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center">
      {/* ShuShuRin Logo Animation */}
      <div className="mb-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-100 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-16 h-16 border-t-4 border-primary-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 w-12 h-12 border-2 border-secondary-200 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 w-12 h-12 border-r-2 border-secondary-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
      </div>

      {/* Brand Name */}
      <div className="mb-4">
        <h2 className="font-display text-xl font-bold text-primary-600 animate-pulse">
          ShuShuRin
        </h2>
      </div>

      {/* Loading Message */}
      <p className="text-neutral-500 text-sm font-medium animate-pulse">
        {message}
      </p>

      {/* Loading Dots */}
      <div className="flex space-x-1 mt-4">
        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-warm-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-warm-50 flex items-center justify-center z-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
