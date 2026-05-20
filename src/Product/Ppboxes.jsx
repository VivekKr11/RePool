import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Ppboxes = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

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
                <span className="text-blue-400">PP Boxes</span>
              </h1>
              <div className="w-12 h-[3px] rounded-full bg-blue-500" />
              <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                At Repool India, our PP Boxes are designed to offer versatile and
                efficient storage solutions tailored to your specific industrial
                needs. Constructed from durable polypropylene, these boxes combine
                lightweight convenience with robust performance. Their stackable
                design maximizes storage space, and the clear options provide easy
                visibility of contents, making organization effortless. We also
                customize the design according to customer requirements, ensuring
                that you get the perfect solution for your application. Ideal for
                manufacturing, warehousing, and distribution, our PP Boxes enhance
                operational efficiency and protect your products.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <img src="./blob/blob4.svg" alt=""
                className="absolute top-1/2 -right-52 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] object-contain opacity-30 z-0 pointer-events-none" />
              <img src="./pp/pp3.png" alt="PP Boxes"
                className="relative z-10 w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES — white, hard cut ── */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Ergonomic",
              desc: "Ergonomic latches help in minimizing supply chain hassles as the components can be directly delivered to the assembly lines.",
            },
            {
              title: "Reduced Costs",
              desc: "FLCs negate the cost of disposable packaging and reduce transportation and inventory carrying costs by deploying a single customized container ensuring Just-In-Time (JIT) delivery.",
            },
            {
              title: "Recyclable",
              desc: "100% recyclable and environment-friendly material which is compatible with dollies, conveyors, and other warehouse equipment.",
            },
            {
              title: "Improves Flexibility",
              desc: "Streamlines line-side processes and eliminates strapping and wrapping of materials, which improves handling flexibility and product security.",
            },
          ].map((f) => (
            <div key={f.title} className="border-t-2 border-blue-500 pt-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OEM COMPLIANT — light gray ── */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start gap-12">
          {/* Left */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              OEM-Compliant Containers
            </h2>
            <div className="w-10 h-[3px] rounded-full bg-blue-500" />
            <p className="text-gray-500 text-base leading-relaxed">
              FLCs are custom-tailored for the automotive industry, where
              components are small and there's a pressing need for on-time
              delivery in bulk quantities directly to the production lines. FLCs
              aid the provision of incorporating customized inserts within the
              container which can house the components as per the specifications
              defined by the OEMs.
            </p>
          </div>

          {/* Right — checklist */}
          <div className="md:w-1/2 space-y-6">
            {[
              "Suitable for line side storage",
              "Reduced environmental impact. Fully recyclable materials result in minimal wastage in the Supply Chain",
              "Reduced environmental impact. Fully recyclable materials result in minimal wastage in the Supply Chain",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIDER — white ── */}
      <section className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our PP Boxes Range
          </h2>
          <Slider {...settings}>
            {["pp1","pp2","pp3","pp4","pp5","pp6","pp7","pp8"].map((name, i) => (
              <div key={i} className="px-3">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <img
                    src={`./pp/${name}.png`}
                    alt={`PP Box ${i + 1}`}
                    className="w-full h-[240px] md:h-[300px] object-contain p-6"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── BENEFITS — light gray ── */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Faster unloading and loading, resulting in faster turnaround times",
              "Lesser risk of product damage",
              "Reduced risk of temperature degradation for perishable items",
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

export default Ppboxes;