import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 transition-colors p-3 rounded-full shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} className="text-black" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-6 transform -translate-y-1/2 transition-colors p-3 rounded-full shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} className="text-black" />
    </div>
  );
};
const Separatorsheet = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mt-16 flex justify-center items-center w-full p-8 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden">
        {/* Carousel Section - Now on the left side */}
        <div className="md:w-1/2 w-full relative order-1 md:order-1">
          <Slider {...settings}>
            <div>
              <img
                src="./sheets/sheet1.jpg"
                alt="Forklift 1"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg"
              />
            </div>
            <div>
              <img
                src="./sheets/sheet2.jpg"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg"
              />
            </div>
            <div>
              <img
                src="./sheets/sheet3.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg"
              />
            </div>
          </Slider>
        </div>

        {/* Text Section - Now on the right side */}
        <div className="md:w-1/2 w-full p-8 md:p-12 order-2 md:order-2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Seperator Sheet
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Repool India provides separator sheet which are specifically
            designed for industrial applications. Made from durable
            polypropylene, these separator offers exceptional resistance to
            chemicals and moisture, ensuring long-lasting reliability in
            demanding environments. Enhance your operational efficiency with our
            PP Separator, providing optimal filtration and separation solutions
            tailored to meet your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Separatorsheet;
