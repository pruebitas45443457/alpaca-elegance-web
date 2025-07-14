
import { MapPin, Phone, Mail, MessageCircle, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const contactInfo = {
    address: "Av. Nro. 10 - H4, Urb. Larapa, San Jeronimo",
    city: "Exhibition and Commercial Office Cusco - Peru",
    poBox: "P. O. Box 808 Cusco - PERU",
    phones: [
      "+51 932 240 727",
      "+51 932 240 727", 
      "+51-951 146 747"
    ],
    emails: [
      "info@cuscostores.com",
      "cuscotrade@yahoo.com"
    ]
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ's", href: "#faq" },
    { name: "Partner Links", href: "#partners" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const productCategories = [
    "Fur Garments",
    "Winter Collections", 
    "Wool Clothing",
    "Wool Accessories",
    "Home Fur Rugs",
    "Pima Cotton",
    "Bears & Toys"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">CUSCO STORES</h3>
              <p className="text-gray-400 text-sm mb-4">
                Baby Alpaca Products Manufacturer and Exporter Company since 2007
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">Premium Quality Since 2007</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Cusco Stores is your wholesale suppliers of all kinds of baby alpaca products made in fabric, fiber, yarn, fur or mixed with them.
            </p>

            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">FREE SHIPPING Worldwide</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            
            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {contactInfo.address}<br />
                    {contactInfo.city}<br />
                    {contactInfo.poBox}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm mb-1"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  {contactInfo.emails.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm mb-1"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/51932240727', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-lg font-medium mb-4">Languages</h5>
              <div className="flex gap-4">
                <span className="text-gray-300 text-sm">Spain</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300 text-sm">English</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <h5 className="text-lg font-medium mb-2">Custom Orders</h5>
              <p className="text-gray-400 text-sm">
                We can make products in your own measurements, design, style, and colors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Cusco Stores. All rights reserved. Premium Baby Alpaca Products from Peru.
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Established 2007</span>
              <span>•</span>
              <span>Cusco, Peru</span>
              <span>•</span>
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
