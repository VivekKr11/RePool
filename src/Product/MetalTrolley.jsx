import React from "react";
import { NavLink } from "react-router-dom";

const MetalTrolley = () => {
  return (
    <>
      <div className="mt-12 md:mt-16 min-h-screen bg-gradient-to-r from-blue-600 to-gray-900 text-white py-12 font-saira">
        {/* Main content wrapper */}
        <div className="mt-12 container mx-auto px-4 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-12 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              {" "}
              Repool India Metal Trolley{" "}
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              At Repool India, our Metal Trolleys are engineered for maximum
              efficiency and durability in any industrial setting. Crafted from
              robust materials, these trolleys are designed to support heavy
              loads while ensuring smooth mobility. Their ergonomic design and
              sturdy construction make transporting goods effortless, enhancing
              workflow in warehouses, factories, and distribution centers. With
              options for customization, our Metal Trolleys can be tailored to
              fit your specific operational needs.
            </p>

            {/* Brochure button */}
            <button className="px-6 py-3 bg-white text-blue-800 font-semibold hover:bg-gray-100 transition-all">
              BROCHURE
            </button>
          </div>

          {/* Right images */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Blob image - positioned behind */}
            <img
              src="./blob/blob5.svg"
              alt="Additional Image"
              className="absolute object-contain h-[500px]  -top-20  md:-top-16 z-0"
            />

            {/* Main image - positioned above */}
            <img
              src="./metal/metal2.png"
              alt="LEAP Pallet"
              className="relative object-contain right-3 h-[350px] z-10"
            />
          </div>
        </div>

        {/* Additional details */}
        <div className="container mx-auto px-4 md:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Extended Load Capacity */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">
              Extended Load Capacity
            </h3>
            <p className="text-sm md:text-base">
              LEAP's pallet’s application ranges from 800 kg to 2 tons in
              dynamic conditions, and up to 5 tons load capacity in static
              conditions.
            </p>
          </div>

          {/* Premium Lumber */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">Premium Lumber</h3>
            <p className="text-sm md:text-base">
              LEAP’s premium quality timber is sourced from Europe, Russian
              Federation, Baltic States, Ukraine, and New Zealand.
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
            <h3 className="text-lg md:text-xl font-bold">Easy Repairs</h3>
            <p className="text-sm md:text-base">
              LEAP Pallets are easy to repair as they are made with multiple
              boards which can be removed and replaced when necessary.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white text-gray-900 font-saira ">
        {/* Main content wrapper */}
        <div className="container mx-auto px-4 lg:max-w-4xl">
          {/* Header Section */}
          <div className="text-center lg:text-left flex lg:flex-row flex-col lg:justify-between lg:items-center">
            {/* Flex container for title and paragraph */}
            <div className="flex flex-col lg:flex-row lg:w-full lg:space-x-8 space-y-4 lg:space-y-0">
              {/* Left side: h1 */}
              <h1 className="text-3xl text-center md:text-5xl font-bold lg:w-1/2">
                Holistic Support for Your SCM
              </h1>

              {/* Right side: paragraph */}
              <p className="text-base md:text-lg leading-relaxed lg:w-1/2">
                Our Pallets are engineered for durability. Want to move one box
                at a time or up to hundreds at a time? LEAP India’s Pallets are
                a time-tested solution and one that's largely accepted as one of
                the best platform services in India. Our Pallets can be a
                powerful addition to your product handling strategy which can
                bring forth increased operational efficiencies in Product
                Stacking, storage, handling and transport of goods.
              </p>
            </div>
          </div>

          {/* Image and Description Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pallet 1 */}
            <div className="text-center border-r-0 lg:border-r-2 border-l-0 lg:border-l-2 pb-8 lg:pb-16 p-2">
              <img
                src="./metal/metal1.png"
                alt="PL-1200 x 1000"
                className="mx-auto object-contain"
              />
              <h3 className="text-lg font-bold mt-4">PL - 1200 x 1000</h3>
              <p className="text-base mt-2">
                These four-way entry, full perimeter pallets are compatible with
                Forklift, Reach Truck, and Stacker, and are high racking Pallets
                suitable for the beverage industry.
              </p>
            </div>

            {/* Pallet 2 */}
            <div className="text-center border-r-0 lg:border-r-2 border-l-0 lg:border-l-2 pb-8 lg:pb-12 flex items-center p-2">
              <div>
                <img
                  src="./metal/metal2.png"
                  alt="E-1200 x 1000"
                  className="mx-auto object-contain"
                />
                <h3 className="text-lg font-bold mt-4">E - 1200 x 1000</h3>
                <p className="text-base mt-2">
                  These are two-way entry pallets best suited for storing and
                  racking in 3PL and FMCG industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Benefits Section Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-700 font-saira">
            Benefits
          </h2>
        </div>

        {/* Cards Section */}
        <div className="font-saira mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 container m-auto max-w-screen-lg">
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
        </div>
      </div>
      <div className="bg-blue-900 mt-10 py-16 text-white text-center flex justify-center">
        <div className="w-full sm:w-5/6 px-4 sm:px-0 flex flex-col sm:flex-row justify-around items-center text-lg sm:text-xl">
          <p className="mb-4 sm:mb-0 sm:w-1/2">
            Get in touch with us to know how LEAP can help your business.
          </p>
          <NavLink to="/contact">
            <button className="mt-4 sm:mt-0 bg-white text-gray-500 px-8 sm:px-16 py-2 transform transition-transform duration-500 hover:bg-gray-200 hover:scale-105 flex items-center">
              Contact
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MetalTrolley;
