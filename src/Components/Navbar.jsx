import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    services: false,
    products: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check screen size to differentiate between mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const closeDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when an item is clicked
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="container m-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo/Repool-India-Logo.svg"
            alt="Repool Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-12"
            }`} // Adjust height based on scroll
          />
        </div>

        {/* Hamburger/Close Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <img className="h-8" src="./logo/close.svg" alt="Close" />
            ) : (
              <img className="h-8" src="./logo/menu.svg" alt="Menu" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen
              ? "block fixed inset-0 bg-white z-50 h-screen w-screen"
              : "hidden"
          } md:flex space-x-8 md:space-y-0 space-y-4 flex-col md:flex-row md:items-center absolute md:relative top-12 border-t-2 md:top-0 left-0 right-0 bg-white md:bg-transparent px-4 md:px-0 z-40`}
        >
          <NavLink to="/" onClick={handleMenuItemClick}>
            <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
              Home
            </p>
          </NavLink>

          {/* About Dropdown */}
          <div
            className="relative group"
            onClick={() => {
              if (isMobile) toggleDropdown("about");
            }}
            onMouseEnter={() => {
              if (!isMobile) toggleDropdown("about");
            }}
            onMouseLeave={() => {
              if (!isMobile) closeDropdown("about");
            }}
          >
            <div className="flex gap-1 items-center">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer h-full py-6">
                About
              </p>
              <img className="h-3" src="./logo/dropdown.svg" alt="Dropdown" />
            </div>
            <div
              className={`absolute md:top-16 top-12 left-0 bg-white shadow-lg rounded-lg py-2 z-50 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.about
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <NavLink to="/AboutLeap" onClick={handleMenuItemClick}>
                <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                  About LEAP
                </p>
              </NavLink>
              <NavLink to="/leadership" onClick={handleMenuItemClick}>
                <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                  Leadership
                </p>
              </NavLink>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Sustainability
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                CSR
              </p>
              <p className="block p-2 w-40 text-gray-800 cursor-pointer">
                Policies
              </p>
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onClick={() => {
              if (isMobile) toggleDropdown("services");
            }}
            onMouseEnter={() => {
              if (!isMobile) toggleDropdown("services");
            }}
            onMouseLeave={() => {
              if (!isMobile) closeDropdown("services");
            }}
          >
            <div className="flex gap-1 items-center">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Services
              </p>
              <img className="h-3" src="./logo/dropdown.svg" alt="Dropdown" />
            </div>
            <div
              className={`absolute md:top-16 top-12 left-0 bg-white shadow-lg rounded-lg py-2 z-50 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.services
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Equipment Pooling
              </p>
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Returnable Packing
              </p>
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Transportation
              </p>
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Repair and Management
              </p>
            </div>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onClick={() => {
              if (isMobile) toggleDropdown("products");
            }}
            onMouseEnter={() => {
              if (!isMobile) toggleDropdown("products");
            }}
            onMouseLeave={() => {
              if (!isMobile) closeDropdown("products");
            }}
          >
            <div className="flex gap-1 items-center">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Product
              </p>
              <img className="h-3" src="./logo/dropdown.svg" alt="Dropdown" />
            </div>
            <div
              className={`absolute md:top-16 top-12 left-0 bg-white shadow-lg rounded-lg py-2 z-50 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.products
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <NavLink to="/pallet" onClick={handleMenuItemClick}>
                <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                  Pallet
                </p>
              </NavLink>
              <NavLink to="/flc">
                <p
                  className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  FLC
                </p>
              </NavLink>
              <NavLink to="/ppboxes">
                <p
                  className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  PP Boxes
                </p>
              </NavLink>
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
               Metal Trolleys
              </p>
              <p
                className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer"
                onClick={handleMenuItemClick}
              >
              Others
              </p>
            </div>
          </div>

          <NavLink to="/contact" onClick={handleMenuItemClick}>
            <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
              Contact
            </p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
