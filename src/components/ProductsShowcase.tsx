
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Sparkles, Zap } from 'lucide-react';

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
      image: "/lovable-uploads/cdb5dbdf-a66d-4f41-86b9-785d0eac2581.png",
      description: "Luxurious handcrafted rugs with natural alpaca patterns",
      tag: "Best Seller",
      price: "From $299"
    },
    {
      name: "Baby Alpaca Fur Bedspreads", 
      image: "/lovable-uploads/cdb5dbdf-a66d-4f41-86b9-785d0eac2581.png",
      description: "Ultimate comfort for your bedroom with premium alpaca fur",
      tag: "Premium",
      price: "From $599"
    },
    {
      name: "Baby Alpaca Fur Garments",
      image: "/lovable-uploads/80da382c-7d5b-4131-a7b3-2c38b603c625.png",
      description: "Elegant fur clothing collection for sophisticated style",
      tag: "Luxury",
      price: "From $899"
    },
    {
      name: "Baby Alpaca Fashionable Fur Handbags",
      image: "/lovable-uploads/04f7c07a-c9bf-48e3-ac5a-56c38d453b60.png",
      description: "Stylish and functional accessories made from premium alpaca fur",
      tag: "Fashion",
      price: "From $459"
    },
    {
      name: "Adorable Alpaca Teddy Bears",
      image: "/lovable-uploads/81cd418a-7857-4229-9bb7-047d2ad275b5.png",
      description: "Handcrafted toys for all ages, made with love in Peru",
      tag: "Gift",
      price: "From $89"
    },
    {
      name: "Luxury Baby Alpaca Fur Trim Clothes",
      image: "/lovable-uploads/35a34a5f-932a-4657-844f-8305d856b578.png",
      description: "Sophisticated fashion pieces with alpaca fur details",
      tag: "Elite",
      price: "From $749"
    },
    {
      name: "Baby Alpaca Tanned Hides",
      image: "/lovable-uploads/cab5e02e-a886-44ed-9fa5-63935b14ef58.png",
      description: "Premium quality tanned hides for luxury applications",
      tag: "Artisan",
      price: "From $399"
    },
    {
      name: "Baby Alpaca Fur Slippers",
      image: "/lovable-uploads/5b6d4e9f-fa6e-4fee-9e3a-44863b47fca2.png",
      description: "Comfortable and warm footwear for ultimate comfort",
      tag: "Comfort",
      price: "From $159"
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-black animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold text-black gradient-text">
              Nuestros Productos Más Vendidos
            </h2>
            <Sparkles className="w-8 h-8 text-black animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos una empresa productora y exportadora, capaces de fabricar productos a tu medida, diseño, estilo, colores
            y todo en pura baby alpaca: piel, tela, lana o con ribetes de piel
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="glass-morphism px-6 py-4 rounded-full">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-black">17+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="glass-morphism px-6 py-4 rounded-full">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-sm text-gray-600">Clientes Felices</div>
                </div>
              </div>
            </div>
            <div className="glass-morphism px-6 py-4 rounded-full">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                <div>
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-sm text-gray-600">Países Atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {productCategories.map((category, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                category.featured ? 'border-2 border-black shadow-lg' : 'border border-gray-200'
              } neo-brutalism`}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-black transition-colors relative z-10">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm relative z-10">{category.count}</p>
                {category.featured && (
                  <Badge variant="secondary" className="mt-3 bg-black text-white relative z-10">
                    Destacado
                  </Badge>
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
              <Card className="overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 neo-brutalism">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      hoveredProduct === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Price overlay */}
                  <div className={`absolute top-4 right-4 glass-morphism px-3 py-2 rounded-full transition-all duration-500 ${
                    hoveredProduct === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}>
                    <span className="text-white font-bold text-sm">{product.price}</span>
                  </div>
                  
                  <Badge 
                    className="absolute top-4 left-4 bg-white text-black font-semibold shadow-lg"
                    variant="secondary"
                  >
                    {product.tag}
                  </Badge>
                  
                  {/* Hover overlay content */}
                  <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
                    hoveredProduct === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <button className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">{product.price}</span>
                    <span className="text-sm text-green-600 font-medium">Envío Gratis</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Free Shipping Banner */}
        <div className="mt-20 relative overflow-hidden">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-12 rounded-2xl text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-white">
                🚚 Envío GRATIS a Todo el Mundo
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Disfruta de envío gratuito en todos nuestros productos premium de baby alpaca
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="glass-morphism px-6 py-3 rounded-full">
                  <span className="font-semibold">🌍 50+ Países</span>
                </div>
                <div className="glass-morphism px-6 py-3 rounded-full">
                  <span className="font-semibold">📦 Empaque Seguro</span>
                </div>
                <div className="glass-morphism px-6 py-3 rounded-full">
                  <span className="font-semibold">⚡ Envío Rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
