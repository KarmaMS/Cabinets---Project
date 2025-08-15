import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const products = [
  {
    title: 'MODULAR WARDROBE',
    highlight: 'WARDROBE',
    image: "/mod-k.png",
    to: '/products/modular-wardrobe',
    description: 'Explore the range of walk-in closets, sliding doors, openable shutter wardrobes to beautify your home interior.'
  },
  {
    title: 'TV PANEL',
    highlight: 'PANEL',
    image: "/tv-p.png",
    to: '/products/tv-panel',
    description: 'Explore the variety of elegant TV panel designs to give a unique look at your living area.'
  },
  {
    title: 'BATHROOM VANITY',
    highlight: 'VANITY',
    image: "/bath-v.png",
    to: '/products/bathroom-vanity',
    description: 'Stylish and spacious bathroom vanity with contemporary designs to improve the functionality.'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title Section */}
        <div className="text-center mb-20 relative">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#e9212e]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#e9212e]/5 rounded-full blur-3xl animate-pulse delay-300"></div>
          
          {/* Main Title */}
          <div className="relative">
            <span className="inline-block text-sm font-semibold text-[#e9212e] tracking-wider uppercase mb-2 opacity-0 animate-fadeIn">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fadeIn animation-delay-200">
              Modular Kitchen
              <span className="relative inline-block ml-2">
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#e9212e] transform origin-left scale-x-0 animate-scaleIn animation-delay-400"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 opacity-0 animate-fadeIn animation-delay-400">
              Transform your kitchen into a masterpiece of design and functionality. Our modular solutions blend aesthetics with efficiency, creating spaces that inspire culinary creativity.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {product.title.split(product.highlight)[0]}
                  <span className="text-[#e9212e]">{product.highlight}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6">
                  <Link
                    to={product.to}
                    className="inline-flex items-center text-[#e9212e] font-semibold transition-transform duration-300 group-hover:translate-x-2"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;