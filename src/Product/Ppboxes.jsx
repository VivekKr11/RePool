import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Ppboxes = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed (3000ms = 3 seconds)
  };

  return (
    <>
      <div className="mt-12 md:mt-16 min-h-screen bg-gradient-to-r from-blue-600 to-gray-900 text-white py-12 font-saira">
        {/* Main content wrapper */}
        <div className="mt-12 container mx-auto px-4 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              {" "}
              Repool India PP Boxes
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              At Repool India, our PP Boxes are designed to offer versatile and
              efficient storage solutions tailored to your specific industrial
              needs. Constructed from durable polypropylene, these boxes combine
              lightweight convenience with robust performance. Their stackable
              design maximizes storage space, and the clear options provide easy
              visibility of contents, making organization effortless. We also
              customize the design according to customer requirements, ensuring
              that you get the perfect solution for your application. Ideal for
              manufacturing, warehousing, and distribution, our PP Boxes enhance
              operational efficiency and protect your products.
            </p>

            {/* Brochure button */}
            
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Blob image - positioned behind */}
            <img
              src="./blob/blob4.svg"
              alt="Additional Image"
              className="absolute object-contain md:-right-5 -bottom-2 h-full z-0"
            />

            {/* Main image - positioned above */}
            <img
              src="./pp/pp3.png"
              alt="Repool Pallet"
              className="relative object-contain  h-1/2 z-10"
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
      <div className="container m-auto flex flex-col md:flex-row items-start justify-between py-1 px-4 md:px-16 bg-white mt-7">
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
      <div className=" bg-white font-saira container m-auto p-3">
        <Slider {...settings}>
          <div>
            <img
              src="./pp/pp1.png"
              alt="Forklift 1"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
               src="./pp/pp2.png"
              alt="Forklift 2"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
               src="./pp/pp3.png"
              alt="Forklift 3"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
               src="./pp/pp4.png"
              alt="Forklift 4"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
               src="./pp/pp5.png"
              alt="Forklift 5"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
               src="./pp/pp6.png"
              alt="Forklift 6"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
              src="./pp/pp7.png"
              alt="Forklift 6"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
          <div>
            <img
              src="./pp/pp8.png"
              alt="Forklift 6"
              className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
            />
          </div>
        </Slider>
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
export default Ppboxes;
