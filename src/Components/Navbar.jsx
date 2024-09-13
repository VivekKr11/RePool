import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 ">
      <div className="container m-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo/Repool-India-Logo.svg"
            alt="Repool Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <p className="py-6 text-gray-800 hover:text-blue-500 cursor-pointer">
            Home
          </p>

          {/* About Dropdown */}
          <div className="relative h-full group">
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer h-full py-6">
                About
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div className="absolute top-16 left-0 hidden group-hover:block z-10">
              <div className="bg-white  py-2">
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  About LEAP
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Leadership
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Annual Trturns
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Sustainability
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  CSR
                </p>
                <p className="block   p-2 w-40 text-gray-800  cursor-pointer">
                  Policies
                </p>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Services
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div className="absolute top-16 left-0 hidden group-hover:block z-10">
              <div className="bg-white  py-2">
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Equipment Pooling
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Returnable Packing
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Asset Mnagement
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Transportation
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Repair and Management
                </p>
                <p className="block  p-3 w-40 text-gray-800  cursor-pointer">
                  Inventory Management
                </p>
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Product
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div className="absolute top-16 left-0 hidden group-hover:block z-10">
              <div className="bg-white  py-2">
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Pallet
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  FLC
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Window FLC
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Crate
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Utility Box
                </p>
                <p className="block   p-3 w-40 text-gray-800  cursor-pointer">
                  Other Products
                </p>
              </div>
            </div>
          </div>

          {/* Media Dropdown */}
          <div className="relative group">
            <div className="flex gap-1">
              <p className="text-gray-800 hover:text-blue-500 cursor-pointer py-6">
                Media
              </p>
              <div className="flex items-center">
                <img className="h-3" src="./logo/dropdown.svg" alt="" />
              </div>
            </div>
            <div className="absolute top-16 left-0 hidden group-hover:block z-10">
              <div className="bg-white  py-2">
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                 Events
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Newsroom
                </p>
                <p className="block  border-b border-gray-200 p-3 w-40 text-gray-800  cursor-pointer">
                  Blog
                </p>
              </div>
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