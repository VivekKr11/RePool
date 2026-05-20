import React from "react";

const ContactDetails = () => {
  return (
    <div className="font-saira">

      {/* ── HERO — dark ── */}
      <section
        className="relative min-h-[85vh] w-full flex items-center pt-24 md:pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1f4e 60%, #050d1a 100%)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="./BackgroundImage/lake.jpeg"
            alt="Warehouse"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Subtle glow */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(29,78,216,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 container mx-auto max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">

            {/* LEFT — text */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
                <span className="w-6 h-px bg-blue-400" />
                Contact Us
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Your Trusted <br />
                <span className="text-blue-400">Container Experts</span>
              </h1>
              <div className="w-12 h-[3px] rounded-full bg-blue-500" />
              <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                We specialize in providing high-quality containers for storage,
                transportation, and other industrial needs. Our team of experts is
                ready to assist you with any inquiries or support.
              </p>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                Whether you're looking for storage containers or custom-built
                solutions, we are here to assist you every step of the way.
              </p>
            </div>

            {/* RIGHT — contact cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">

              {/* Email card */}
              <div className="rounded-2xl p-6 border border-white/10 space-y-3"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-blue-600/30 border border-blue-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Email Us</p>
                </div>
                <p className="text-slate-300 text-sm">rohit@repoolindia.com</p>
                <p className="text-slate-300 text-sm">adarsh@repoolindia.com</p>
                <p className="text-slate-500 text-xs">We're here to answer all your questions and help you find the right solution.</p>
              </div>

              {/* Phone card */}
              <div className="rounded-2xl p-6 border border-white/10 space-y-3"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-green-600/30 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Call Us</p>
                </div>
                <p className="text-slate-300 text-sm">+91 8055551110</p>
                <p className="text-slate-300 text-sm">+91 8877139119</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO — white, hard cut ── */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Email */}
            <div className="border-t-2 border-blue-500 pt-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-500 text-sm">rohit@repoolindia.com</p>
              <p className="text-gray-500 text-sm">adarsh@repoolindia.com</p>
            </div>

            {/* Phone */}
            <div className="border-t-2 border-blue-500 pt-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-500 text-sm">+91 8055551110</p>
              <p className="text-gray-500 text-sm">+91 8877139119</p>
            </div>

            {/* Support */}
            <div className="border-t-2 border-blue-500 pt-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We're here to answer all your questions and help you find the right solution for your container needs.
              </p>
            </div>

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
            Ready to get started? Reach out to us today and let's find the right solution for your business.
          </p>
          <a href="tel:+918055551110">
            <button className="bg-white text-gray-800 font-semibold px-12 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Call Now
            </button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ContactDetails;