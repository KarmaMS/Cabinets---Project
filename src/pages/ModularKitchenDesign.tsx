import React, { useEffect, useRef } from 'react';
import FAQ from '../components/FAQ-MKD';

const ModularKitchenDesign = () => {
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
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="font-bebas text-5xl md:text-7xl font-extrabold mb-6 opacity-0 animate-fadeIn">
              Modular Kitchen Design
            </h1>
            <p className="text-xl text-opacity-50 md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Where style meets functionality in perfect harmony
            </p>
          </div>
        </div>
      </div>

      {/* Design Features */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bebas text-4xl md:text-4xl font-thin tracking-wide
                        text-[#e9212e] uppercase mb-6"
            >
              Modular&nbsp;Kitchen&nbsp;Design
            </h2>

            <p className="mx-auto max-w-5xl text-lg md:text-m leading-relaxed text-gray-900">
              A <span className="font-semibold">Modular Kitchen Design</span> is a popular choice for those looking
              for practical and stylish kitchen interiors. The layouts of these kitchens, which include L-shaped, U-shaped, straight-line, and island designs, can be reshaped depending on the demands of every individual. Cabinets and drawers are just a few of the many storage choices they provide to keep things organized. Modern kitchens are made of materials like laminates, acrylic, stainless steel, and natural stone, which are durable and easy to maintain. They are an excellent choice when creating a kitchen that is both beautiful and practical in any house. 
            </p>
          </div>

          <div
            className="grid gap-8
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3"
          >
            {[
              // Row 1
              { file: 'u-shaped-kitchen1.jpg',  title: 'U SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Wrap-around cabinetry on three sides delivers generous counter area and storage.', span: 1 },
              { file: 'g-shaped-kitchen1.jpg',  title: 'G SHAPE MODULAR KITCHEN DESIGN',
                desc: 'A U-shape plus a compact peninsula for extra prep space and casual seating.', span: 1 },
              { file: 'l-shaped-kitchen2.jpg',  title: 'L SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Two adjacent walls maximise corner space while keeping the centre open.', span: 1 },

              // Row 2
              { file: 'l-shaped-kitchen1.jpg',  title: 'L SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Productive, space-saving structure with cabinets on two perpendicular walls.', span: 2 },
              { file: 'g-shaped-kitchen3.jpg',  title: 'G SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Functional layout with bar-style seating and great storage.', span: 1 },

              // Row 3
              { file: 'g-shaped-kitchen2.jpg',  title: 'G SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Gorgeous set-up that provides the greatest space and a lot of storage.', span: 1 },
              { file: 'island-shaped-kitchen1.jpg', title: 'ISLAND MODULAR KITCHEN DESIGN',
                desc: 'A central island adds prep surface and a social hub for casual dining.', span: 1 },
              { file: 'u-shaped-kitchen2.jpg',  title: 'U SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Ergonomic work triangle with excellent storage on three walls.', span: 1 },

              // Row 4
              { file: 'island-shaped-kitchen2.jpg', title: 'ISLAND MODULAR KITCHEN DESIGN',
                desc: 'Expansive island anchors the space and boosts workflow.', span: 2 },
              { file: 'parallel-kitchen1.jpg',    title: 'PARALLEL MODULAR KITCHEN DESIGN',
                desc: 'Two facing counters create an efficient galley work zone.', span: 1 },

              // Row 5
              { file: 'parallel-kitchen2.jpg',    title: 'PARALLEL MODULAR KITCHEN DESIGN',
                desc: 'Balanced storage both sides keeps movement streamlined.', span: 1 },
              { file: 'inline-kitchen1.jpg',      title: 'INLINE MODULAR KITCHEN DESIGN',
                desc: 'Single-wall arrangement ideal for open-plan or compact spaces.', span: 2 },

              // Row 6
              { file: 'inline-kitchen2.jpg',      title: 'INLINE MODULAR KITCHEN DESIGN',
                desc: 'Minimal footprint without sacrificing functionality.', span: 1 },
              { file: 'italian-kitchen1.jpg',     title: 'ITALIAN MODULAR KITCHEN DESIGN',
                desc: 'Sleek finishes and minimalist detailing for a contemporary look.', span: 1 },
              { file: 'italian-kitchen2.jpg',     title: 'ITALIAN MODULAR KITCHEN DESIGN',
                desc: 'Premium textures with refined, handle-less lines.', span: 1 },
              { file: 'italian-kitchen3.jpg',     title: 'ITALIAN MODULAR KITCHEN DESIGN',
                desc: 'Statement lighting and luxe finishes complete the look.', span: 1 },

              // Row 7
              { file: 'german-kitchen1.jpg',      title: 'GERMAN MODULAR KITCHEN DESIGN',
                desc: 'Precision-engineered hardware and smart storage solutions.', span: 2 },
              { file: 'german-kitchen2.jpg',      title: 'GERMAN MODULAR KITCHEN DESIGN',
                desc: 'Handle-less lines and robust, durable materials.', span: 1 },

              // Row 8
              { file: 'u-shaped-kitchen3.jpg',    title: 'U SHAPE MODULAR KITCHEN DESIGN',
                desc: 'Family-friendly layout with loads of cabinetry.', span: 1 },
              { file: 'parallel-kitchen3.jpg',    title: 'PARALLEL MODULAR KITCHEN DESIGN',
                desc: 'Dual runs maximise storage in narrow rooms.', span: 1 },
            ].map(({ file, title, desc, span }) => (
              <div
                key={file}
                className={`group relative overflow-hidden rounded-lg shadow-lg ${
                  span === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* aspect: 4/3 for 1-slot, 8/3 for 2-slot */}
                <div className={`relative w-full ${span === 2 ? 'pb-[33.333%]' : 'pb-[66.666%]'}`}>
                  <img
                    src={`/ModularKitchenDesign/${file}`}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white
                                  transform translate-y-6 group-hover:translate-y-0
                                  transition-transform duration-300">
                    <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
            
        </div>
      </div>

      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
            <span className="text-gray-800">WHY CHOOSE CABINETS</span>
            <span className="text-[#e9212e] font-medium"> TO BUILD YOUR MODULAR KITCHEN INTERIOR</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300 mb-8" />
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">Whenever it is about manufacturing a perfect Modular Kitchen Design, Cabinets is a dependable and smart option. We combine looks, benefit, and lasting strength to create inspiring kitchen interiors that are beneficial for the requirements you have in mind. Our team of qualified professionals are experts in making your design concept a reality through personalized plans that increase space, can guarantee smooth worker productivity, and improve the whole appearance of your house. </p>
            <p className="mt-4 text-xl text-left text-gray-600">What differentiates us is how dedicated we are to working with high-quality materials and advanced technologies in order to make sure that your Modular Kitchen Design will remain beneficial and trendy for years. Our focus on clients strategy and attention to detail, and timely delivery have helped us position ourselves as the industry leader.  </p>
          </div>

          <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
            <span className="text-gray-800">WHAT TYPES OF</span>
            <span className="text-[#e9212e] font-medium"> MODULAR KITCHENS ARE THERE?</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300 mb-8" />
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">Cabinets has a variety of designs. Each kitchen in a home is a different size, so they must accommodate these differences. As mentioned before, they can be adjusted in terms of color, style, and placement.  </p>
            <p className="mt-4 text-xl text-left text-gray-600">Modular Kitchen Design comes in a variety of shapes, with each one developed for different needs, desires, and spaces. These kitchens have been assembled with ready-made units that are perfectly sized to fit into the available area, providing both accessibility and appealing design. Depending on the design and storage needs, kitchens with modular design can provide solutions that support ease of use, productivity, and management. Cabinets is a specialist in Modular Kitchen Design Interiors that connect innovation, function, and luxury, resulting in a simple process from concept to installation that fits to the needs of each customer.   </p>
          </div>
          
          <p className="font-bebas text-xl font-bold text-left mb-6">
            The following are the main types of&nbsp;Modular&nbsp;Kitchen&nbsp;Design that&nbsp;Regalo&nbsp;offers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'In-Line Kitchen',
                description: 'A single, straight run of cabinets - perfect for open-plan studios or compact spaces.'
              },
              {
                title: 'Parallel Kitchen',
                description: 'Dual facing counters create an efficient “galley” work zone with ample storage.'
              },
              {
                title: 'L-Shaped Kitchen',
                description: 'Two perpendicular walls maximise corner space while keeping the centre open.'
              },
              {
                title: 'U-Shaped Kitchen',
                description: 'Wrap-around cabinetry on three sides delivers generous counter area and storage.'
              },
              {
                title: 'G-Shaped Kitchen',
                description: 'A U-shape plus a small peninsula for extra prep space and bar-style seating.'
              },
              {
                title: 'Island Kitchen',
                description: 'A central island adds a social hub for casual dining and multi-tasking.'
              },
              {
                title: 'Italian Kitchen',
                description: 'Sleek, high-gloss finishes and minimalist lines for true contemporary flair.'
              },
              {
                title: 'German Kitchen',
                description: 'Precision-engineered cabinetry with clever hardware and smart storage solutions.'
              },
              {
                title: 'Luxury Kitchen',
                description: 'Bespoke design using premium materials, integrated appliances and statement lighting.'
              }                                        

            ].map((process, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#e9212e] rounded-bl-full"></div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl text-left text-gray-600">Before selecting a design for your new Kitchen Interior, you must think about how it will be oriented. There are numerous kitchen designs available at Cabinets to suit your needs. </p>

          <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 mt-10 text-left uppercase">
            <span className="text-gray-800">MODULAR KITCHEN:</span>
            <span className="text-[#e9212e] font-medium"> IN LAYMAN's LANGUAGE?</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300 mb-8" />
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">Modular Kitchen Design Interiors have distinct storage areas for different kinds of items. They are frequently shaped and built to facilitate quick item removal or storage. It can be maintained in many different kinds of ways. It involves shelves made especially for your kitchen, as well as sliding doors, drawers, and trolleys. Thanks to this technology, all of your ingredients will be easily accessible and transportable. </p>
          </div>

          <div
            ref={(el) => el && sectionsRef.current.push(el)}
            className="mt-16 grid gap-8
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4"
          >
            {(() => {
              // Keep the order exactly as in your reference image:
              const files = [
                // top row of the ref
                'milk-white-modular-kitchen-design.jpg',
                'chalk-white-modular-kitchen-design.jpg',
                'translucent-modular-kitchen-design.jpg',
                'classic-white-modular-kitchen-design.jpg',
                'creamy-almond-modular-kitchen-design.jpg',
                'beige-modular-kitchen-design.jpg',
                'pale-modular-kitchen-design.jpg',
                'creamy-pale-modular-kitchen-design.jpg',
                'Off-White-and-Black-modular-kitchen-design.jpg',
                'Brownish-Shiny-Modular-Kitchen-Design.jpg',
                'warm-lighting-creamish-modular-kitchen-design.jpg',
                'white-ambient-sleek-modular-kitchen-design.jpg',
                'sleek-white-modular-kitchen-design.jpg',
                'luminous-white-modular-kitchen-design.jpg',
                'parallel-white-modular-kitchen-design.jpg',
                'clean-white-modular-kitchen-design.jpg',
                'glossy-cream-color-modular-kitchen-design.jpg',
                'creamy-wooden-modular-kitchen-design.jpg',
                'wooden-island-modular-kitchen-design.jpg',
                'wooden-finish-modular-kitchen-design.jpg',

                // rest (left→right, top→bottom)
                'glossy-black-and-white-modular-kitchen-design.jpg',
                'grey-theme-modern-modular-kitchen-design.jpg',
                'white-strip-light-modular-kitchen-design.jpg',
                'black-and-white-modular-kitchen-design.jpg',
                'aesthetic-white-modular-kitchen-design.jpg',
                'grey-and-white-modular-kitchen-design.png',

                'Ambient-Off-White-Modular-Kitchen-Design.jpg',
                'U-Shaped-Luminous-Modular-Kitchen-Design.jpg',
                'small-cream-white-modular-kitchen-design.jpg',
                'glossy-grey-modular-kitchen-design.jpg',
                'Contrasting-Brown-Modular-Kitchen-Design.jpg',
                'dark-shade-modular-kitchen-design.jpg',
                'Strip-Lighting-Wooden-Modular-Kitchen-Design.png',
                'wooden-and-dark-grey-modular-kitchen-design.jpg',
                'small-elegant-modular-kitchen-design.jpg',

                'Off-Shade-Small-Modular-Kitchen-Design.jpg',
                'sunlight-welcoming-white-modular-kitchen-design.jpg',
                'spacious-white-modular-kitchen-design.jpg',
                'almond-color-modular-kitchen-design.jpg',
                'creamy-island-shaped-modular-kitchen-design.jpg',

                'Off-White-Shade-Modular-Kitchen-Design.png',
                'Off-White-and-Black-Sleek-Modular-Kitchen-Design.jpg',
                'u-shaped-grey-and-white-modular-kitchen-design.jpg',
                'creamy-white-modular-kitchen-design.jpg',
              ];

              // Turn a filename into a nice caption.
              const toLabel = (f: string) => {
                // strip either .jpg/.jpeg or .png, then replace hyphens with spaces
                const base = f.replace(/\.(?:jpe?g|png)$/i, '').replace(/-/g, ' ');

                // remove the trailing "modular kitchen design"
                const main = base.replace(/modular kitchen design$/i, '').trim();
                const pretty =
                  main
                    .replace(/\bu shaped\b/gi, 'U Shaped')
                    .replace(/\boff white\b/gi, 'Off-White')
                    .replace(/\bgrey\b/gi, 'Grey')
                    .replace(/\b and \b/gi, ' and ')
                    .replace(/\b\w/g, (m) => m.toUpperCase())
                    .trim() + ' ';
                const isSleek = /sleek/i.test(base);
                return { title: pretty, title2: isSleek ? 'SLEEK KITCHEN DESIGN' : 'KITCHEN DESIGN' };
              };

              return files.map((file) => {
                const { title, title2 } = toLabel(file);
                return (
                  <figure
                    key={file}
                    className="overflow-hidden rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative w-full pb-[75%]">
                      <img
                        src={`/ModularKitchenDesign/Bottom/${file}`}
                        alt={`${title}${title2}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* caption bar */}
                    <figcaption className="px-4 py-3 text-center text-sm font-bold tracking-tight uppercase">
                      <span className="text-gray-800">{title}</span>
                      <span className="text-[#e9212e]">{title2}</span>
                    </figcaption>
                  </figure>
                );
              });
            })()}
          </div>

          <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
            <span className="text-gray-800">Modular Kitchen Design:</span>
            <span className="text-[#e9212e] font-medium"> A Myth Buster</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300 mb-8" />
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">Modular Kitchen Design is gaining popularity due to their ability to optimize limited spaces. They provide a practical solution for homeowners looking to make the most of their small kitchens. By incorporating modular elements and clever design techniques, Cabinets Kitchen Interiors offer efficient storage solutions, smart layouts, and aesthetically pleasing features. </p>
            <p className="mt-4 text-xl text-left text-gray-600">To make the most of a small Kitchen area, it is crucial to maximize every inch of available space. Start by decluttering and organizing your kitchen belongings. Maintain exactly what is absolutely necessary and get rid of anything more. To take advantage of vertical space, build cabinets or shelves on the wall to hold commonly used goods. Consider utilizing the space above the cabinets for extra storage. There are a lot more factors to think about, so let the experts handle this as you sit back and watch cabinets create a place that benefits your home's modular kitchen design. </p>
          </div>

          <div className="text-center mb-16 mt-16">
            <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
              <span className="text-gray-800">WHY SHOULD YOU GO FOR&nbsp;</span>
              <span className="text-[#e9212e] font-medium">MODULAR&nbsp;KITCHEN&nbsp;DESIGN?</span>
            </h2>

            <hr className="border-t border-dotted border-gray-300 mb-8" />

            <p className="mt-4 text-xl text-left text-gray-600 mb-8">
              There are several reasons you should go for a Modular Kitchen Design over your
              traditional kitchen interior:
            </p>

            {/* arrow‑bullet benefit list */}
            <ul className="space-y-8 text-left">
              {/* 1 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Maximizes Storage Capacity
                </p>
                <p className="mt-1 text-gray-700">
                  Every inch of space in your kitchen is utilised by purpose‑built cabinetry,
                  helping you store more while trimming overall housing costs.
                </p>
              </li>

              {/* 2 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  It;s Easy You Can Customise
                </p>
                <p className="mt-1 text-gray-700">
                  Choose drawers, trolleys and accessories that suit your cooking style, then
                  move or add modules later as your needs evolve.
                </p>
              </li>

              {/* 3 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Reduced Cooking Times Are Guaranteed
                </p>
                <p className="mt-1 text-gray-700">
                  An ergonomic layout streamlines meal prep, giving you more time for family
                  or other pursuits.
                </p>
              </li>

              {/* 4 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Easy to Budget
                </p>
                <p className="mt-1 text-gray-700">
                  Available in a wide range of price points—you can start small or splash out
                  on premium finishes.
                </p>
              </li>

              {/* 5 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Easy to Maintain
                </p>
                <p className="mt-1 text-gray-700">
                  Smooth surfaces and organised drawers keep cleanup quick and clutter‑free.
                </p>
              </li>

              {/* 6 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Aesthetically Pleasing
                </p>
                <p className="mt-1 text-gray-700">
                  Mix-and-match finishes, colours and textures to coordinate perfectly with
                  your décor.
                </p>
              </li>

              {/* 7 */}
              <li>
                <p className="font-semibold">
                  <span className="text-[#e9212e] mr-2">&#10148;</span>
                  Durable
                </p>
                <p className="mt-1 text-gray-700">
                  Heat, water and stain-resistant materials stand up to daily Pakistani
                  cooking routines.
                </p>
              </li>
            </ul>

            <p className="mt-10 text-xl text-left text-gray-600">
              To truly maximise a small kitchen, let the experts handle the layout while you
              sit back and watch Cabinets create a space that elevates your home.
            </p>
          </div>

          <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
            <span className="text-gray-800">Why Choose Cabinets to Build</span>
            <span className="text-[#e9212e] font-medium"> Your Kitchen Interior</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300 mb-8" />
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">A dependable and well-respected company, Cabinets will deliver quality for your home within your Budget. Regarding colors, finishes, sizes, and styles, Cabinets provides a wide range of Kitchen Interior choices. Also, there are many other shapes to choose from, including U-shaped, L-shaped, island kitchens, and more. </p>
            <p className="mt-4 text-xl text-left text-gray-600 mb-6">Cabinets will modify your kitchen to meet your home. They can also schedule visits to the showroom to schedule a consultation. Following the presentation, Cabinets will design your kitchen for you.  </p>
          </div>

          <div className="text-center mt-16">
          <h2 className="text-4xl sm:text-2xl font-bold tracking-tight mb-6 text-left uppercase">
            <span className="text-gray-800">FAQ's</span>
            <span className="text-[#e9212e] font-medium"> About Modular Kitchen Design</span>
          </h2>
            <hr className="border-t border-dotted border-gray-300" />
          </div>

          <FAQ />

        </div>
      </div>
    </div>
  );
};

export default ModularKitchenDesign;