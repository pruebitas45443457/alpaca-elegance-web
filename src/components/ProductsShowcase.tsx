
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductsShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const productCategories = [
    { name: "Fur Garments", count: "15+ Items", featured: true },
    { name: "Winter Collections", count: "25+ Items", featured: false },
    { name: "Wool Clothing", count: "30+ Items", featured: true },
    { name: "Wool Accessories", count: "20+ Items", featured: false },
    { name: "Home Fur Rugs", count: "12+ Items", featured: true },
    { name: "Home Shopping", count: "18+ Items", featured: false },
    { name: "Pima Cotton", count: "22+ Items", featured: false },
    { name: "Bears & Toys", count: "10+ Items", featured: true },
  ];

  const featuredProducts = [
    {
      name: "Baby Alpaca Fur Rugs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      description: "Luxurious handcrafted rugs",
      tag: "Best Seller"
    },
    {
      name: "Baby Alpaca Fur Bedspreads",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      description: "Ultimate comfort for your bedroom",
      tag: "Premium"
    },
    {
      name: "Baby Alpaca Fur Pillows Cushions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      description: "Soft and elegant decorative pillows",
      tag: "Popular"
    },
    {
      name: "Baby Alpaca Fur Hats",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Stylish winter accessories",
      tag: "New"
    },
    {
      name: "Baby Alpaca Fur Slippers Boots",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      description: "Comfortable and warm footwear",
      tag: "Comfort"
    },
    {
      name: "Baby Alpaca Tanned Hides Wool",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "Premium quality tanned hides",
      tag: "Artisan"
    },
    {
      name: "Baby Alpaca Fur Garment",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Elegant fur clothing collection",
      tag: "Luxury"
    },
    {
      name: "Baby Alpaca Fashionable Fur Handbags",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      description: "Stylish and functional accessories",
      tag: "Fashion"
    },
    {
      name: "Adorable Alpaca Teddy Bears",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted toys for all ages",
      tag: "Gift"
    },
    {
      name: "Luxury Baby Alpaca Fur Trim Clothes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Sophisticated fashion pieces",
      tag: "Elite"
    },
    {
      name: "Baby Alpaca Sweaters",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      description: "Warm and comfortable knitwear",
      tag: "Classic"
    },
    {
      name: "Baby Alpaca Fashion Scarves",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "Elegant accessories for any season",
      tag: "Trendy"
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our most looking and sold products and items
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Remember We are producer and exporter company, able to make in your own measurements, design, style, colors
            and all in pure baby alpaca as: fur, fabric, wool or fur trimmed
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {productCategories.map((category, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                category.featured ? 'border-black' : 'border-gray-200'
              }`}
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-black transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
                {category.featured && (
                  <Badge variant="secondary" className="mt-2">Featured</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-64 object-cover transition-all duration-700 ${
                      hoveredProduct === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <Badge 
                    className="absolute top-4 left-4 bg-white text-black"
                    variant="secondary"
                  >
                    {product.tag}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Free Shipping Banner */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            All retail sales are FREE SHIPPING Worldwide
          </h3>
          <p className="text-lg text-gray-300">
            Enjoy complimentary shipping on all our premium baby alpaca products
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
