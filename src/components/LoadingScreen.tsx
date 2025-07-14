
import { useState, useEffect } from 'react';
import { Sparkles, Zap } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Preparando experiencia premium...",
    "Cargando productos de alpaca baby...",
    "Activando magia peruana...",
    "¡Casi listo para sorprenderte!"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="particle-bg absolute inset-0"></div>
      
      <div className="relative z-10 text-center">
        {/* Logo animado */}
        <div className="mb-8 relative">
          <div className="text-6xl font-bold text-white gradient-text mb-4 float">
            CUSCO STORES
          </div>
          <div className="flex justify-center space-x-2">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <Zap className="w-6 h-6 text-white animate-bounce" />
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-6 premium-shadow">
          <div 
            className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Texto dinámico */}
        <div className="text-white text-lg font-medium typing-animation h-8">
          {loadingTexts[currentText]}
        </div>

        {/* Porcentaje */}
        <div className="text-white text-4xl font-bold mt-4 pulse-glow">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
