import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({ about: false, products: false });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (dropdown) =>
    setDropdowns((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  const closeDropdown = (dropdown) =>
    setDropdowns((prev) => ({ ...prev, [dropdown]: false }));
  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setDropdowns({ about: false, products: false });
  };

  const linkClass = `py-6 cursor-pointer transition-colors duration-200 text-sm font-medium tracking-wide ${
    isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
  }`;

  const productItems = [
    { to: "/pallet",       label: "Pallet" },
    { to: "/flc",          label: "Plastic PLS and Metal PLS" },
    { to: "/windowpls",    label: "Window PLS" },
    { to: "/ppboxes",      label: "PP Boxes" },
    { to: "/metaltrolley", label: "Metal Trolleys/Pallets" },
    { to: "/others",       label: "Others" },
  ];

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container m-auto px-10 flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" onClick={handleMenuItemClick}>
            <div className="flex items-center justify-center p-1.5 rounded-lg bg-white">
              <img src="./logo/Repool-India-Logo.svg" alt="Repool Logo" className="h-10" />
            </div>
          </NavLink>

          {/* ── DESKTOP NAV (original, unchanged) ── */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" onClick={handleMenuItemClick}>
              <p className={linkClass}>Home</p>
            </NavLink>

            <div
              className="relative group"
              onMouseEnter={() => toggleDropdown("about")}
              onMouseLeave={() => closeDropdown("about")}
            >
              <NavLink to="/About" onClick={handleMenuItemClick}>
                <p className={linkClass}>About</p>
              </NavLink>
            </div>

            <NavLink to="/services" onClick={handleMenuItemClick}>
              <p className={linkClass}>Services</p>
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => toggleDropdown("products")}
              onMouseLeave={() => closeDropdown("products")}
            >
              <div className="flex gap-1 items-center cursor-pointer">
                <p className={linkClass}>Product</p>
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${dropdowns.products ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 10 6" fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke={isScrolled ? "#4B5563" : "#ffffff"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`absolute md:top-16 top-12 left-0 z-50 transition-all duration-300 ease-in-out transform ${
                  dropdowns.products
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                <div
                  className={`border rounded-xl shadow-2xl overflow-hidden min-w-[210px] backdrop-blur-xl ${
                    isScrolled ? "bg-white/90 border-gray-200" : "bg-white/10 border-white/20"
                  }`}
                >
                  {productItems.map((item, index, arr) => (
                    <NavLink to={item.to} key={item.to} onClick={handleMenuItemClick}>
                      <p
                        className={`px-4 py-3 text-sm cursor-pointer transition-all duration-150 ${
                          index !== arr.length - 1
                            ? isScrolled ? "border-b border-gray-100" : "border-b border-white/10"
                            : ""
                        } ${
                          isScrolled
                            ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            : "text-white/90 hover:text-blue-400 hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/contact" onClick={handleMenuItemClick}>
              <p className={linkClass}>Contact</p>
            </NavLink>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            } ${isScrolled ? "bg-gray-800" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            } ${isScrolled ? "bg-gray-800" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${isScrolled ? "bg-gray-800" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuItemClick}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "linear-gradient(160deg, #050d1a 0%, #0a1f4e 100%)" }}
      >
        {/* Header — close button only */}
        <div className="flex items-center justify-end px-6 py-4 border-b border-white/10">
          <button
            onClick={handleMenuItemClick}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {[
            { to: "/",         label: "Home" },
            { to: "/About",    label: "About" },
            { to: "/services", label: "Services" },
          ].map((item) => (
            <NavLink key={item.to} to={item.to} onClick={handleMenuItemClick}>
              <div className="flex items-center px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium">
                {item.label}
              </div>
            </NavLink>
          ))}

          {/* Products accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("products")}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
            >
              <span>Product</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${dropdowns.products ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${dropdowns.products ? "max-h-96 mt-1" : "max-h-0"}`}>
              <div className="ml-4 border-l border-blue-500/30 pl-3 space-y-0.5">
                {productItems.map((item) => (
                  <NavLink key={item.to} to={item.to} onClick={handleMenuItemClick}>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm">
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {item.label}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contact" onClick={handleMenuItemClick}>
            <div className="flex items-center px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium">
              Contact
            </div>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-slate-500 text-xs">© 2024 Repool India</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;