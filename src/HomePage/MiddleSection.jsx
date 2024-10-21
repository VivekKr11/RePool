import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer z-10 hidden sm:block"
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer z-10 hidden sm:block"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

const MiddleSection = () => {
  // Slick carousel settings with custom arrows
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed (3000ms = 3 seconds)
  };

  return (
    <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-gray-900 text-white flex justify-center items-center min-h-screen w-full p-4">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Text Section on top for small screens */}
          <div className="p-5 md:p-10 text-white md:w-1/2 w-full order-2 md:order-1">
            <h1 className="text-2xl md:text-6xl font-bold mb-4">
              Repool India
            </h1>
            <h2 className="text-xl md:text-4xl font-semibold mb-6">
              - your partner in green supply chain solutions.
            </h2>
            <p className="mb-4 md:mb-6 text-2xl md:text-base">
              Repool India is dedicated towards efficient and effective
              management of your supply chain requirements through our best in
              class sustainable packaging solutions and highly trained
              professionals aimed at improving efficiency and profitability of
              your supply chain. Repool India rents high quality pallets and
              other packaging assets to help you for a smooth delivery of your
              assets in the most efficient manner.
            </p>
            <p className="mb-4 md:mb-6 text-2xl md:text-base">
              After every delivery we repair and clean our packaging assets and
              return it to our customer for further movement of assets on time,
              thus ensuring best quality and service in each & every movement.
              Repool India not only provides the packaging asset on rent but
              also sells them depending on our client needs and keeping in mind
              what is best for them.
            </p>
            {/* <button className="bg-transparent border hover:text-black hover:bg-white border-white py-2 px-4 md:px-6 mt-4 text-sm md:text-lg font-medium">
              Visit TARON Website
            </button> */}
          </div>

          {/* Carousel Section below for small screens */}
          <div className="md:w-1/2 w-full relative order-1 md:order-2 mb-8 md:mb-0">
            <Slider {...settings}>
              <div>
                <img
                  src="./Homepage/image1.png"
                  alt="Forklift 1"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image2.png"
                  alt="Forklift 2"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image3.png"
                  alt="Forklift 3"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image4.png"
                  alt="Forklift 4"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image5.png"
                  alt="Forklift 5"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image6.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image7.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image8.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image9.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image10.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image11.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image12.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image13.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image14.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image15.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
              <div>
                <img
                  src="./Homepage/image16.png"
                  alt="Forklift 6"
                  className="w-full h-[300px] object-contain md:h-[400px] max-w-full mx-auto"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
