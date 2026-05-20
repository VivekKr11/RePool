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
    <section className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-5 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
            <span className="w-6 h-px bg-blue-400" />
            Others
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">PP Crates</h2>
          <div className="w-10 h-[3px] rounded-full bg-blue-500" />
          <p className="text-gray-500 text-base leading-relaxed">
            At Repool India, we crafted our Foldable PP Crates for industrial use. Made from
            high-quality polypropylene, their stackable design maximizes space efficiency while
            ensuring easy accessibility. Resistant to moisture and chemicals, our PP Crates are
            ideal for various applications, from warehousing to distribution. Elevate your
            logistical operations with our reliable and durable storage solutions that cater to
            all your industrial needs.
          </p>
        </div>

        {/* SLIDER */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <Slider {...settings}>
              {["crates1","crates2","crates3","crates4","crates5","crates6","crates7"].map((name, i) => (
                <div key={i}>
                  <img src={`./crates/${name}.png`} alt={`PP Crate ${i + 1}`}
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

export default Ppcrates;  