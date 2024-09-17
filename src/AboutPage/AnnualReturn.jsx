import React from "react";

const AnnualReturn = () => {
  return (
    <>
      <div className=" py-12 relative font-saira">
        <div className="flex flex-col lg:flex-row items-center justify-center ">
          {/* Image Section */}
          <div className="w-1/2 ">
            <img
              src="./AboutUs/leadership.webp"
              alt="Annual Returns"
              className="w-1/2 h-1/2 left-10 top-36 absolute object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 h-screen w-full bg-green-600 text-white p-8  flex flex-col items-center justify-center ">
            <div className="pl-10">
              <h4 className="text-lg">Reports</h4>
              <h2 className="text-4xl font-bold mb-4">Annual Returns</h2>
              <p className="text-lg">
                The Annual Return reports, which include details of share
                capital, indebtedness, directors, shareholders, changes in
                directorships, corporate governance disclosures, etc., are
                available for download.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border border-gray-300 rounded-xl py-12 p-6 w-1/2 flex items-center justify-around bg-white shadow-lg">
          {/* Left Section: Title and Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">20-2021 Annual Returns</h3>
            <p className="text-gray-600">
              Download the report in PDF format for the year 2020-21.
            </p>
          </div>

          {/* Right Section: Download Button */}
          <div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border border-gray-300 rounded-xl py-12 p-6 w-1/2 flex items-center justify-around bg-white shadow-lg">
          {/* Left Section: Title and Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">20-2021 Annual Returns</h3>
            <p className="text-gray-600">
              Download the report in PDF format for the year 2020-21.
            </p>
          </div>

          {/* Right Section: Download Button */}
          <div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualReturn;
