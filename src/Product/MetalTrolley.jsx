import React from "react";
import { NavLink } from "react-router-dom";

const MetalTrolley = () => {
  return (
    <div className="font-saira">

      {/* ── HERO — dark ── */}
      <section
        className="min-h-[85vh] w-full flex items-center pt-24 md:pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1f4e 60%, #050d1a 100%)" }}
      >
        <div className="container mx-auto max-w-6xl w-full">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-12 lg:gap-16">

            {/* TEXT */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
                <span className="w-6 h-px bg-blue-400" />
                Our Products
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Repool India <br />
                <span className="text-blue-400">Metal Trolley/Pallets</span>
              </h1>
              <div className="w-12 h-[3px] rounded-full bg-blue-500" />
              <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                At Repool India, our Metal Trolleys/Pallets are engineered for maximum
                efficiency and durability in any industrial setting. Crafted from
                robust materials, these trolleys are designed to support heavy
                loads while ensuring smooth mobility. Their ergonomic design and
                sturdy construction make transporting goods effortless, enhancing
                workflow in warehouses, factories, and distribution centers. With
                options for customization, our Metal Trolleys/Pallets can be tailored to
                fit your specific operational needs.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <img src="./blob/blob5.svg" alt=""
                className="absolute top-1/2 -right-48 md:-right-60 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain opacity-30 z-0 pointer-events-none" />
              <img src="./metal/image21.png" alt="Metal Trolley"
                className="relative z-10 w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES — white, hard cut ── */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              title: "Extended Load Capacity",
              desc: "Repool India's pallet's application ranges from 800 kg to 2 tons in dynamic conditions, and up to 5 tons load capacity in static conditions.",
            },
            {
              title: "Recyclable",
              desc: "100% recyclable and environment-friendly material which is compatible with dollies, conveyors, and other warehouse equipment.",
            },
            {
              title: "Easy Repairs",
              desc: "Repool India Pallets are easy to repair as they are made with multiple boards which can be removed and replaced when necessary.",
            },
          ].map((f) => (
            <div key={f.title} className="border-t-2 border-blue-500 pt-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOLISTIC SUPPORT — light gray ── */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 lg:w-1/2 leading-tight">
              Holistic Support for Your SCM
            </h2>
            <p className="text-gray-500 text-base leading-relaxed lg:w-1/2">
              Our Pallets are engineered for durability. Want to move one box
              at a time or up to hundreds at a time? Repool India's Pallets are
              a time-tested solution and one that's largely accepted as one of
              the best platform services in India. Our Pallets can be a
              powerful addition to your product handling strategy which can
              bring forth increased operational efficiencies in Product
              Stacking, storage, handling and transport of goods.
            </p>
          </div>

          <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="./metal/image21.png"
              alt="PL-1200 x 1000"
              className="w-full h-64 md:h-96 object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Metal Trolley / Pallets
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS — white ── */}
      <section className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Faster unloading and loading, resulting in faster turnaround times",
              "Lesser risk of product damage",
              "Reduced risk of temperature degradation for perishable items",
            ].map((b, i) => (
              <div key={i}
                className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="mb-5">
                  <img className="h-10 w-10" src="./Products/flag.svg" alt="flag" />
                </div>
                <p className="text-gray-600 text-lg">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark, hard cut ── */}
      <section
        className="py-16 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1f4e 50%, #050d1a 100%)" }}
      >
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-around items-center gap-6 text-lg sm:text-xl">
          <p className="sm:w-1/2 text-slate-300">
            Get in touch with us to know how Repool India can help your business.
          </p>
          <NavLink to="/contact">
            <button className="bg-white text-gray-800 font-semibold px-12 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Contact
            </button>
          </NavLink>
        </div>
      </section>

    </div>
  );
};

export default MetalTrolley;