import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientLogos = [
  { src: "./AboutUs/Ashok_Leyland_Logo.png", alt: "Ashok Leyland" },
  { src: "./AboutUs/daimiler logo.png", alt: "Daimler" },
  { src: "./AboutUs/fiat logo.svg", alt: "Fiat" },
  { src: "./AboutUs/JCB-Logo.jpg", alt: "JCB" },
  { src: "./AboutUs/Mahindra logo.png", alt: "Mahindra" },
  { src: "./AboutUs/maruti-suzuki-logo.jpg", alt: "Maruti Suzuki" },
  { src: "./AboutUs/new holland agriculture.jpg", alt: "New Holland Agriculture" },
  { src: "./AboutUs/Tata-Group-logo.png", alt: "Tata Group" },
  { src: "./AboutUs/Tesla_logo.png", alt: "Tesla" },
  { src: "./AboutUs/tvs logo.png", alt: "TVS" },
];

const AboutLeap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border-2 transition-colors ${
          i === activeIndex
            ? "bg-white border-white"
            : "bg-transparent border-gray-400 hover:border-white"
        }`}
      ></div>
    ),
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[55vh] md:h-[75vh]">
        <img
          className="absolute bottom-0 z-10 w-full"
          src="./AboutUs/White-bg-mask.svg"
          alt=""
        />

        <div className="absolute inset-0">
          <img
            src="./BackgroundImage/about3.jpeg"
            alt="Warehouse"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase font-saira text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* WHY REPOOL */}
      <div className="container mx-auto bg-white px-4 md:p-8 font-saira py-10">
        <div className="w-full md:w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Repool India?
          </h2>

          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Repool India is a trusted provider of returnable packaging and
              logistics solutions, serving the automotive and industrial sectors
              for over 11 years.
            </p>

            <p>
              With a strong commitment to efficiency, reliability and
              sustainability, we help businesses optimize their supply chains
              through durable reusable packaging systems and dependable
              logistics support.
            </p>

            <p>
              Over the years, we have built long term relationships with clients
              by consistently delivering quality service, operational
              excellence, and cost effective solutions tailored to industry
              needs. We know for a fact that learning is not a one time thing
              but rather a continuous process and thus with our customer centric
              business strategy we in Repool India continuously monitor and
              improve the customer experience by taking feedback as an
              opportunity to improve.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GRID SECTION */}
      <div className="bg-white py-10 md:py-20">
        {/* Header */}
        <div className="flex justify-center px-4">
          <div className="text-black text-3xl md:text-6xl font-semibold mb-10 w-full md:w-5/6 text-center font-saira">
            Leading Enterprise in Asset Pooling
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
            {/* Image 1 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about1.jpeg"
                alt="Image 1"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about5.jpeg"
                alt="Image 2"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about3.jpeg"
                alt="Image 3"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>

            {/* Image 4 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about4.jpeg"
                alt="Image 4"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            MISSION
          </h1>

          <p className="mt-5 text-base md:text-xl leading-relaxed text-center md:text-left">
            To cater to our client needs in the best possible manner through
            best quality products and services, constant adaptive approach,
            innovation and embedding integrity in all what we do thus helping in
            a seamless supply chain flow.
          </p>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-contain"
            src="./AboutUs/mission.png"
            alt="Mission"
          />
        </div>
      </div>

      {/* VISION */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10 font-saira">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-contain"
            src="./AboutUs/vision.png"
            alt="Vision"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            VISION
          </h1>

          <p className="mt-5 text-base md:text-xl leading-relaxed text-center md:text-left">
            To provide high quality and cost effective packaging solutions and
            be the best in all what we do.
          </p>
        </div>
      </div>

      {/* OUR PRESENCE */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            Our Presence
          </h1>

          <p className="mt-5 text-base md:text-xl leading-relaxed text-center md:text-left">
            We began our operations in 2013, and within a short span, Repool
            India has created a significant PAN India presence.
          </p>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="./AboutUs/map.png"
            alt="Map"
          />
        </div>
      </div>

      {/* OUR CLIENTS */}
      <div className="py-12 md:py-20 font-saira overflow-hidden">
        {/* Heading */}
        <div className="flex justify-center mb-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Our Clients
          </h1>
        </div>

        {/* Marquee wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade edge */}
          <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade edge */}
          <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee track — duplicated for seamless infinite loop */}
          <div
            className="flex items-center gap-16"
            style={{
              animation: "marquee 30s linear infinite",
              width: "max-content",
            }}
          >
            {/* First set */}
            {clientLogos.map((logo, i) => (
              <img
                key={`a-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((logo, i) => (
              <img
                key={`b-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Keyframe style injected inline so no tailwind.config change is needed */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
};

export default AboutLeap;