import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const layouts = [
  {
    title: 'U SHAPE',
    highlight: 'MODULAR KITCHEN DESIGN',
    image: '/u-shape-mod.png',
    to: '/kitchen/u-shaped-kitchen',
    desc: `A U-shaped kitchen design features three walls lined with cabinets and appliances. It's an efficient design that saves floor space.`,
    span: 1,
  },
  {
    title: 'L SHAPE',
    highlight: 'MODULAR KITCHEN DESIGN',
    image: '/l-shape-mod.png',
    to: '/kitchen/l-shaped-kitchen',
    desc: `The L-shaped kitchen is one of the most efficient layouts for modern kitchens. L-shaped Kitchens are a great way to organize your space and make it easy.`,
    span: 2, // <- this one spans 2 columns
  },
  {
    title: 'G SHAPE',
    highlight: 'MODULAR KITCHEN DESIGN',
    image: '/g-shape-mod.png',
    to: '/kitchen/g-shaped-kitchen',
    desc: `As the name suggests, G shaped kitchens have four sides resembling the letter 'G.' It's very similar to U-shaped kitchens, except there is usually a fourth dimension that adds extra countertop or dining space.`,
    span: 1,
  },
  {
    title: 'ISLAND',
    highlight: 'MODULAR KITCHEN DESIGN',
    image: '/island-mod.png',
    to: '/kitchen/island-kitchen',
    desc: `A kitchen island is a unit that can be freestanding and used to enhance the functionality and appearance of your cooking space. Traditional units are rectangular, with one section being used as a breakfast counter.`,
    span: 1,
  },
  {
    title: 'PARALLEL',
    highlight: 'MODULAR KITCHEN DESIGN',
    image: '/para-mod.png',
    to: '/kitchen/parallel-kitchen',
    desc: `Parallel kitchens are a classic design that consists of two walls and a passageway. It is packed with wall cabinets and base cabinets on each side. This layout is easy to design, as there isn't enough space for corner cabinets.`,
    span: 1,
  },
];

const KitchenLayouts = () => {
  return (
    <section id="layouts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Kitchen Layout Designs</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the perfect layout for your dream kitchen</p>
        </div>

        {/* Grid: make item #2 wider but keep the same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layouts.map((layout) => (
            <article
              key={layout.title}
              className={`group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                          ${layout.span === 2 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* FIXED HEIGHT so height doesn't grow when width doubles */}
              <div className="relative w-full h-64 sm:h-72 lg:h-72 xl:h-80 overflow-hidden">
                <img
                  src={layout.image}
                  alt={layout.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {layout.title} <span className="text-[#e9212e]">{layout.highlight}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{layout.desc}</p>

                <div className="mt-6">
                  <Link
                    to={layout.to}
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

export default KitchenLayouts;