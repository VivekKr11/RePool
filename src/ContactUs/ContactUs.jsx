import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="mt-16 h-screen relative w-full py-16 bg-blue-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./AboutUs/Bg.webp"
            alt="Warehouse"
            className="object-cover w-full h-full opacity-20"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative mt-12 z-10 max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-4xl font-bold uppercase text-center mb-12 font-saira">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Section */}
            <div className="flex flex-col items-center bg-white text-blue-800 p-8 shadow-lg rounded-lg">
              <div className="text-3xl font-semibold mb-4">Phone</div>
              <p className="text-lg mb-2"> 8055551110</p>
              <p className="text-sm text-gray-600">
                Available Monday to Friday, 9 AM to 6 PM
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center bg-white text-blue-800 p-8 shadow-lg rounded-lg">
              <div className="text-3xl font-semibold mb-4">Email</div>
              <p className="text-lg mb-2">rohit@repoolindia.com</p>
              <p className="text-sm text-gray-600">
                Feel free to email us with any queries
              </p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-12 max-w-2xl mx-auto text-center text-white">
            <p className="text-lg">
              Whether you have a question about our products, pricing, or
              anything else, our team is here to help. We provide top-quality
              containers designed to meet your storage needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
