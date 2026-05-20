import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiddleSection from "./MiddleSection";
import { NavLink } from "react-router-dom";

const testimonials = [
  {
    quote: "Repool India has been a game-changer for our supply chain. Their reusable packaging solutions reduced our logistics costs significantly while improving delivery efficiency.",
    name: "Rajesh Sharma", title: "Supply Chain Manager", company: "Tata Motors", initials: "RS", color: "bg-blue-500",
  },
  {
    quote: "We have been working with Repool India for over 5 years. Their quality of pallets and packaging equipment is consistently excellent and their team is always responsive.",
    name: "Priya Mehta", title: "Operations Head", company: "Mahindra Logistics", initials: "PM", color: "bg-green-500",
  },
  {
    quote: "The rental model offered by Repool India is very cost-effective. We no longer worry about asset maintenance — their team handles everything professionally.",
    name: "Anil Desai", title: "Procurement Director", company: "Bajaj Auto", initials: "AD", color: "bg-purple-500",
  },
  {
    quote: "Outstanding service and premium quality containers. Repool India understands our business needs and always delivers on time. Highly recommended for any supply chain business.",
    name: "Sunita Rao", title: "GM - Warehouse Operations", company: "Maruti Suzuki", initials: "SR", color: "bg-orange-500",
  },
  {
    quote: "Their FLC and PP Boxes are top-notch quality. We've seen a 30% reduction in packaging damage since switching to Repool India's solutions. Great team to work with.",
    name: "Vikram Joshi", title: "Logistics Manager", company: "Hero MotoCorp", initials: "VJ", color: "bg-rose-500",
  },
  {
    quote: "Repool India's metal trolleys and pallets have significantly improved our warehouse efficiency. Their after-sales support is excellent and they are always available.",
    name: "Deepak Kulkarni", title: "Plant Manager", company: "Bosch India", initials: "DK", color: "bg-teal-500",
  },
];

const sustainabilityItems = [
  {
    number: "01", title: "Reduce",
    description: "Minimize waste by reducing unnecessary consumption at every stage of the supply chain.",
    image: "/Homepage/reduce.svg", accentBg: "bg-green-500", iconBg: "bg-green-50", iconBorder: "border-green-400", accentText: "text-green-600",
  },
  {
    number: "02", title: "Recycle",
    description: "Recycle materials to turn waste into new products and close the loop on resources.",
    image: "/Homepage/recycle.svg", accentBg: "bg-blue-500", iconBg: "bg-blue-50", iconBorder: "border-blue-400", accentText: "text-blue-600",
  },
  {
    number: "03", title: "Repair",
    description: "Repair and refurbish items to maximise usability and extend their operational life.",
    image: "/Homepage/repair.svg", accentBg: "bg-orange-500", iconBg: "bg-orange-50", iconBorder: "border-orange-400", accentText: "text-orange-600",
  },
  {
    number: "04", title: "Reuse",
    description: "Reuse packaging assets across multiple cycles, reducing the need for new resources.",
    image: "/Homepage/reuse.svg", accentBg: "bg-purple-500", iconBg: "bg-purple-50", iconBorder: "border-purple-400", accentText: "text-purple-600",
  },
];

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen]     = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // ── refs ──────────────────────────────────────────────
  const isPaused   = useRef(false);   // hover pause flag
  const activeRef  = useRef(0);       // always mirrors activeTestimonial — fixes stale closure

  const toggleSidebar = () => setIsSidebarOpen((p) => !p);

  // keep activeRef in sync
  useEffect(() => { activeRef.current = activeTestimonial; }, [activeTestimonial]);

  // ── auto-advance — reads from ref so it never goes stale ──
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 4000);
    return () => clearInterval(id);
  }, []); // runs once — safe because we use functional updater + ref

  const goTo = (index) => setActiveTestimonial(index);

  const visibleTestimonials = [
    testimonials[activeTestimonial % testimonials.length],
    testimonials[(activeTestimonial + 1) % testimonials.length],
    testimonials[(activeTestimonial + 2) % testimonials.length],
  ];

  return (
    <div className="font-saira">

      {/* ── Hero ── */}
      <MiddleSection />

      {/* ── Second Section ── */}
      <div className="bg-black text-white p-4 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold md:text-left text-center">
              Best-in-Class Solutions for your Supply Chain
            </h1>
            <p className="text-lg leading-relaxed md:text-left text-center">
              Repool India rents and sell high quality pallets and other packaging equipments
              to help you in a smooth delivery of your assets in the most efficient manner.
            </p>
          </div>

          <NavLink to="/services">
            <div className="bg-[#333333] relative">
              <div className="relative overflow-hidden">
                <img src="./BackgroundImage/truck2.jpeg" alt="Products"
                  className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3" />
              </div>
              <div className="p-12 md:p-14">
                <h3 className="text-2xl font-semibold mb-2">Services</h3>
                <p className="mt-7">Custom tailored services that best fit your Supply Chain needs.</p>
                <div className="bg-green-400 w-16 h-16 flex justify-center items-center absolute right-0 bottom-0 group cursor-pointer">
                  <img className="h-7 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4" src="./logo/rightarrow.svg" alt="" />
                </div>
              </div>
            </div>
          </NavLink>

          <div className="bg-[#333333] relative overflow-hidden inline-block cursor-pointer" onClick={toggleSidebar}>
            <div className="relative overflow-hidden">
              <img src="./BackgroundImage/truck4.jpeg" alt="Products"
                className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3" />
            </div>
            <div className="p-12 md:p-14">
              <h3 className="text-2xl font-semibold mb-2">Products</h3>
              <p className="mt-7">Our products are the backbone of all supply chain businesses.</p>
              <div className="bg-blue-400 w-16 h-16 flex justify-center items-center absolute right-0 bottom-0 group cursor-pointer">
                <img className="h-7 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4" src="./logo/rightarrow.svg" alt="Open Sidebar" />
              </div>
            </div>
            <div className={`absolute top-0 right-0 h-full w-full bg-[#131F3A] text-white p-4 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
              <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
              <div className="space-y-3">
                {[
                  { to: "/pallet", label: "Pallet" },
                  { to: "/flc", label: "FLC" },
                  { to: "/windowpls", label: "Window PLS" },
                  { to: "/ppboxes", label: "PP Boxes" },
                  { to: "/metaltrolley", label: "Metal Trolleys" },
                  { to: "/others", label: "Others" },
                ].map((item) => (
                  <NavLink key={item.to} to={item.to} onClick={toggleSidebar}>
                    <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                      {item.label}
                    </p>
                  </NavLink>
                ))}
              </div>
              <button onClick={toggleSidebar} className="mt-6 w-full text-blue-400 hover:text-blue-500 transition duration-200">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Who We Are ── */}
      <div className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-3xl z-0" />
              <img src="./BackgroundImage/worker1.jpeg" alt="Supply Chain Workers"
                className="relative z-10 w-full h-72 md:h-[440px] object-cover rounded-3xl shadow-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Who We Are</span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                An Efficient and Effective Supply Chain
              </h1>
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
              <p className="text-gray-500 leading-relaxed text-base">
                In rental model for every rotation cycle we do thorough quality check and perform
                cleaning and maintenance activity of our packaging assets before returning it to our
                customer for further movement of assets. Thus, ensuring best quality and service in
                each & every movement.
              </p>
              <p className="text-gray-500 leading-relaxed text-base">
                We, the team of Repool India, are happy and proud to share that we have been in the
                business for more than 11 years and are serving OEMs and Tier 1 and Tier 2 suppliers
                since then with our efficient, cost-effective and reusable packaging systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SUSTAINABILITY
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-green-600 font-semibold mb-3">
              <span className="w-6 h-px bg-green-500" />
              Our Commitment
              <span className="w-6 h-px bg-green-500" />
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Sustainability Practices</h2>
            <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              Every container we reuse is a step toward a cleaner planet. We are committed to
              building a greener future through responsible practices across our entire supply chain.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Image */}
            <div className="relative lg:w-2/5 rounded-3xl overflow-hidden min-h-[420px]">
              <img src="./BackgroundImage/lake.jpeg" alt="Sustainability"
                className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, rgba(5,40,10,0.80) 0%, rgba(10,80,30,0.70) 100%)" }} />
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-green-300 font-semibold mb-4">
                  <span className="w-5 h-px bg-green-300" />
                  Green Future
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
                  Building a <br /><span className="text-green-400">Sustainable</span> Tomorrow
                </h3>
                <p className="text-green-100/80 text-sm leading-relaxed max-w-xs">
                  Our 4R framework — Reduce, Recycle, Repair, Reuse — drives every decision
                  we make across the supply chain.
                </p>
              </div>
            </div>

            {/* 2×2 cards */}
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sustainabilityItems.map((item, index) => (
                <div key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-md cursor-default group">
                  <div className={`w-10 h-1 rounded-full mb-6 ${item.accentBg}`} />
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold tracking-widest text-gray-300">{item.number}</span>
                    <div className={`w-12 h-12 rounded-xl border-2 ${item.iconBorder} ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <img src={item.image} alt={item.title} className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLIENT TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section
        className="py-24 px-4 bg-gray-50"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
      >
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-600 font-semibold mb-3">
                <span className="w-6 h-px bg-blue-500" />
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                What Our Clients Say
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => goTo((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center
                  hover:border-blue-600 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo((activeTestimonial + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center
                  hover:border-blue-600 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { value: "11+", label: "Years Experience", icon: "🏆" },
              { value: "500+", label: "Happy Clients", icon: "🤝" },
              { value: "99%", label: "Satisfaction Rate", icon: "⭐" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <p className="text-2xl mb-1">{stat.icon}</p>
                <p className="text-3xl md:text-4xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, i) => (
              <div
                key={`${activeTestimonial}-${i}`}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col
                  ${i === 1 ? "md:scale-105 md:shadow-lg border-blue-100" : ""}`}
              >
                <div className="mb-5">
                  <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="h-px bg-gray-100 mb-5" />
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.title}</p>
                    <p className="text-blue-600 text-xs font-medium">{t.company}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeTestimonial
                    ? "w-8 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Homepage;