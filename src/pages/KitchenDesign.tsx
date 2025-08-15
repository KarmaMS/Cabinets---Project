import React, { useEffect, useRef } from 'react';

const KitchenDesign = () => {
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
          style={{ backgroundImage: 'url("/kitchen-design-banner.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
              Luxury Kitchen Design
            </h1>
            <p className="text-xl md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Elevate your culinary space with our bespoke designs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight mb-4 mt-10">
            <span className="text-gray-800">KITCHEN </span>
            <span className="text-[#e9212e] font-medium">DESIGN</span>
          </h2>

          <hr className="border-t-2 border-dotted border-gray-300 mb-4" />
        </div>
      </div>

      {/* Kitchen Design */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 leading-relaxed text-lg text-justify">
              <p>
                The basis of a beautiful and useful house is a well-organized Kitchen Design. Modern kitchen layouts are the right solution for today's lifestyle since they smoothly combine creativity, functionality and quality. The secret is to plan a kitchen that perfectly mixes together both appearance and function, no matter how big or small your area is. 
              </p>

              <p>
              The modular kitchen is one of the major developments in kitchen design. Customization has been given the most importance in these designs, which improve space use by providing a variety of storage options like pull-out drawers, corner units and tall cabinets. Along with improving the room's attraction, clean counters and long-lasting finishes like laminate and granite provide long-term durability from common everyday use.
              </p>

              <p>
                The lighting of modern kitchen interiors is important. By matching natural, task, and decorative lighting and multicolored lighting results in a warm and useful space. The overall experience has been improved even better by smart technology, which includes factors like motion-activated lighting and appliances that are energy-saving made for the environment and ease of use. 
              </p>

              
              <p>
                Making your kitchen ideas a reality is our main objective at Cabinets. We provide specialized solutions that match with your space and choice of style since we have an excellent understanding of creating modern kitchen design. Our team of professionals makes sure that every detail matches your expectations and uniqueness, whether you're looking for a luxurious installation or a simple design. 
              </p>
            </div>
          </div>

          {/* RIGHT column ─ image */}
          <div className="flex items-start md:items-center ml-auto">
            <img
              src="/kitchen-design.jpg"
              className="h-full shadow-md"
            />
          </div>
        </div>

      {/* Heading */}
        <div className="max-w-6xl mx-auto px-4">
          <div>
            <h2 className="text-4xl sm:text-2xl font-extrabold tracking-tight mb-4 mt-12">
              <span className="text-gray-800">KITCHEN DESIGN IDEAS</span>
              <span className="text-[#e9212e] font-medium"> TO INSPIRE YOU</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300" />
          </div>
        </div>

      {/* Kitchen Design */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => el && sectionsRef.current.push(el)}
            className="mt-16 grid gap-8
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4"
          >
            {(() => {
              // EXACT order from your latest reference grid (all unique)
              const files = [
                // Row 1
                'aesthetic-white-modular-kitchen-design.jpg',
                'almond-color-modular-kitchen-design.jpg',
                'Ambient-Off-White-Modular-Kitchen-Design.jpg',
                'beige-modular-kitchen-design.jpg',
                'black-and-white-modular-kitchen-design.jpg',
                'Brownish-Shiny-Modular-Kitchen-Design.jpg',
                'chalk-white-modular-kitchen-design.jpg',
                'classic-white-modular-kitchen-design.jpg',
                'clean-white-modular-kitchen-design.jpg',
                'Contrasting-Brown-Modular-Kitchen-Design.jpg',
                'creamy-almond-modular-kitchen-design.jpg',
                'creamy-island-shaped-modular-kitchen-design.jpg',
                'creamy-pale-modular-kitchen-design.jpg',

                // Row 2
                'creamy-white-modular-kitchen-design.jpg',
                'creamy-wooden-modular-kitchen-design.jpg',
                'dark-shade-modular-kitchen-design.jpg',
                'glossy-black-and-white-modular-kitchen-design.jpg',
                'glossy-cream-color-modular-kitchen-design.jpg',
                'glossy-grey-modular-kitchen-design.jpg',
                'grey-and-white-modular-kitchen-design.jpg',
                'grey-theme-modern-modular-kitchen-design.jpg',
                'luminous-white-modular-kitchen-design.jpg',
                'milk-white-modular-kitchen-design.jpg',
                'Off-Shade-Small-Modular-Kitchen-Design.jpg',
                'Off-White-and-Black-modular-kitchen-design.jpg',
                'Off-White-and-Black-Sleek-Modular-Kitchen-Design.jpg',

                // Row 3
                'Off-White-Shade-Modular-Kitchen-Design.jpg',
                'pale-modular-kitchen-design.jpg',
                'parallel-white-modular-kitchen-design.jpg',
                'sleek-white-modular-kitchen-design.jpg',
                'small-cream-white-modular-kitchen-design.jpg',
                'small-elegant-modular-kitchen-design.jpg',
                'spacious-white-modular-kitchen-design.jpg',
                'Strip-Lighting-Wooden-Modular-Kitchen-Design.jpg',
                'sunlight-welcoming-white-modular-kitchen-design.jpg',
                'translucent-modular-kitchen-design.jpg',
              ];

              // Build caption from filename (supports .jpg/.jpeg/.png)
              const toLabel = (f: string) => {
                const base = f.replace(/\.(?:jpe?g|png)$/i, '').replace(/-/g, ' ');
                const main = base.replace(/modular kitchen design$/i, '').trim();
                const pretty =
                  main
                    .replace(/\bu shaped\b/gi, 'U Shaped')
                    .replace(/\boff white\b/gi, 'Off-White')
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
                        onError={(e) => {
                          // Fallback: try the other common extension automatically
                          const el = e.currentTarget;
                          const tried = el.getAttribute('data-err') === '1';
                          if (!tried) {
                            const next = file.toLowerCase().endsWith('.png')
                              ? file.replace(/\.png$/i, '.jpg')
                              : file.replace(/\.jpe?g$/i, '.png');
                            el.setAttribute('data-err', '1');
                            el.src = `/ModularKitchenDesign/Bottom/${next}`;
                          }
                        }}
                      />
                    </div>

                    <figcaption className="px-4 py-3 text-center text-sm font-bold tracking-tight uppercase">
                      <span className="text-gray-800">{title}</span>
                      <span className="text-[#e9212e]">{title2}</span>
                    </figcaption>
                  </figure>
                );
              });
            })()}
          </div>

          <div
            ref={(el) => el && sectionsRef.current.push(el)}
            className="mt-16 grid gap-8
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3"
          >
            {(() => {
              // EXACT order from your latest reference grid (all unique)
              const files = [
                'u-shaped-grey-and-white-modular-kitchen-design.jpg',
                'U-Shaped-Luminous-Modular-Kitchen-Design.jpg',
                'warm-lighting-creamish-modular-kitchen-design.jpg',
                'warm-lighting-island-modular-kitchen-design.jpg',
                'white-ambient-sleek-modular-kitchen-design.jpg',
                'white-strip-light-modular-kitchen-design.jpg',
                'wooden-and-dark-grey-modular-kitchen-design.jpg',
                'wooden-finish-modular-kitchen-design.jpg',
                'wooden-island-modular-kitchen-design.jpg',
              ];

              // Build caption from filename (supports .jpg/.jpeg/.png)
              const toLabel = (f: string) => {
                const base = f.replace(/\.(?:jpe?g|png)$/i, '').replace(/-/g, ' ');
                const main = base.replace(/modular kitchen design$/i, '').trim();
                const pretty =
                  main
                    .replace(/\bu shaped\b/gi, 'U Shaped')
                    .replace(/\boff white\b/gi, 'Off-White')
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
                        onError={(e) => {
                          // Fallback: try the other common extension automatically
                          const el = e.currentTarget;
                          const tried = el.getAttribute('data-err') === '1';
                          if (!tried) {
                            const next = file.toLowerCase().endsWith('.png')
                              ? file.replace(/\.png$/i, '.jpg')
                              : file.replace(/\.jpe?g$/i, '.png');
                            el.setAttribute('data-err', '1');
                            el.src = `/ModularKitchenDesign/Bottom/${next}`;
                          }
                        }}
                      />
                    </div>

                    <figcaption className="px-4 py-3 text-center text-sm font-bold tracking-tight uppercase">
                      <span className="text-gray-800">{title}</span>
                      <span className="text-[#e9212e]">{title2}</span>
                    </figcaption>
                  </figure>
                );
              });
            })()}
          </div>


        <div className="max-w-6xl mx-auto px-4">
          <div>
            <h2 className="text-4xl sm:text-2xl font-extrabold tracking-tight mb-4 mt-10">
              <span className="text-gray-800">KITCHEN DESIGN</span>
              <span className="text-[#e9212e] font-medium"> IN MODERN LIFESTYLE: FEATURES AND BENEFITS</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-4" />

            <p> In the kitchen, we create delicious meals and spend some quality time with our loved ones. Good kitchen design can make cooking relaxing and simple. These days kitchens are made to be stylish, functional and comfortable, so they are no longer only used for cooking. Everything is made easier by original ideas and smart equipment, which keeps the kitchen clean and active. A carefully planned kitchen can save time and provide an original finish to each meal. </p>

            <h2 className="text-4xl sm:text-xl font-extrabold tracking-tight mb-4 mt-6">
              <span className="text-gray-800">What Makes a</span>
              <span className="text-[#e9212e]"> Modern Kitchen Design Special? </span>
            </h2>
          </div>

            {/* list #1 */}
  <ol className="list-decimal pl-5 space-y-6">
    <li>
      <p className="font-bold">Big and Open Spaces</p>
      <p>
        The kitchen area and the living room often separate by no walls in
        modern kitchen design. The kitchen feels larger, lighter and better as a
        result. Whenever you cook, you can talk to your family. Sunlight flows
        in through the large windows, bringing a feeling of freshness and
        happiness. Cooking and cleaning are enjoyable family activities because
        of the open area, which also allows more people to help.
      </p>
    </li>

    <li>
      <p className="font-bold">Smart Storage Spaces</p>
      <p>
        There are many creative methods to maintain setups in a modular kitchen.
        Shelving pulls into corners, drawers move out easily, and some cabinets
        offer hidden storage. Cooking is made simple and enjoyable by keeping
        things clean. There are sliding shelves for pots and pans, secret
        garbage cans and unique storage spaces for spices. You can maintain
        organization without creating a mess by using smart storage.
      </p>
    </li>

    <li>
      <p className="font-bold">Strong and Beautiful Materials</p>
      <p>
        The materials used in kitchen design nowadays are both strong and
        stylish. Kitchens with polished wood cabinets, smooth steel equipment
        and stone surfaces look attractive and will survive a long time. While
        some fabrics are beautiful and basic, others have lovely patterns.
        Surfaces that are simple to clean help your kitchen’s daily appearance
        of well‑being.
      </p>
    </li>

    <li>
      <p className="font-bold">Cool and Smart Kitchen Tools</p>
      <p>
        Smart appliances in modern kitchens make life easier. You can use a
        phone for controlling some stoves and refrigerators! Appliances that are
        energy‑saving save profits by using less power. Even a coffee machine
        that brews coffee the moment you wake up is an option. Cooking is made
        quicker, simpler and more delicious by smart devices.
      </p>
    </li>

    <li>
      <p className="font-bold">Bright and Useful Lights</p>
      <p>
        Lights in the kitchen can make a big difference. Some lights shine
        directly on the cooking counter so you can see clearly, while others
        create a cozy feeling. There are even smart lights that change colour
        with a simple voice command. Under‑cabinet lights help with cooking, and
        decorative lighting adds charm to the space.
      </p>
    </li>

    <li>
      <p className="font-bold">Easy and Comfortable Design</p>
      <p>
        A well‑built kitchen design makes moving around easy. The sink, stove
        and fridge are placed so you don’t have to walk too much. This helps you
        cook faster with less effort. Some countertops are height‑adjustable, so
        every family member can access them without strain. The ergonomic layout
        is both fun and comfortable to cook in.
      </p>
    </li>

    <li>
      <p className="font-bold">Simple and Neat Look</p>
      <p>
        Modern kitchens look clean and tidy. Cabinets have sleek handles or no
        handles at all, and colours are soft like white, grey or light brown.
        Everything has its own place, making the kitchen feel calm and
        organised. A clutter‑free space makes cooking more enjoyable and reduces
        stress.
      </p>
    </li>

    <li>
      <p className="font-bold">Earth‑Friendly Choices</p>
      <p>
        Many people now choose materials that are kind to the planet. The
        cabinets are made from bamboo, which saves water from the sinks and
        energy from appliances. In some kitchens, waste is collected through
        built‑in bins for recycling purposes.
      </p>
    </li>

    <li>
      <p className="font-bold">Super Useful Kitchen Islands</p>
      <p>
        A kitchen island is a big counter in the middle of the kitchen. One may
        cook, eat or work. Some are integrated with the stove or sink; others
        feature seats so family and friends can chat while one cooks. Islands
        provide additional storage and make a kitchen more useful.
      </p>
    </li>

    <li>
      <p className="font-bold">Hands‑Free and Easy to Use</p>
      <p>
        New technology makes using the kitchen easier. Faucets turn on when they
        sense hands, and lights switch on with a clap. Some refrigerators send
        reminders when the food is running out. These intelligent features make
        a kitchen more convenient, hygienic and fun to use.
      </p>
    </li>
  </ol>
        </div>

<div className="max-w-6xl mx-auto px-4">
  {/* list #2 */}
  <h2 className="text-4xl sm:text-xl font-extrabold tracking-tight mb-4 mt-6">
    Why a <span className="text-[#e9212e]">Well‑Designed Kitchen</span> is Great
  </h2>

  <ol className="list-decimal pl-5 space-y-6">
    <li>
      <p className="font-bold">Makes Cooking Easy and Quick</p>
      <p>
        When everything is in its proper location, cooking is easy. You do not
        need to walk a lot or look for equipment. Cooking becomes fun and
        time‑saving with the help of modern kitchen layouts from Regalo
        Kitchens.
      </p>
    </li>

    <li>
      <p className="font-bold">Adds Value to a Home</p>
      <p>
        A well‑organised kitchen design adds value to a property. A trendy
        kitchen can attract customers and increase the value of your house if
        you ever decide to sell it because people love homes with new kitchens.
      </p>
    </li>

    <li>
      <p className="font-bold">Looks Beautiful</p>
      <p>
        Proper lighting, clean counters and attractive furniture create an
        inviting environment in the kitchen. Small decorations like beautiful
        tiles or plants provide even more personal touches to the area.
      </p>
    </li>

    <li>
      <p className="font-bold">Keeps Things Organised</p>
      <p>
        Everything has storage in a thoughtfully created kitchen design. Pots,
        plates and spices all have their proper spots, so finding what you need
        is simple. This keeps the kitchen free of stress and clean so you can
        focus on creating delicious meals.
      </p>
    </li>

    <li>
      <p className="font-bold">Saves Energy and Money</p>
      <p>
        Smart appliance use helps to power saving. Energy‑saving refrigerators
        and LED lighting save costs while helping the environment.
      </p>
    </li>

    <li>
      <p className="font-bold">Keeps the Kitchen Clean and Safe</p>
      <p>
        Good ventilation removes smells and smoke, and touch‑free taps and clean
        work surfaces stop germs from spreading, creating a safe space for
        dining and cooking.
      </p>
    </li>

    <li>
      <p className="font-bold">Can Be Changed to Fit Your Needs</p>
      <p>
        A modern kitchen can be customised for any family. More shelves, bigger
        countertops or specialised storage ensure the layout fits your lifestyle
        perfectly.
      </p>
    </li>

    <li>
      <p className="font-bold">Creates a Comfortable Space</p>
      <p>
        A warm, welcoming kitchen with comfortable seating brings the family
        together and makes every meal a pleasant experience.
      </p>
    </li>

    <li>
      <p className="font-bold">Supports a Healthy Lifestyle</p>
      <p>
        When healthy food is easy to prepare and store, people choose fresh
        meals more often than take‑out, encouraging better eating habits.
      </p>
    </li>

    <li>
      <p className="font-bold">Helps Save Time</p>
      <p>
        A simple, logical layout, smart appliances and accessible storage make
        cooking and cleaning faster, freeing up more time for other activities.
      </p>
    </li>
  </ol>
</div>
  {/* conclusion */}
  <div className="max-w-6xl mx-auto px-4">
  <h3 className="text-xl font-extrabold mt-10 mb-4">Conclusion</h3>
  <p className="mb-12">
    In conclusion, a well-designed kitchen improves everyday life and your
    whole experience of living in the house by perfectly achieving natural
    beauty and benefits. With brilliant storage, energy‑saving equipment and
    beautiful finishes, <strong>Cabinets</strong> provides a modern
    kitchen design that makes cooking simple and satisfying. Investing in a
    well-designed kitchen not only increases productivity and comfort, but also
    boosts the value of your home and creates a welcoming, valuable area.
  </p>
  </div>

  </div>
  </div>
  );
};

export default KitchenDesign;