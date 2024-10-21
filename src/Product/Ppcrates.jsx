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

const Ppcrates = () => {
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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between   rounded-lg overflow-hidden">
        {/* Text Section */}
        <div className="md:w-1/2 w-full p-8 md:p-12 order-2 md:order-1">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
           PP Crates
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At Repool India, we crafted our Foldable PP Crates for industrial use. Made from high-quality polypropylene, there stackable design maximizes space efficiency while ensuring easy accessibility. Resistant to moisture and chemicals, our PP Crates are ideal for various applications, from warehousing to distribution. Elevate your logistical operations with our reliable and durable storage solutions that cater to all your industrial needs.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="md:w-1/2 w-full relative order-1 md:order-2">
          <Slider {...settings}>
            <div>
              <img
                src="./crates/crates1.png"
                alt="Forklift 1"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates2.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates3.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates4.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates5.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates6.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
            <div>
              <img
                src="./crates/crates7.png"
                alt="Forklift 2"
                className="w-full h-[300px] md:h-[400px] object-contain rounded-lg "
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Ppcrates;
