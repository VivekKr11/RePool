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
    <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">

        {/* SLIDER — left */}
        <div className="w-full md:w-1/2 relative order-1">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <Slider {...settings}>
              {[
                { src: "./sheets/sheet1.jpg" },
                { src: "./sheets/sheet2.jpg" },
                { src: "./sheets/sheet3.png" },
              ].map((item, i) => (
                <div key={i}>
                  <img src={item.src} alt={`Separator Sheet ${i + 1}`}
                    className="w-full h-[280px] md:h-[360px] object-contain p-6" />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* TEXT — right */}
        <div className="w-full md:w-1/2 space-y-5 order-2">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
            <span className="w-6 h-px bg-blue-400" />
            Others
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Separator Sheet</h2>
          <div className="w-10 h-[3px] rounded-full bg-blue-500" />
          <p className="text-gray-500 text-base leading-relaxed">
            Repool India provides separator sheets which are specifically
            designed for industrial applications. Made from durable
            polypropylene, these separators offer exceptional resistance to
            chemicals and moisture, ensuring long-lasting reliability in
            demanding environments. Enhance your operational efficiency with our
            PP Separator, providing optimal filtration and separation solutions
            tailored to meet your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Separatorsheet;