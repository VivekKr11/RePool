import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "RepoolEmailService";
const EMAILJS_TEMPLATE_ID = "template_wsku2zm";
const EMAILJS_PUBLIC_KEY = "FW4l7fItR8xIDbF8g";

const ContactDetails = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setForm({ from_name: "", from_email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const inputClass = `w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm
    placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white
    transition-all duration-200`;

  return (
    <div className="font-saira">
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO (dark, existing UI)
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[85vh] w-full flex items-center pt-24 md:pt-28 pb-16 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #050d1a 0%, #0a1f4e 60%, #050d1a 100%)",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="./BackgroundImage/lake.jpeg"
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Radial glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(29,78,216,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            {/* LEFT — heading + description */}
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
                transportation, and other industrial needs. Our team of experts
                is ready to assist you with any inquiries or support.
              </p>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                Whether you're looking for storage containers or custom-built
                solutions, we are here to assist you every step of the way.
              </p>
            </div>

            {/* RIGHT — contact info cards */}
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Email */}
              <div
                className="rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    Email Us
                  </p>
                  <p className="text-slate-400 text-sm">
                    rohit@repoolindia.com
                  </p>
                  <p className="text-slate-400 text-sm">
                    adarsh@repoolindia.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-green-600/30 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    Call Us
                  </p>
                  <p className="text-slate-400 text-sm">+91 8055551110</p>
                  <p className="text-slate-400 text-sm">+91 8877139119</p>
                </div>
              </div>

              {/* Location */}
              <div
                className="rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    Visit Us
                  </p>
                  <p className="text-slate-400 text-sm">
                    Gate No 123, Moi Road, Siddeshwar Chowk,
                    <br />
                    Chimbali Phata, Pune - 410501
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — QUERY FORM (white, separate)
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-500 font-medium mb-3">
              <span className="w-6 h-px bg-blue-500" />
              Get In Touch
              <span className="w-6 h-px bg-blue-500" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Send Us a Query
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Have a question or need a quote? Fill in the form below and our
              team will get back to you within 24 hours.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email — side by side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-600 text-xs font-semibold mb-1.5 block tracking-wide uppercase">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-xs font-semibold mb-1.5 block tracking-wide uppercase">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-600 text-xs font-semibold mb-1.5 block tracking-wide uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-600 text-xs font-semibold mb-1.5 block tracking-wide uppercase">
                  Your Query <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements — product type, quantity, delivery location, etc."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl text-white font-semibold text-sm tracking-wide
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                  boxShadow: "0 8px 24px rgba(29,78,216,0.25)",
                }}
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Query →"
                )}
              </button>

              {/* Success */}
              {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="text-green-700 text-sm font-medium">
                      Query sent successfully!
                    </p>
                    <p className="text-green-600 text-xs">
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <p className="text-red-700 text-sm font-medium">
                      Something went wrong.
                    </p>
                    <p className="text-red-600 text-xs">
                      Please try again or call us on +91 8055551110.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — CTA (dark)
      ══════════════════════════════════════════ */}
      <section
        className="py-16 px-4 text-white"
        style={{
          background:
            "linear-gradient(135deg, #050d1a 0%, #0a1f4e 50%, #050d1a 100%)",
        }}
      >
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-around items-center gap-6">
          <div className="sm:w-1/2 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Ready to get started?
            </h3>
            <p className="text-slate-400">
              Reach out to us today and let's find the right solution for your
              business.
            </p>
          </div>
          <a href="tel:+918055551110">
            <button
              className="bg-white text-gray-800 font-semibold px-12 py-3 rounded-xl
              hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Call Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
