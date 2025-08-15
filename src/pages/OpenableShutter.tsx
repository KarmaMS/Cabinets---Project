import { useEffect, useRef } from 'react';

const ModularCloset = () => {
  /* ─────────── existing parallax / fade-in hooks ─────────── */
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      /* parallax */
      if (parallaxRef.current) {
        const offset = window.scrollY * 0.5;
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
      /* fade-in */
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const r = section.getBoundingClientRect();
        const visible = r.top < window.innerHeight * 0.75 && r.bottom >= 0;
        if (visible) section.classList.add('animate-fadeIn');
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
          style={{ backgroundImage: 'url("/openable-shutter.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
            OPENABLE SHUTTER
            </h1>
            <p className="text-xl md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Cabinets Openable Shutter Closets tailored to your space, your budget, your routine.
            </p>
          </div>
        </div>
      </div>

      {/* ─────────── Intro copy (lines L5 - L7) ─────────── */}
      <section
        ref={(el) => el && sectionsRef.current.push(el as HTMLDivElement)}
        className="py-20 bg-white opacity-0 animate-fadeIn"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT column ─ headline + body */}
          <div className="max-w-xl">
            <h2 className="text-w-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-gray-800">OPENABLE SHUTTER </span> <br></br>
              <span className="text-[#e9212e] font-medium">WARDROBE DESIGN</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

            <div className="space-y-8 leading-relaxed text-lg text-justify">
              <p>
                 Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design. 
              </p>
              <p>This traditional style wardrobe type is most recommended by almost all manufacturers as well as customers. Openable shutters wardrobes are usually taken more space and have more storage option to organize your stuff well. We have unlimited colors & finishes and designs for the openable shutter wardrobes and this wardrobe designed and made with quality material. </p>
            </div>
          </div>

          {/* RIGHT column ─ image */}
          <div className="flex items-start md:items-center ml-auto">
            <img
              src="/Openable/main.jpg"
              alt="Modern modular Closet in high-gloss red"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ─────────── “What is a Modular Closet?” ─────────── */}
      <section
        ref={(el) => el && sectionsRef.current.push(el as HTMLDivElement)}
        className="py-8 bg-white opacity-0 animate-fadeIn"
      >
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                title: 'Walnut Glow Walk-In',
                description:
                    'Floor-to-ceiling walnut shelving with pull-out drawers and warm LED strips; a bright end window keeps the dressing aisle light and airy.',
                image: '/Openable/1.jpg',
                },
                {
                title: 'Backlit Oak Showcase',
                description:
                    'Open oak hanging bays and glass shelves with integrated lighting, paired with a cozy lounge seat for a boutique-style try-on zone.',
                image: '/Openable/2.jpg',
                },
                {
                title: 'Luxury Curved Walk-In',
                description:
                    'Sweeping curved cabinetry in rich wood wraps the room; perimeter lighting and a central ottoman create a dramatic, high-end dressing suite.',
                image: '/Openable/3.jpg',
                },
                {
                title: 'Charcoal Walk-In with Island',
                description:
                    'Matte charcoal wardrobes with glass fronts and a center dresser island under soft cove lighting for organized, premium storage.',
                image: '/Openable/4.jpg',
                },
                {
                title: 'Bronze Glass Gallery',
                description:
                    'Floor-to-ceiling bronze glass doors reveal a central dresser and illuminated rails, giving a sleek, boutique showroom feel.',
                image: '/Openable/5.jpg',
                },
                {
                title: 'Garden View Glass Closet',
                description:
                    'Smoked-glass fronts and warm wood interiors with integrated lighting; sliding panels open to greenery for a calm, luxury dressing experience.',
                image: '/Openable/6.jpg',
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

        </div>
        </section>

        {/* ─────────── KEEP IN MIND ─────────── */}
        <section
          ref={(el) => el && sectionsRef.current.push(el as HTMLDivElement)}
          className="py-8 bg-grey opacity-0 animate-fadeIn"
        >
          {/* one shared container so every heading & list line up */}
          <div className="max-w-7xl mx-auto px-4 leading-relaxed text-left">

            {/* --- Key Features --- */}
            <h2 className="text-w-4xl sm:text-2xl font-extrabold tracking-tight mb-4">
              <span className="text-gray-800">WHY CHOOSE </span>
              <span className="text-[#e9212e] font-medium">OPENABLE SHUTTER WARDROBES</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

            <ul className="list-disc list-inside space-y-1 mt-6 mb-6">
              <li><strong>  More Hanging Space </strong></li>
              An Openable shutter wardrobe allows you to hang accessories such as scarves, sling bags, and belts in the back of your doors.
              <li><strong> Color & Finish Options </strong></li>
              Swing doors are a classic wardrobe design that has been on the market for many years. They come in many styles and colors. You can choose any style or color wardrobe door, depending on your preference. You can choose from mirrored shutters, laminated shutters, or routed shutters. You can also select metal-framed shutters that have glass panels if you want a modern look. You can choose from classic doorknobs or sleek stainless steel handles. Or you can go with luxe leather handles.
              <li><strong>  Minimal Maintenance</strong></li>
                You only need to maintain your openable shutter wardrobes, and need to make sure your hinges are in good condition. They might need oiling if you hear a creaking sound.
            </ul>
          </div>
        </section>      

    </div>
  );
};

export default ModularCloset;