import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="mt-12 md:mt-16 h-screen relative w-full md:py-24 py-10 bg-blue-600 ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./BackgroundImage/lake.jpeg"
            alt="Warehouse"
            className="object-cover w-full h-full opacity-20"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative  z-10 max-w-4xl mx-auto px-6 text-white">
          <h2 className="text-sm font-semibold uppercase text-white">
            Contact Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Your Trusted Container Experts
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-xl">
            We specialize in providing high-quality containers for storage,
            transportation, and other industrial needs. Our team of experts is
            ready to assist you with any inquiries or support.
          </p>

          {/* Email Section */}
          <div className="mt-6 text-white">
            <p className="font-bold">
              Email Us:{" "}
              <span className="font-normal pl-2">rohit@repoolindia.com</span><span> |</span>
              <span className="font-normal pl-2">adarsh@repoolindia.com</span>
            </p>
            <p className="text-sm text-gray-300">
              We're here to answer all your questions and help you find the
              right solution for your container needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4 justify-center">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600">
              Call +91 8055551110, +91 8877139119
            </button>
          </div>

          {/* Additional Section */}
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Whether you're looking for storage containers or custom-built
              solutions, we are here to assist you every step of the way.
              Contact us for more information!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
