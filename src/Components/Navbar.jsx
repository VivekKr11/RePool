import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";

const PRODUCT_PATHS = ["/pallet", "/flc", "/windowpls", "/ppboxes", "/metaltrolley", "/others"];

const productItems = [
  { to: "/pallet", label: "Pallet" },
  { to: "/flc", label: "Plastic PLS and Metal PLS" },
  { to: "/windowpls", label: "Window PLS" },
  { to: "/ppboxes", label: "PP Boxes" },
  { to: "/metaltrolley", label: "Metal Trolleys / Pallets" },
  { to: "/others", label: "Others" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/About", label: "About" },
  { to: "/services", label: "Services" },
];

const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobProduct, setMobProduct] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef(null);
  const triggerRef = useRef(null);
  const [dropPos, setDropPos] = useState({ left: 0, top: 0 });
  const location = useLocation();

  const openProducts = () => {
    if (triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect();
      setDropPos({ left: r.left + r.width / 2, top: r.bottom + 12 });
    }
    clearTimeout(closeTimerRef.current);
    setProductOpen(true);
  };

  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setProductOpen(false), 180);
  };

  const isProductActive = PRODUCT_PATHS.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setProductOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setProductOpen(false);
    setMobProduct(false);
  };

  return (
    <>
      {/* ── FLOATING PILL ── */}
      <div className="rp-nav-wrap">
        <nav className={`rp-pill${scrolled ? " rp-scrolled" : ""}`}>

          {/* Logo */}
          <NavLink to="/" onClick={closeAll} className="rp-logo-badge">
            <img src="./logo/Repool-India-Logo.svg" alt="Repool India" />
          </NavLink>

          {/* Desktop links */}
          <div className="rp-links">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={closeAll}
                className={({ isActive }) => `rp-link${isActive ? " rp-active" : ""}`}
              >
                {label}
              </NavLink>
            ))}

            <span className="rp-divider" />

            {/* Products dropdown trigger */}
            <div
              className="rp-prod-wrap"
              onMouseEnter={openProducts}
              onMouseLeave={scheduleClose}
            >
              <div
                ref={triggerRef}
                className={`rp-link${isProductActive ? " rp-active" : ""}`}
                role="button"
                aria-expanded={productOpen}
              >
                <span>Products</span>
                <svg
                  className={`rp-chevron${productOpen ? " open" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <span className="rp-divider" />

            <NavLink
              to="/contact"
              onClick={closeAll}
              className={({ isActive }) => `rp-link${isActive ? " rp-active" : ""}`}
            >
              Contact
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            className={`rp-ham${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* ── PRODUCTS DROPDOWN — portal so backdrop-filter works (escapes rp-pill stacking context) ── */}
      {productOpen && createPortal(
        <div
          className="rp-dropdown"
          style={{ left: dropPos.left, top: dropPos.top }}
          onMouseEnter={() => clearTimeout(closeTimerRef.current)}
          onMouseLeave={scheduleClose}
        >
          {productItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeAll}
              className={({ isActive }) => `rp-drop-item${isActive ? " active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>,
        document.body
      )}

      {/* ── BACKDROP ── */}
      <div
        className={`rp-backdrop${mobileOpen ? " open" : ""}`}
        onClick={closeAll}
      />

      {/* ── MOBILE DRAWER ── */}
      <aside className={`rp-drawer${mobileOpen ? " open" : ""}`}>

        {/* Header */}
        <div className="rp-drawer-head">
          <img src="./logo/Repool-India-Logo.svg" alt="Repool India" />
          <button onClick={closeAll} className="rp-close-btn" aria-label="Close menu">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.8)" strokeWidth="2.2" strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="rp-drawer-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeAll}
              className={({ isActive }) => `rp-mob-link${isActive ? " active" : ""}`}
            >
              {label}
            </NavLink>
          ))}

          {/* Products accordion */}
          <button
            className={`rp-mob-prod-btn${isProductActive ? " active" : ""}${mobProduct ? " open" : ""}`}
            onClick={() => setMobProduct((p) => !p)}
          >
            <span>Products</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`rp-mob-accord${mobProduct ? " open" : ""}`}>
            {productItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeAll}
                className={({ isActive }) => `rp-mob-drop-item${isActive ? " active" : ""}`}
              >
                <span className="rp-mob-dot" />
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={closeAll}
            className={({ isActive }) => `rp-mob-link${isActive ? " active" : ""}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="rp-drawer-foot">
          <p>© 2024 Repool India</p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;