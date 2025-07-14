
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
