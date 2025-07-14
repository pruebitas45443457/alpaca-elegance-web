
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AdvancedHeroSection from '@/components/AdvancedHeroSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import MouseFollower from '@/components/MouseFollower';
import ConversionBooster from '@/components/ConversionBooster';
import SocialProof from '@/components/SocialProof';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      <MouseFollower />
      <SocialProof />
      <ConversionBooster />
      
      <Header />
      <AdvancedHeroSection />
      <ProductsShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
