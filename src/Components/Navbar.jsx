import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    services: false,
    products: false,
    media: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
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

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">
            <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
              Home
            </p>
          </NavLink>
          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => toggleDropdown("about")}
          >
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer h-full py-6">
                About
              </p>

              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div
              className={`absolute top-16 left-0 bg-white py-2 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.about
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <NavLink to="/AboutLeap">
                <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                  About LEAP
                </p>
              </NavLink>
              <NavLink to="/leadership">
                <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                  Leadership
                </p>
              </NavLink>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Annual Returns
              </p>
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
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown("services")}
          >
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Services
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div
              className={`absolute top-16 left-0 bg-white py-2 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.services
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Equipment Pooling
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Returnable Packing
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Asset Management
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Transportation
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Repair and Management
              </p>
              <p className="block p-3 w-40 text-gray-800 cursor-pointer">
                Inventory Management
              </p>
            </div>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("products")}
            onMouseLeave={() => toggleDropdown("products")}
          >
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Product
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div
              className={`absolute top-16 left-0 bg-white py-2 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.products
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Pallet
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                FLC
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Window FLC
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Crate
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Utility Box
              </p>
              <p className="block p-3 w-40 text-gray-800 cursor-pointer">
                Other Products
              </p>
            </div>
          </div>

          {/* Media Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("media")}
            onMouseLeave={() => toggleDropdown("media")}
          >
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Media
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div
              className={`absolute top-16 left-0 bg-white py-2 transition-opacity duration-700 ease-in-out transform ${
                dropdowns.media
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Events
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Newsroom
              </p>
              <p className="block border-b border-gray-200 p-3 w-40 text-gray-800 cursor-pointer">
                Blog
              </p>
            </div>
          </div>

          <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
            Careers
          </p>
          <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
            Contact
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-10">
          <p className="flex items-center cursor-pointer">
            <img className="h-6" src="./logo/linkedinlogo.svg" alt="LinkedIn" />
          </p>
          <p className="flex items-center cursor-pointer">
            <img className="h-7" src="./logo/facebooklog.svg" alt="Facebook" />
          </p>
          <p className="flex items-center cursor-pointer">
            <img
              className="h-8"
              src="./logo/instagramlogo.svg"
              alt="Instagram"
            />
          </p>
          <p className="flex items-center cursor-pointer">
            <img className="h-6" src="./logo/xlogo.svg" alt="X/Twitter" />
          </p>
          <p className="flex items-center cursor-pointer">
            <img className="h-8" src="./logo/youtubelogo.svg" alt="YouTube" />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
