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
          style={{ backgroundImage: 'url("/sliding-doors.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
            SLIDING DOORS
            </h1>
            <p className="text-xl md:text-2xl opacity-0 animate-fadeIn animation-delay-200">
              Cabinets Sliding Door Wardrobe tailored to your space, your budget, your routine.
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
              <span className="text-gray-800">SLIDING DOORS </span> <br></br>
              <span className="text-[#e9212e] font-medium">WARDROBE DESIGN</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

            <div className="space-y-8 leading-relaxed text-lg text-justify">
              <p>
                 No matter the form of your home, storage is an important priority. Your organizational skills are essential to ensure that your home is functional for all who live there. This applies to everyone, regardless of whether they live with their family or are living alone. Your wardrobes make up a large portion of your home's storage. It is essential to have adequate cabinets in your home, as closets are where most of your items are stored. Your wardrobe can contain more than clothing. It may also include footwear, jewellery, seasonal clothes, books, and other miscellaneous items that you don't have room for.
              </p>

              <p>
                Your wardrobe can become overwhelming and overcrowded if it takes up too much space. A sliding door wardrobe can make your bedroom appear more spacious and stylish. 
              </p>
            </div>
          </div>

          {/* RIGHT column ─ image */}
          <div className="flex items-start md:items-center ml-auto">
            <img
              src="/Sliding/main.jpg"
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
                title: 'Walnut Glow Sliding Wardrobe',
                description:
                    'Floor-to-ceiling walnut carcasses with soft-close sliding doors and warm LED strips; a bright end opening keeps the dressing aisle light and airy.',
                image: '/Sliding/1.jpg',
                },
                {
                title: 'Backlit Oak Sliding Showcase',
                description:
                    'Open oak hanging bays framed by glass sliding fronts with integrated lighting, plus a lounge corner for a boutique try-on experience.',
                image: '/Sliding/2.jpg',
                },
                {
                title: 'Curved Luxe Sliding Suite',
                description:
                    'Rich wood cabinetry with rounded ends and illuminated niches; wide sliding panels and a central ottoman create a dramatic, high-end dressing room.',
                image: '/Sliding/3.jpg',
                },
                {
                title: 'Charcoal Glass Sliding Wardrobe',
                description:
                    'Matte charcoal modules with smoked-glass sliding doors and a center dresser island under soft cove lighting for organized, premium storage.',
                image: '/Sliding/4.jpg',
                },
                {
                title: 'Bronze-Tinted Sliding Gallery',
                description:
                    'Full-height bronze glass sliders reveal a central dresser and illuminated rails, delivering a sleek, boutique showroom feel.',
                image: '/Sliding/5.jpg',
                },
                {
                title: 'Garden View Clear Sliding Closet',
                description:
                    'Transparent glass sliding doors with warm wood interiors and integrated lighting; open to greenery for a calm, luxurious dressing experience.',
                image: '/Sliding/6.jpg',
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

        {/* ─────────── FEATURES ─────────── */}
        <section
          ref={(el) => el && sectionsRef.current.push(el as HTMLDivElement)}
          className="py-8 bg-grey opacity-0 animate-fadeIn"
        >
          {/* one shared container so every heading & list line up */}
          <div className="max-w-7xl mx-auto px-4 leading-relaxed text-left">

            {/* --- Key Features --- */}
            <h2 className="text-w-4xl sm:text-2xl font-extrabold tracking-tight mb-4">
              <span className="text-gray-800">WHAT IS A </span>
              <span className="text-[#e9212e] font-medium"> SLIDING DOOR WARDROBE</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

            <p>A sliding door wardrobe refers to a wardrobe with doors that slide to open the closet from one side to the other, as opposed to doors that open to the cabinet's exterior like an almirah. Sliding door wardrobes can be made from any material but mainly wood or plywood. Sliding wardrobe doors look modern and chic in every home. Cabinets offers a variety of sliding wardrobe designs.</p>
          </div>
        </section>

        {/* ─────────── FEATURES ─────────── */}
        <section
          ref={(el) => el && sectionsRef.current.push(el as HTMLDivElement)}
          className="py-8 bg-grey opacity-0 animate-fadeIn"
        >
          {/* one shared container so every heading & list line up */}
          <div className="max-w-7xl mx-auto px-4 leading-relaxed text-left mb-4">

            {/* --- Key Features --- */}
            <h2 className="text-w-4xl sm:text-2xl font-extrabold tracking-tight mb-4">
              <span className="text-gray-800">ADVANTAGES OF SLIDING DOOR </span>
              <span className="text-[#e9212e] font-medium"> WARDROBE FOR YOUR HOME</span>
            </h2>

            <hr className="border-t-2 border-dotted border-gray-300 mb-6" />

            <p>A walk-in closet has the advantage of storing most of your clothes in one place, which can help free up space in other rooms. However, a walk-in closet would require additional space. Walk-in closets are typically considered a luxurious feature that is only found in wealthy homes.</p>

            <ul className="list-disc list-inside space-y-1">
              <li> Sliding door wardrobes use lesser space.</li>
              <li> Sliding door wardrobe designs are very diverse.</li>
              <li> Large wardrobes can be better served by sliding door wardrobes.</li>
              <li> Sliding door wardrobe designs look sleek.</li>
              <li> Slider wardrobes can make the most of wall space.</li>
            </ul>
          </div>
        </section>

    </div>
  );
};

export default ModularCloset;