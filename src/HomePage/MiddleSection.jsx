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
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
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
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

const MiddleSection = () => {
  // Slick carousel settings with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-green-600 flex justify-center items-center min-h-screen w-full p-4">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Text Section on top for small screens */}
          <div className="p-5 md:p-10 text-white md:w-1/2 w-full order-2 md:order-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">TARON MHE</h1>
            <h2 className="text-lg md:text-xl font-semibold mb-6">
              A Subsidiary of LEAP India
            </h2>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              TARON offers comprehensive solutions in Material Handling
              operations for your effective supply chain needs. From a totally
              modern equipment, advanced safety features, asset management with
              real-time fleet analysis to ensuring "ZERO" incident rate with
              higher productivity.
            </p>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              Our prime goal is to make our customers delight by anticipating
              their changing wants while providing effective results.
            </p>
            <button className="bg-transparent border hover:text-black hover:bg-white border-white py-2 px-4 md:px-6 mt-4 text-sm md:text-lg font-medium">
              Visit TARON Website
            </button>
          </div>

          {/* Carousel Section below for small screens */}
          <div className="md:w-1/2 w-full relative order-1 md:order-2 mb-8 md:mb-0">
            <Slider {...settings}>
              <div>
                <img
                  src="./BackgroundImage/one.webp"
                  alt="Forklift 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src="./BackgroundImage/2.webp"
                  alt="Forklift 2"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src="./BackgroundImage/3.webp"
                  alt="Forklift 3"
                  className="w-full h-auto object-cover"
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
