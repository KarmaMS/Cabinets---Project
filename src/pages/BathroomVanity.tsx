import React, { useEffect, useRef } from 'react';

const BathroomVanity = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        
        if (isVisible) {
          section.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/vanitymainbanner.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
              VANITY DESIGNS
            </h1>
            <p className="text-xl md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Style, storage & a splash of luxury - Cabinets bathroom vanities made to fit your space, your budget, your routine.
            </p>
          </div>
        </div>
      </div>

      {/* Panel Styles */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-gray-800">BATHROOM </span>
              <span className="text-[#e9212e] font-medium">VANITY DESIGN</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">A bathroom vanity can be among the most important focal points in every bathroom. You can add style and practicality to your bathroom by installing the latest bathroom vanity by the Cabinets. You can choose a double sink or single sink vanity, bathroom vanity with top or not; we've got you covered with a wide range of colors, sizes, and styles to meet the budget of your requirements. </p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">

            {/* image column */}
            <figure className="md:order-1 order-2">
              <div className="relative w-full pb-[60%] rounded-md overflow-hidden shadow-lg">
                <img
                  src="/Vanity/03.jpg"
                  alt="Modern marble-backdrop vanity with round back-lit mirror"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* text column */}
            <div className="md:order-2 md:col-span-2 text-left">
              <div>
                <h2 className="text-6xl sm:text-2xl font-extrabold mb-8">
                  How Do I Choose a&nbsp;Bathroom Vanity?
                </h2>

                <p className="text-l leading-relaxed text-gray-500">
                  One of the most important aspects to consider when selecting the right
                  bathroom vanity is&nbsp;<strong>size</strong>. You want a cabinet that meets
                  your storage needs yet still leaves enough clearance to move freely.
                  Standard widths run from&nbsp;<strong>18&nbsp;inches</strong> for compact
                  powder-room vanities up to&nbsp;<strong>72&nbsp;inches&nbsp;+</strong> for
                  double-sink master suites. Depth typically falls between
                  <strong>&nbsp;17&nbsp;-&nbsp;24&nbsp;inches</strong>, while the most
                  comfortable height is about&nbsp;<strong>30 - 35 inches</strong>.
                  At&nbsp;<span className="font-semibold">Cabinets</span> you can
                  customise every element—style, colour, countertop, single or double sink—to
                  create a bathroom vanity that fits your space as perfectly as it fits your
                  routine.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Symmetry Spa Vanity',
                description: 'Twin back-lit columns flank a central mirror; warm beige tones create a hotel-suite calm.',
                image: '/Vanity/04.jpg'
              },
              {
                title: 'Carrara Niche Wall',
                description: 'Seamless white-marble slab with a recessed shelf and wall-hung basin for ultra-clean luxury.',
                image: '/Vanity/05.jpg'
              },
              {
                title: 'Monochrome Minimalist',
                description: 'Matte-black cabinetry and crisp white counter deliver a clutter-free, contemporary look.',
                image: '/Vanity/06.jpg'
              },
              {
                title: 'Dual-Zone Grooming Suite',
                description: 'Contrasting black &-white vanity with side seating alcove and magenta accent for lounge-style comfort.',
                image: '/Vanity/07.jpg'
              },
              {
                title: 'Industrial Stone Loft',
                description: 'Rugged slate tiles meet a floating charcoal vanity—perfect for urban, warehouse-inspired baths.',
                image: '/Vanity/08.jpg'
              },
              {
                title: 'His-and-Hers Tower Unit',
                description: 'Wide double vanity with central drawer tower and ambient cove lights for shared routines.',
                image: '/Vanity/09.jpg'
              },
              {
                title: 'Metal-Mosaic Feature Wall',
                description: 'Pixelated stainless tiles reflect light onto a minimalist taupe counter and vessel basin.',
                image: '/Vanity/10.jpg'
              },
              {
                title: 'Plum-Gloss Statement',
                description: 'High-gloss aubergine drawers and twin round mirrors inject bold colour into modern baths.',
                image: '/Vanity/11.jpg'
              },
              {
                title: 'Walnut Twin Classic',
                description: 'Rich woodgrain double vanity with framed mirrors adds timeless warmth and storage.',
                image: '/Vanity/12.jpg'
              },
              {
                title: 'Fresh White Cantilever',
                description: 'Pure-white floating cabinet against a zingy green wall keeps small bathrooms airy.',
                image: '/Vanity/13.jpg'
              },
              {
                title: 'Charcoal Elegance',
                description: 'Graphite shaker doors, marble top and brass sconces give understated sophistication.',
                image: '/Vanity/14.jpg'
              },
              {
                title: 'Retro Tangerine Twin',
                description: 'Mid-century twin vanity pops against a vibrant orange backdrop—fun yet functional.',
                image: '/Vanity/15.jpg'
              }                                                                                                
            ].map((style, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-2">{style.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {style.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

      </div>

      {/* Features */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="py-20 bg-gray-50 opacity-0"
      >

      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* left image */}
            <figure className="md:order-1 order-2">
              <div className="relative w-full pb-[75%] shadow-lg rounded-md overflow-hidden">
                <img
                  src="/Vanity/01.jpg"
                  alt="Wall-mounted marble vanity with oval back-lit mirror"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* centred text */}
            <div className="md:order-2 order-1 text-center">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-xl font-extrabold tracking-tight">
                  <span className="text-gray-800">BATHROOM VANITY </span>
                  <span className="text-[#e9212e] font-medium">DESIGN TYPES</span>
                </h2>
                <p className="mt-4 text-l text-gray-500">If you decide to go with the traditional look or a custom Bathroom vanity design, before you begin, make sure there is enough space to achieve the design you're looking for. A bathroom vanity typically includes the sink, countertop, and storage area for linens, toiletries, and mirrors. Bathroom vanity design comes in six fundamental kinds: a pedestal, a freestanding floating vessel, an under-mounted sink, and a cabinet.</p>
              </div>
            </div>

            {/* right image */}
            <figure className="md:order-3 order-3">
              <div className="relative w-full pb-[75%] shadow-lg rounded-md overflow-hidden">
                <img
                  src="/Vanity/02.jpg"
                  alt="Modern floating vanity with ribbed drawers and back-lit mirror cabinets"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </figure>

          </div>
        </section>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'PEDE',
                title2: 'STAL',
                description: 'It requires very little space. Pedestal sinks are the most basic type, with no counter or space to store things. Its a sink and basin. However, it can fit in with any style of home and is simple to set up'
              },
              {
                title: 'FREE ',
                title2: '- STANDING',
                description: 'Like pedestals, the freestanding vanity features a slim profile but can be found in a rectangular or square form to accommodate two sinks ideal for bathrooms with masters.',
              },
              {
                title: 'FLOA',
                title2: 'TING',
                description: 'A wall-mounted vanity, sometimes called floating, is installed (securely) on the bathroom wall. It gives your bathroom an open, modern appearance with space beneath. If you do not have a lot of storage space, then you can include countertops. ',
              },
              {
                title: 'VES',
                title2: 'SEL',
                description: 'This design is placed on top of your counter, with an oversized bowl positioned above the sink, and features an additional tap. A vessel sink is extremely intricate with intricate designs and patterns and is made of porcelain or steel',
              },
              {
                title: 'UNDER-MOUNTED',
                title2: ' SINK',
                description: 'A sink that is under-mounted has an integrated basin that is mounted beneath the countertop of the vanity. The style is elegant, sleek appearance; however, it has a limited area underneath the sink and can be more difficult to set up.',
              },
              {
                title: 'CAB',
                title2: 'INET',
                description: 'A vanity cabinet can be made similar to kitchen cabinets, with drawers that pull out that can be made to order to fit your storage needs, available in various hardware and door styles. ',
              }              
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">         
                    <span className="text-gray-800">{feature.title}</span>
                    <span className="text-[#e9212e]">{feature.title2}</span>
                  </h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mt-12 text-xl text-gray-500">It is not a specific type however, you could consider an island vanity to make the most of your limited space if you have small bathrooms. When you've decided on the kind and dimension of your vanity, you'll have to pick the material and design of the doors (unless the vanity is a pedestal) and the best countertop.</p>
          <p className="mt-4 text-xl text-gray-500">With the variety of bathroom vanities options, there's a good chance you'll discover one that matches your style and design. From rustic bathroom vanities, contemporary vanity vanities for bathrooms, from farmhouse designs and industrial bathroom vanities, there are a variety of fantastic designs of vanities to choose from for your bathroom.</p>
          <p className="mt-4 text-xl text-gray-500">Color is another factor to consider. Perhaps you're looking to get the look of gray bathroom vanity. An updated, contemporary look from vanity cabinets in black to light brown and all colors between, you're bound to discover what you're looking for.</p>
          <div className="text-center mb-4 mt-12">
            <h2 className="text-4xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-gray-800">BATHROOM VANITY</span>
              <span className="text-[#e9212e] font-medium"> WITH TOPS AND WITHOUT TOPS</span>
            </h2>
          </div>
            <p className="mt-4 text-xl text-gray-500">If you're searching for the perfect bathroom vanity, be aware that it might be a top or not. Many people opt for bathroom vanities that come with tops. Bathroom vanity sets include the base, and the top is included. </p>
            <p className="mt-4 text-xl text-gray-500">A bathroom vanity complete with the top gives the user more freedom to create your unique design. Select a top with pre-drilled holes. Take into consideration the material used for the top of your bathroom vanity. The Cabinets offer many bathroom countertop materials, including marble, quartz laminate, granite countertops, and more. We also provide expert installation services to make sure you are completely satisfied with your bathroom remodelling project. </p>
        </div>
      </div>
    </div>
  );
};

export default BathroomVanity;