
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  if (!visible) return null;
  
  return (
    <div className="fixed inset-0 bg-hexra-dark z-50 flex items-center justify-center flex-col">
      <div className="loading-logo mb-4">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white"
          style={{
            background: 'linear-gradient(45deg, #9b87f5, #1EAEDB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          HEXRA.CLOUD
        </h1>
      </div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-hexra-purple to-hexra-blue animate-gradient-flow" style={{width: '100%'}}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
