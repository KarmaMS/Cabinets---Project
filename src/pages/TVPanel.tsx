import React, { useEffect, useRef } from 'react';

const TVPanel = () => {
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
          style={{ backgroundImage: 'url("/lcdmainbanner.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
              LCD Panel Design
            </h1>
            <p className="text-2xl md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Elegant entertainment units for modern living
            </p>
          </div>
        </div>
      </div>

      {/* Panel Styles */}
      {/* Wardrobe Types */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 l:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-gray-800">TV </span>
              <span className="text-[#e9212e] font-medium">CABINET</span>
            </h2>
            <p className=" font-extrabold mt-4 text-l text-gray-700">Renovate Your Living Room with Classy TV Panel</p>
          </div>

            <div className="grid gap-8
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-3">

              {[
                /* ─── TV-panels ─────────────────────────── */
                {
                  file: '1.jpg',
                  title: 'LUXE MARBLE TV PANEL',
                  desc : 'Veined white-marble slab, flanked by open back-lit niches for a five-star hotel vibe.'
                },
                {
                  file: '2.jpg',
                  title: 'LED-LIT ACCENT WALL',
                  desc : 'Glossy neutral surround framed by a vivid green light box – adds drama to any lounge.'
                },
                {
                  file: '3.jpg',
                  title: 'MARBLE & WOOD FEATURE WALL',
                  desc : 'Warm timber fins and floating console soften the elegance of the stone backdrop.'
                },

                {
                  file: '4.jpg',
                  title: 'MINIMALIST MONOCHROME PANEL',
                  desc : 'Sleek black-glass TV surface with low, handle-less storage – perfect for modern flats.'
                },
                {
                  file: '5.jpg',
                  title: 'ARTISTIC MURAL MEDIA WALL',
                  desc : 'Hand-painted floral graphic and colour-blocked ceiling tray create a bespoke statement.'
                },
                {
                  file: '6.jpg',
                  title: 'MODULAR PLUM WALL UNIT',
                  desc : 'High-gloss white cabinets pop against a rich plum backdrop for bold contemporary style.'
                },

                {
                  file: '7.jpg',
                  title: 'CLEAN-LINE FLOATING MEDIA WALL',
                  desc : 'Matte white panels with punchy red display cubes give a playful, Scandinavian feel.'
                },
                {
                  file: '8.jpg',
                  title: 'GRAND MARBLE COFFERED PANEL',
                  desc : 'Twin illuminated marble columns frame the screen, lending an air of formal elegance.'
                },
                {
                  file: '9.jpg',
                  title: 'SLAB MARBLE WITH RECESSED LED',
                  desc : 'Continuous stone backdrop edged with hidden strip-lighting for a gallery-like ambience.'
                },

              ].map(({ file, title, desc }) => (
                <div key={file}
                    className="group relative overflow-hidden rounded-lg shadow-lg">

                  <div className="relative w-full pb-[66.666%]">
                    <img
                      src={`/TV/${file}`}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover
                                transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white
                                    transform translate-y-6 group-hover:translate-y-0
                                    transition-transform duration-300">
                      <h3 className="text-l font-semibold tracking-tight">{title}</h3>
                      <p className="mt-1 text-xs opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 delay-75">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-t-2 border-dotted border-gray-300 mt-14 mb-6" />
            <p className=" mt-4 text-l text-gray-700"> Television brings the whole family together at the end of the workday to watch a movie or other entertainment. A Tv panel is a crucial piece of furniture in any home. It is second in importance to guests, after the center table. A Tv panel is a crucial piece of furniture in any home. It is second in importance to guests, after the center table. It is essential to choose a TV cabinet that not only serves its purpose but also looks great. By placing your TV unit against the wall, you can create an entertainment area in your living space. A TV panel that is well designed will enhance the living space's ambiance and provide storage. The TV unit design has changed with technological advances. The TV cabinet is stylish and sleek, which stores your TV and improves the appearance of your living space. A TV cabinet that provides support and is strong can be chosen. Cabinets offers a variety of TV units, from wall-mounted to bookshelf designs. You can find many TV unit designs for various decor styles, including wall-mounted and closed TV units. A wide TV cabinet that covers the wall would look great in large living rooms. A wall-mounted TV cabinet would be a better option for smaller spaces. </p>
            
            <div className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight mb-4">
                <span className="text-gray-800">ALL TYPES OF TV PANEL DESIGNS </span>
                <span className="text-[#e9212e] font-medium">AT CABINETS</span>
              </h2>
              <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

              {/* lead-in copy */}
              <p className="text-l leading-relaxed text-gray-700 mb-6">
                A well-chosen TV unit does far more than hold the screen: it
                <strong className="mx-1">stores electronics &amp; décor, hides cables, frames artwork and anchors the whole
                room's style.</strong> Because every home, wall and lifestyle is different,
                <strong className="mx-1">Cabinets</strong> offers three purposeful families of designs you can mix, match and
                customise.
              </p>

              {/* design families */}
              <ul className="list-disc pl-6 space-y-6 text-l text-gray-700">

                {/* modern units */}
                <li>
                  <p>
                    <strong className="mr-1">Modern TV Units —</strong>
                    Built around large floating back-panels finished in glossy acrylic, laminate
                    or natural veneer. They include <em>soft-close drawers / flap lifts for set-top
                    boxes, concealed wire grommets, sound-bar recesses</em> and integrated LED
                    up-lighting that lets the screen hover theatrically.
                  </p>
                  <p className="mt-2 pl-4">
                    <span className="mr-1">✔</span>Great for renters: mount the panel on a cleat
                    and take it with you.<br/>
                    <span className="mr-1">✔</span>Choose high-gloss white to visually enlarge
                    compact lounges, or warm walnut if you prefer a cozier vibe.
                  </p>
                </li>

                {/* wall units */}
                <li>
                  <p>
                    <strong className="mr-1">TV Wall Units —</strong>
                    A vertical stack of closed towers and open cubbies either side of the screen,
                    stretching <em>floor-to-ceiling</em>. Shelving depth is kept slim (10-12″) so
                    passage-ways stay clear, while still giving you space for books, collectibles,
                    router &amp; gaming consoles.
                  </p>
                  <p className="mt-2 pl-4">
                    <span className="mr-1">✔</span>Add textured fluted shutters or smoked-glass
                    doors to hide clutter yet keep remotes working.<br/>
                    <span className="mr-1">✔</span>Optional sound-absorbing acoustic fabric
                    panels improve dialogue clarity in open-plan homes.
                  </p>
                </li>

                {/* open TV cabinets */}
                <li>
                  <p>
                    <strong className="mr-1">Open TV Cabinets —</strong>
                    Stand-alone low credenzas (5-8 ft long) with a mix of open shelves and push-to-open
                    drawers. Perfect for bedrooms, studio apartments or beneath a wall-mounted
                    screen when you still want surface space for photos, planters or a
                    record-player.
                  </p>
                  <p className="mt-2 pl-4">
                    <span className="mr-1">✔</span>Raised on metallic skirting legs for easy
                    robot-vac access.<br/>
                    <span className="mr-1">✔</span>Order the top in durable quartz so it doubles
                    as a snack bar during movie night.
                  </p>
                </li>
              </ul>

              {/* closing tip */}
              <p className="text-l leading-relaxed text-gray-700 mt-6">
                Not sure which style is right for you? Book a free video consult and our designers
                will mock-up <em>3-D renders</em> showing how each unit fits your TV size, speaker
                layout and wall dimensions — so you can decide with confidence.
              </p>
            </div>

            {/* ───────── 2. WHAT YOU NEED TO KNOW BEFORE YOU BUY ───────── */}
            <div className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight mb-4">
                <span className="text-gray-800">WHAT YOU NEED TO KNOW BEFORE YOU </span>
                <span className="text-[#e9212e] font-medium">BUY A TV CABINET</span>
              </h2>
              <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

              <p className="text-l leading-relaxed text-gray-700 mb-6">
                Today's entertainment hubs come in dozens of shapes—<em>floating consoles, closed
                credenzas, modular book-case walls</em> and more. Use the quick checklist below to
                narrow the field <strong>before</strong> you start browsing showrooms or “Add-to-Cart”.
              </p>

              <ul className="list-disc pl-6 space-y-6 text-l text-gray-700">

                {/* 1 - room size */}
                <li>
                  <p>
                    <strong>The Room Size & Wall Span —</strong> First measure the width, cornice
                    height and any skirting or switch boxes on the wall. Leave at least&nbsp;6″ of
                    breathing space on either side so drawers and swing doors clear curtains or
                    adjoining furniture.
                  </p>
                  <p className="mt-1 pl-4">
                    <span className="mr-1">✔</span>For <em>under-8 ft&nbsp;walls</em> go for a simple
                    floating shelf or compact open cabinet.<br/>
                    <span className="mr-1">✔</span>A wall wider than&nbsp;10 ft can carry a full
                    length back-panel with towers for books and décor.
                  </p>
                </li>

                {/* 2 - material */}
                <li>
                  <p>
                    <strong>Material &amp; Finish —</strong> Most quality units use an engineered-wood
                    core (HDHMR / plywood) skinned with <em>laminate, veneer, acrylic,
                    PU-paint or stone</em>. Match finishes to usage:
                  </p>
                  <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li><em>High-gloss acrylic</em>: easy to wipe but shows fingerprints.</li>
                    <li><em>Textured laminate</em>: hides scuffs in homes with kids & pets.</li>
                    <li><em>Quartz / large-format tile</em>: luxe look, heat-proof for gaming consoles.</li>
                  </ul>
                </li>

                {/* 3 - design style */}
                <li>
                  <p>
                    <strong>Design &amp; Storage Style —</strong> Decide what must live inside
                    the cabinet <em>before</em> you shop: set-top boxes, sound-bar, VR headset,
                    vinyl collection?  This dictates the internal shelf-height and ventilation
                    slots you'll need.
                  </p>
                </li>

                {/* 4 - ergonomic viewing */}
                <li>
                  <p>
                    <strong>Ergonomic Viewing Height —</strong> The industry sweet-spot is to
                    place the screen's <em>centre 42-48 in from the floor</em> when viewed from a
                    sofa. If your unit has a tall plinth, reduce the panel height or go
                    wall-mounted.
                  </p>
                </li>

                {/* 5 - cable & power */}
                <li>
                  <p>
                    <strong>Cable &amp; Power Management —</strong> Look for built-in raceways,
                    rear service hatches and a <em>minimum of two</em> 15-amp sockets plus a
                    USB-C port. Future-proofing is cheaper than tearing the panel later.
                  </p>
                </li>

                {/* 6 - research */}
                <li>
                  <p>
                    <strong>Compare &amp; Verify —</strong> Read reviews, ask about warranty on
                    hinges and channels, and request a moisture-resistance certificate if you
                    live in a humid region. When every box is ticked, place the order — and
                    insist on <em>laser levelling</em> during installation.
                  </p>
                </li>
              </ul>
            </div>

            {/* ───────── 3. WHY CHOOSE TV UNITS FROM REGALO ───────── */}
            <div className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight mb-4">
                <span className="text-gray-800">WHY CHOOSE TV UNITS </span>
                <span className="text-[#e9212e] font-medium">FROM CABINETS</span>
              </h2>
              <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

              <p className="text-l leading-relaxed text-gray-700">
                Cabinets delivers outstanding quality by pairing top-grade materials with
                unique Pakistani-made designs. Expect excellent customer service, on-time delivery
                and a vast selection of beautifully engineered TV panels that will transform
                your home.
              </p>
            </div>



        </div>
      </div>
      
    </div>
  );
};

export default TVPanel;