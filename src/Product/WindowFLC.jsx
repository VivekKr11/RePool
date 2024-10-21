import React from "react";
import { NavLink } from "react-router-dom";

const WindowFLC = () => {
  return (
    <>
      <div className="mt-12 md:mt-16 min-h-screen bg-gradient-to-r from-blue-600 to-gray-900 text-white py-12 font-saira">
        {/* Main content wrapper */}
        <div className="mt-12 container mx-auto px-4 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              {" "}
              Repool India Window FLC{" "}
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              FLC which comes with a window or flap to allow easy access to the
              container's content is a window FLC and thus helps in reducing the
              turnaround time. Repool India provides windows on these FLCs
              either on both long and short side of the FLC or on just one side
              depending upon the customer requirement.These FLCs are
              specifically designed to provide maximum product protection and
              load stability while reducing the cost of relocating empty
              containers.
            </p>

            {/* Brochure button */}
            <button className="px-6 py-3 bg-white text-blue-800 font-semibold hover:bg-gray-100 transition-all">
              BROCHURE
            </button>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Blob image - positioned behind */}
            <img
              src="./blob/blob3.svg"
              alt="Additional Image"
              className="absolute object-contain right-12 h-full z-0"
            />

            {/* Main image - positioned above */}
            <img
              src="./windowflc/window3.png"
              alt="LEAP Pallet"
              className="relative object-contain  h-1/2 z-10"
            />
          </div>
        </div>

        {/* Additional details */}
        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                src="./windowflc/window1.png"
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
                  src="./windowflc/window2.png"
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
      <div className="py-12 bg-white font-saira">
        <div className="container mx-auto px-4">
          {/* Pallet Images Section */}
          <div className="flex flex-wrap justify-around items-center  overflow-hidden">
            {/* Pallet 1 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./windowflc/window4.png"
                alt="Pallet 1"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>

            {/* Pallet 2 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./windowflc/window1.png"
                alt="Pallet 2"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>

            {/* Pallet 3 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./windowflc/window6.png"
                alt="Pallet 3"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Application Section */}
          <div className="mt-12 container m-auto ">
            <h2 className="text-5xl font-bold text-gray-700 text-center">
              Application
            </h2>

            {/* Application Icons Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              {/* Icon 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/car.svg"
                  alt="Illustration Design"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">Illustration Design</p>
              </div>

              {/* Icon 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/vegetables.svg"
                  alt="FMCG"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">FMCG</p>
              </div>

              {/* Icon 3 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/shop.svg"
                  alt="Ecom Retail"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">Ecom/Retail</p>
              </div>

              {/* Icon 4 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/chemicals.svg"
                  alt="Chemicals"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">Chemicals</p>
              </div>

              {/* Icon 5 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/oil.svg"
                  alt="Oil and Paint"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">Oil and Paint</p>
              </div>

              {/* Icon 6 */}
              <div className="flex flex-col items-center">
                <img
                  src="./Products/refreshment.svg"
                  alt="Food and Beverage"
                  className="w-16 h-16"
                />
                <p className="mt-4 text-lg font-bold">Food and Beverage</p>
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

        {/* Red Contact Banner */}
      </div>
      <div className="bg-blue-900 mt-10 py-16 text-white text-center flex justify-center">
        <div className="w-full sm:w-5/6 px-4 sm:px-0 flex flex-col sm:flex-row justify-around items-center text-lg sm:text-xl">
          <p className="mb-4 sm:mb-0 sm:w-1/2">
            Get in touch with us to know how LEAP can help your business.
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

export default WindowFLC;
