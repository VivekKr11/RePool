import React from "react";

const FLC = () => {
  return (
    <>
      <div className="mt-12 md:mt-16 min-h-screen bg-[#f6f7f7]  py-12 font-saira">
        {/* Main content wrapper */}
        <div className="mt-12 container mx-auto px-4 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold">LEAP FLC</h1>
            <p className="text-base md:text-lg leading-relaxed">
              Foldable Large Containers (FLCs) are collapsible plastic
              containers which are used to transport a variety of cargoes. These
              containers are specially designed to reduce the cost of relocating
              empty containers while providing maximum product protection and
              load stability.
            </p>

            {/* Brochure button */}
            <button className="px-6 py-3 bg-[#1E3C66] text-white font-semibold hover:bg-[#0f1f35] transition-all">
              BROCHURE
            </button>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="./FinalPhotos/image2.png"
              alt="LEAP Pallet"
              className="object-contain max-w-full h-auto"
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
              FLCs negate the cost of disposable packaging and reduce
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
      <div className="container m-auto flex flex-col md:flex-row items-start justify-between py-12 px-4 md:px-16 bg-white">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            OEM-Compliant Containers
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            FLCs are custom-tailored for the automotive industry, where
            components are small and there's a pressing need for on-time
            delivery in bulk quantities directly to the production lines. FLCs
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
      <div className="py-12 bg-white font-saira">
        <div className="container mx-auto px-4">
          {/* Pallet Images Section */}
          <div className="flex flex-wrap justify-around items-center  overflow-hidden">
            {/* Pallet 1 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./FinalPhotos/image4.png"
                alt="Pallet 1"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>

            {/* Pallet 2 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./FinalPhotos/image5.png"
                alt="Pallet 2"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>

            {/* Pallet 3 */}
            <div className="relative w-full md:w-1/4 cursor-pointer group overflow-hidden mb-4">
              <img
                src="./FinalPhotos/image6.png"
                alt="Pallet 3"
                className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Application Section */}
          <div className="mt-12 container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 text-center">
              Application
            </h2>

            {/* Application Icons Section */}
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10">
              {/* Icon 1 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-center md:text-left">
                <img
                  src="./Products/car.svg"
                  alt="Illustration Design"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <p className="mt-4 md:mt-0 text-base md:text-lg font-bold md:w-2/3">
                  LEAP FLCs are best suited for moving all type of parts for a
                  wide range of industries. Drop us a message to know how we can
                  help your SCM achieve better operational efficiencies.
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
      <div className="bg-blue-900 mt-10 py-16 text-white text-center flex justify-center ">
        <div className="w-5/6 flex justify-around items-center text-xl">
          <p>Get in touch with us to know how LEAP can help your business.</p>
          <button className="mt-4 bg-white text-gray-500 px-16 py-2 transform transition-transform duration-500 hover:bg-gray-200 hover:scale-105 flex items-center">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default FLC;
