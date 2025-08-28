import Logo from './Logo';

const Loading = ({ message = '読み込み中...', fullScreen = false }) => {
  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center">
      {/* Sophisticated Loading Animation */}
      <div className="mb-8">
        <div className="relative w-20 h-20">
          {/* Minimalist spinning border */}
          <div className="absolute inset-0 border-2 border-transparent border-t-brand-accent rounded-full animate-spin"></div>
          <div className="absolute inset-1 border-2 border-transparent border-r-brand-gold rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo 
              showText={false} 
              color="gold" 
              size="sm" 
              className="animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* Professional Loading Text */}
      <div className="text-center">
        <p className="text-brand-primary text-sm font-elegant font-medium tracking-wide mb-2">
          {message}
        </p>
        {/* Minimalist progress indicator */}
        <div className="flex justify-center space-x-1">
          <div className="w-1 h-1 bg-brand-accent rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-brand-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 h-1 bg-brand-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-brand-secondary flex items-center justify-center z-50">
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
