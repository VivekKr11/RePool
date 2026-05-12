import React from "react";
import { NavLink } from "react-router-dom";

const FLC = () => {
  return (
    <>
      <div className="mt-12 md:mt-16 min-h-screen bg-[#f6f7f7]  py-12 font-saira">
        {/* Main content wrapper */}
        <div className="mt-12 container mx-auto px-4 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              {" "}
              Repool India Plastic PLS and Metal PLS
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              Foldabable Large Containers or Plastic PLS and Metal PLS are specifically designed to
              provide maximum product protection and load stability while
              reducing the cost of relocating empty containers since they are
              foldable. As the name suggests, these Plastic PLS and Metal PLS are collapsible which
              are used to transport a variety of cargoes. Repool India deos not
              only supply plastic PLS but metal PLS too depending upon the
              customer requirement.
            </p>

            {/* Brochure button */}
            
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Blob image - positioned behind */}
            <img
              src="./blob/blob2.svg"
              alt="Additional Image"
              className="absolute object-contain md:-right-10 h-full z-0"
            />

            {/* Main image - positioned above */}
            <img
              src="./Homepage/image17.png"
              alt="Repool Pallet"
              className="relative object-contain h-80 md:h-1/2 z-10"
            />
          </div>
        </div>

        {/* Additional details */}
        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Extended Load Capacity */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">Ergonomic</h3>
            <p className="text-sm md:text-base">
              Ergonomic latches help in minimizing supply chain hassles as the
              components can be directly delivered to the assembly lines.
            </p>
          </div>

          {/* Premium Lumber */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">Reduced Costs</h3>
            <p className="text-sm md:text-base">
              PLS negate the cost of disposable packaging and reduce
              transportation and inventory carrying costs by deploying a single
              customized container ensuring Just-In-Time (JIT) delivery.
            </p>
          </div>

          {/* Recyclable */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">Recyclable</h3>
            <p className="text-sm md:text-base">
              100% recyclable and environment-friendly material which is
              compatible with dollies, conveyors, and other warehouse equipment.
            </p>
          </div>

          {/* Easy Repairs */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">
              Improves Flexibility
            </h3>
            <p className="text-sm md:text-base">
              Streamlines line-side processes and eliminates strapping and
              wrapping of materials, which improves handling flexibility and
              product security
            </p>
          </div>
        </div>
      </div>
      <div className="container m-auto flex flex-col md:flex-row items-start justify-between py-1 px-4 md:px-16 bg-white mt-7">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            OEM-Compliant Containers
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            PLS are custom-tailored for the automotive industry, where
            components are small and there's a pressing need for on-time
            delivery in bulk quantities directly to the production lines. PLS
            aid the provision of incorporating customized inserts within the
            container which can house the components as per the specifications
            defined by the OEMs.
          </p>
        </div>

        {/* Right Side - Features List */}
        <div className="md:w-1/2 space-y-8">
          <div className="flex items-center">
            <div className="bg-[#1E3C66] rounded-full p-2 flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4  ">
              <p className="text-gray-900 font-medium">
                Suitable for line side storage
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-[#1E3C66] rounded-full p-2 flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-900 font-medium">
                Reduced environmental impact. Fully recyclable materials result
                in minimal wastage in the Supply Chain
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-[#1E3C66] rounded-full p-2 flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-900 font-medium">
                Reduced environmental impact. Fully recyclable materials result
                in minimal wastage in the Supply Chain
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PLS Types Section - replaces carousel */}
      <div className="bg-white font-saira py-12">
        <div className="container mx-auto px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Our PLS Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plastic PLS */}
            <div className="flex flex-col items-center bg-[#f6f7f7] rounded-lg p-6 shadow-sm border border-gray-100 transform transition-transform duration-500 hover:scale-105">
              <img
                src="./Homepage/image17.png"
                alt="Plastic PLS"
                className="w-full h-[300px] md:h-[380px] object-contain"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E3C66] mb-2">
                  Plastic PLS
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Lightweight, durable, and 100% recyclable. Ideal for handling
                  automotive components and general industrial cargo with ease
                  and efficiency.
                </p>
              </div>
            </div>

            {/* Metal PLS */}
            <div className="flex flex-col items-center bg-[#f6f7f7] rounded-lg p-6 shadow-sm border border-gray-100 transform transition-transform duration-500 hover:scale-105">
              <img
                src="./Homepage/image18.png"
                alt="Metal PLS"
                className="w-full h-[300px] md:h-[380px] object-contain"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E3C66] mb-2">
                  Metal PLS
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Heavy-duty and robust, designed for high-load industrial
                  applications. Offers superior structural strength while
                  maintaining the foldable advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  px-4 sm:px-6 lg:px-8">
        {/* Benefits Section Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-700 font-saira">
            Benefits
          </h2>
        </div>

        {/* Cards Section */}
        <div className="font-saira mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 container m-auto max-w-scr">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center w-2/3 py-12 border mx-auto transform transition-transform duration-500 hover:scale-105 cursor-pointer">
            <div className="flex justify-start mb-4">
              <img className="h-10 w-10" src="./Products/flag.svg" alt="flag" />
            </div>
            <p className="text-gray-600 text-xl text-start">
              Faster unloading and loading, resulting in faster turnaround times
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center w-2/3 py-12 border mx-auto transform transition-transform duration-500 hover:scale-105 cursor-pointer">
            <div className="flex justify-start mb-4">
              <img className="h-10 w-10" src="./Products/flag.svg" alt="flag" />
            </div>
            <p className="text-gray-600 text-xl text-start">
              Lesser risk of product damage
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center w-2/3 py-12 border mx-auto transform transition-transform duration-500 hover:scale-105 cursor-pointer">
            <div className="flex justify-start mb-4">
              <img className="h-10 w-10" src="./Products/flag.svg" alt="flag" />
            </div>
            <p className="text-gray-600 text-xl text-start">
              Reduced risk of temperature degradation for perishable items
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center w-2/3 py-12 border mx-auto transform transition-transform duration-500 hover:scale-105 cursor-pointer">
            <div className="flex justify-start mb-4">
              <img className="h-10 w-10" src="./Products/flag.svg" alt="flag" />
            </div>
            <p className="text-gray-600 text-xl text-start">
              Reduced risk of temperature degradation for perishable items
            </p>
          </div>
        </div>

        {/* Red Contact Banner */}
      </div>
      <div className="bg-blue-900 mt-10 py-16 text-white text-center flex justify-center">
        <div className="w-full sm:w-5/6 px-4 sm:px-0 flex flex-col sm:flex-row justify-around items-center text-lg sm:text-xl">
          <p className="mb-4 sm:mb-0 sm:w-1/2">
            Get in touch with us to know how Repool India can help your business.
          </p>
          <NavLink to='/contact'>
            <button className="mt-4 sm:mt-0 bg-white text-gray-500 px-8 sm:px-16 py-2 transform transition-transform duration-500 hover:bg-gray-200 hover:scale-105 flex items-center">
              Contact
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FLC;