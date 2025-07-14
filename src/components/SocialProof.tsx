
import { useState, useEffect } from 'react';
import { Star, MapPin, ShoppingBag, CheckCircle } from 'lucide-react';

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  const notifications = [
    {
      name: "María García",
      location: "Madrid, España",
      product: "Alpaca Fur Rug",
      time: "2 min",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Wilson", 
      location: "London, UK",
      product: "Baby Alpaca Scarf",
      time: "5 min",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sofia Andersson",
      location: "Stockholm, Sweden", 
      product: "Alpaca Sweater",
      time: "8 min",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Mendoza",
      location: "Buenos Aires, Argentina",
      product: "Alpaca Teddy Bear",
      time: "12 min",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <div className={`transition-all duration-500 transform ${
        showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="glass-morphism rounded-2xl p-4 premium-shadow">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={notifications[currentNotification].avatar}
                alt={notifications[currentNotification].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 mb-1">
                <span className="font-semibold text-white text-sm truncate">
                  {notifications[currentNotification].name}
                </span>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-xs text-white/80 mb-1">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{notifications[currentNotification].location}</span>
              </div>
              
              <div className="flex items-center space-x-1 text-xs text-white/90">
                <ShoppingBag className="w-3 h-3" />
                <span className="truncate">Compró: {notifications[currentNotification].product}</span>
              </div>
            </div>
            
            <div className="text-xs text-white/60">
              {notifications[currentNotification].time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
