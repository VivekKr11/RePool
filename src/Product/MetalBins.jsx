import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}
    className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200">
    <FaArrowRight size={14} className="text-white" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}
    className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200">
    <FaArrowLeft size={14} className="text-white" />
  </div>
);

const MetalBins = () => {
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
    <section className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-5 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
            <span className="w-6 h-px bg-blue-400" />
            Others
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Metal Bins</h2>
          <div className="w-10 h-[3px] rounded-full bg-blue-500" />
          <p className="text-gray-500 text-base leading-relaxed">
            Metal Bins combine strength and versatility to meet your storage
            needs. At Repool India, we design our metal bins for efficient
            stacking, easy handling, and durability to withstand industrial
            demands. Whether for manufacturing, warehousing, or logistics, our
            Metal Bins ensure secure storage for your materials and components.
          </p>
        </div>

        {/* SLIDER */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <Slider {...settings}>
              {["./metal/Picture22.png", "./metal/Picture22.png"].map((src, i) => (
                <div key={i}>
                  <img src={src} alt={`Metal Bin ${i + 1}`}
                    className="w-full h-[280px] md:h-[360px] object-contain p-6" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetalBins;