
import { useState, useEffect } from 'react';
import { X, Gift, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConversionBooster = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 30000); // Mostrar después de 30 segundos
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-md mx-4 glass-morphism rounded-3xl p-8 text-center animate-scale-in premium-shadow">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
            <Gift className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">
            🎉 ¡Oferta Exclusiva!
          </h3>
          
          <p className="text-white/90 text-lg">
            <strong>15% DE DESCUENTO</strong> en tu primera compra
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="font-bold text-xl countdown-urgency">
              {formatTime(timeLeft)}
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>127 personas viendo</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span>Stock limitado</span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.open('https://wa.me/51932240727?text=Hola! Me interesa la oferta del 15% de descuento', '_blank')}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
        >
          🚀 Reclamar Descuento Ahora
        </Button>

        <p className="text-xs text-white/60 mt-3">
          * Válido solo para nuevos clientes. Oferta por tiempo limitado.
        </p>
      </div>
    </div>
  );
};

export default ConversionBooster;
