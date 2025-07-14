
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Award, Globe, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdvancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const slides = [
    {
      title: "WELCOME TO CUSCO STORES",
      subtitle: "Your Baby Alpaca Products Manufacturer and Exporter Company since 2007, from Cusco PERU",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
      overlay: "from-black/80 via-black/60 to-black/40",
      effect: "premium"
    },
    {
      title: "PREMIUM BABY ALPACA",
      subtitle: "Cusco Stores is your wholesale suppliers of all kinds of baby alpaca products made in fabric, fiber, yarn, fur or mixed with them",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80",
      overlay: "from-black/70 via-black/50 to-black/30",
      effect: "luxury"
    },
    {
      title: "ARTISAN CRAFTSMANSHIP",
      subtitle: "17+ years of excellence in creating the finest alpaca products with traditional Peruvian techniques",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80",
      overlay: "from-black/75 via-black/55 to-black/35",
      effect: "exclusive"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Images with Parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{
            transform: index === currentSlide ? 
              `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)` : 
              'none'
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`} />
          
          {/* Morphing shapes overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 morph"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/3 morph" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      ))}

      {/* Particle effect */}
      <div className="particle-bg absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl">
            <div className="slide-up">
              {/* Premium badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass-morphism flex items-center gap-2 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">Since 2007</span>
                </div>
                <div className="glass-morphism flex items-center gap-2 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">50+ Countries</span>
                </div>
                <div className="glass-morphism flex items-center gap-2 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">Premium Quality</span>
                </div>
                <div className="glass-morphism flex items-center gap-2 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">500+ Happy Clients</span>
                </div>
              </div>

              {/* Main title with typing effect */}
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight">
                <span className="block gradient-text">
                  {slides[currentSlide].title.split(' ').map((word, i) => (
                    <span 
                      key={i} 
                      className="inline-block slide-in-left"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed slide-in-right">
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons with advanced effects */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 px-12 py-8 text-xl font-bold rounded-full neo-brutalism transform transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Explore Premium Products
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group relative overflow-hidden border-2 border-white text-white hover:bg-white hover:text-black px-12 py-8 text-xl font-bold rounded-full transition-all duration-500 glass-effect"
                  onClick={() => window.open('https://wa.me/51932240727', '_blank')}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    WhatsApp Now
                  </span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Button>
              </div>

              {/* Urgency indicator */}
              <div className="mt-12 glass-morphism inline-block px-6 py-3 rounded-full countdown-urgency">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">🔥 Oferta Especial - Solo por tiempo limitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced slide indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`group relative transition-all duration-500 ${
                index === currentSlide ? 'w-12 h-4' : 'w-4 h-4'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white scale-125 premium-shadow' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`} />
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-300 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white text-sm mb-2 font-medium">Descubre más</span>
          <ChevronDown className="w-8 h-8 text-white pulse-glow" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/10 rounded-full float glass-effect"></div>
      <div className="absolute bottom-1/4 left-10 w-12 h-12 bg-white/10 rounded-full float glass-effect" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default AdvancedHeroSection;
