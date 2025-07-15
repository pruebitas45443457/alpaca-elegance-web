
import { useState, useEffect } from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const SocialProof = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    message: string;
    time: string;
    location: string;
    visible: boolean;
  }>>([]);

  const products = [
    "Baby Alpaca Fur Rugs",
    "Baby Alpaca Fur Bedspreads", 
    "Baby Alpaca Fur Garments",
    "Baby Alpaca Fashionable Fur Handbags",
    "Adorable Alpaca Teddy Bears",
    "Luxury Baby Alpaca Fur Trim Clothes",
    "Baby Alpaca Tanned Hides",
    "Baby Alpaca Fur Slippers"
  ];

  const locations = [
    "New York, USA", "London, UK", "Tokyo, Japan", "Paris, France",
    "Sydney, Australia", "Toronto, Canada", "Berlin, Germany", "Madrid, Spain",
    "Rome, Italy", "Amsterdam, Netherlands", "Stockholm, Sweden", "Oslo, Norway"
  ];

  const names = [
    "Maria", "John", "Sarah", "Carlos", "Emma", "David", "Ana", "Michael",
    "Isabella", "James", "Sofia", "Robert", "Carmen", "William", "Lucia"
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const timeAgo = Math.floor(Math.random() * 30) + 1;
      
      const newNotification = {
        id: Date.now(),
        message: `${randomName} just purchased ${randomProduct}`,
        time: `${timeAgo} min ago`,
        location: randomLocation,
        visible: true
      };

      setNotifications(prev => {
        const updated = [newNotification, ...prev.slice(0, 2)];
        return updated;
      });

      // Hide notification after 6 seconds
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(notif => 
            notif.id === newNotification.id 
              ? { ...notif, visible: false }
              : notif
          )
        );
      }, 6000);

      // Remove notification after fade out
      setTimeout(() => {
        setNotifications(prev => 
          prev.filter(notif => notif.id !== newNotification.id)
        );
      }, 7000);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Then show notifications every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`glass-morphism border border-white/20 rounded-lg p-4 shadow-2xl transform transition-all duration-700 ${
            notification.visible 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-full opacity-0 scale-95'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="text-xs font-medium text-green-400 uppercase tracking-wide">
                  Nueva Venta
                </span>
              </div>
              
              <p className="text-sm font-medium text-white leading-tight mb-2">
                {notification.message}
              </p>
              
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>{notification.time}</span>  
                <span>{notification.location}</span>
              </div>
            </div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default SocialProof;
