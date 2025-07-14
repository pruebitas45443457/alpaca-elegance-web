
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "The quality of the baby alpaca products from Cusco Stores is absolutely exceptional. I've been ordering for my boutique for over 3 years and my customers always come back for more. The craftsmanship is unmatched!",
      product: "Baby Alpaca Scarves",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Wilson",
      location: "London, UK", 
      rating: 5,
      text: "Outstanding service and premium quality products. The baby alpaca fur rugs we ordered exceeded our expectations. The attention to detail and customer service is remarkable. Highly recommended for anyone seeking luxury alpaca products.",
      product: "Baby Alpaca Fur Rugs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Isabella Chen",
      location: "New York, USA",
      rating: 5,
      text: "Cusco Stores has been our trusted supplier for baby alpaca products for years. The consistency in quality and the ability to customize orders to our specifications makes them invaluable business partners.",
      product: "Custom Baby Alpaca Garments",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Henri Dubois",
      location: "Paris, France",
      rating: 5,
      text: "The baby alpaca teddy bears and toys are absolutely adorable and of the highest quality. My children love them, and as a parent, I appreciate the natural, safe materials used in their creation.",
      product: "Alpaca Teddy Bears",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sofia Andersson",
      location: "Stockholm, Sweden",
      rating: 5,
      text: "The winter collection from Cusco Stores keeps us warm during the harsh Nordic winters. The baby alpaca sweaters and accessories are not only functional but also incredibly stylish.",
      product: "Winter Collection",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by customers worldwide for premium baby alpaca products since 2007
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-200" />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-black">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].location}
                      </p>
                      <p className="text-sm text-gray-500">
                        Purchased: {testimonials[currentTestimonial].product}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:bg-black hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:bg-black hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">17+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">1000+</div>
            <div className="text-gray-600">Products Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
