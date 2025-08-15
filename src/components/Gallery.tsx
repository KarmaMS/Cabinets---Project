import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const wardrobes = [
  {
    title: 'SLIDING DOOR',
    highlight: 'WARDROBE',
    image: '/S-D-W.png',
    to: '/wardrobe/sliding-doors',
    desc:
      "A sliding door wardrobe is an essential piece of bedroom furniture. These wardrobes will enhance your bedroom's decor and offer ample storage space to store your clothes, accessories, as well as beauty products.",
    span: 1,
  },
  {
    title: 'OPENABLE SHUTTER',
    highlight: 'WARDROBE',
    image: '/O-S-W.png',
    to: '/wardrobe/openable-shutter',
    desc:
      'Give your home the attention it deserves with a timeless openable shutter wardrobe. This shutter is well-known for its classic design and high-quality craftsmanship.',
    span: 1,
  },
  {
    title: 'WALK IN CLOSET',
    highlight: 'WARDROBE',
    image: '/W-C-W.png',
    to: '/wardrobe/walk-in-closet',
    desc:
      'You have many options for design and placement when it comes to walk-in wardrobes. Many homeowners today need a well-equipped closet.',
    span: 1,
  },
];

const WardrobeLayouts = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gray-800">TYPES OF </span>
            <span className="text-[#e9212e] font-medium">MODULAR WARDROBE</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Bedroom wardrobes are a great place to store clothes and accessories.
          </p>
        </div>

        {/* Grid: item #2 spans 2 columns on md+; height stays consistent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wardrobes.map(({ title, highlight, image, to, desc, span }) => (
            <article
              key={title}
              className={`group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                          ${span === 2 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* FIXED HEIGHT so the row height doesn’t change when width doubles */}
              <div className="relative w-full h-64 sm:h-72 lg:h-72 xl:h-80 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {title} <span className="text-[#e9212e]">{highlight}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>

                <div className="mt-6">
                  <Link
                    to={to}
                    className="inline-flex items-center text-[#e9212e] font-semibold transition-transform duration-300 group-hover:translate-x-2"
                  >
                    Explore Design
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WardrobeLayouts;