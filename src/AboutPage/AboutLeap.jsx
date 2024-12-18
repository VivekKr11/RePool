import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "LEAP has been growing very well by catering to specific requirements of clients, and it's really worth hiring pallets rather than buying and blocking the capital. The quality of the pallets is stringent and the errorless management and timely availability of pallets really reduced manpower required to handle the products in the ASRS System. We wish for LEAP to achieve many more milestones.",
    author: "Chirag Kalaria",
    title: "Senior Purchasing Officer, Amul",
    logo: "./AboutUs/carousel1.webp",
  },
  {
    text: "From 2017 till as of date we are getting overwhelming support from LEAP team in terms of, on time support as and when we required. LEAP India supported us in a crucial period when we needed less no. of boxes than specified. LEAP India’s portal helps us to understand the current status of returnable material at any point of time. We appreciate the LEAP India working culture: before going for bulk supplies, they initiate a sample.  ",
    author: "Girish GadeDGM",
    title: " –Marketing, Devgiri Forging ",
    logo: "./AboutUs/carousel2.webp",
  },
  {
    text: "Cooper Corporation really appreciates all of your help in getting our returnable packaging supplies implemented. You`ve been right here wherever and whenever needed over the past few months. From getting studies done to providing the techno-commercial proposals, to trials, to annexure sign-offs, right up till implementations and smooth supplies. Thanks for your hard-work.",
    author: "S.M. Katkar",
    title: " Manager – Sales, Cooper Corporation Pvt. Ltd.",
    logo: "./AboutUs/carousel3.webp",
  },
  {
    text: "LEAP India Private Limited has provided phenomenal services to CANPACK India in the last three years in Wooden Pallet Management. The quality and delivery services have been superior and have substantially helped us to maintain our finished goods inventory very well. On behalf of CANPACK India, we sincerely thank and express our gratitude to the LEAP.",
    author: "Hemant Athalye",
    title: " Manager – CANPACK India Pvt. Ltd",
    logo: "./AboutUs/carousel4.webp",
  },
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
        className={`w-3 h-3 rounded-full border-2 transition-colors  ${
          i === activeIndex
            ? "bg-white border-white"
            : "bg-transparent border-gray-400 hover:border-white"
        }`}
      ></div>
    ),
  };
  return (
    <>
      <div className="relative w-full h-[75vh]">
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-6xl font-bold uppercase font-saira">
            About Us
          </h1>
        </div>
      </div>
      <div className="container m-auto bg-white md:p-8 font-saira">
        <div className="w-5/6 mx-auto">
          <h2 className="text-4xl font-bold mb-8">Why RePool India?</h2>
          <div className=" gap-8">
            <div>
              <p>
                We feel proud to go the extra mile to provide our customes with
                the best packaging solutions wherever and whenever they need.
                With a dedicated team of highly trained focused professionals we
                aim to provide best in class products and services to our
                clients by deeply understanding their pakaging needs and helping
                them with cost effective solutions without having to compromise
                with the quality. We know for a fact that learning is not a one
                time thing but rather a continuous process and thus with our
                customer centric business strategy we in Repool India
                continuouly monitor and improve the customer experience by
                taking their feedback aas an opportunity to improve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-between bg-white">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-black text-4xl md:text-6xl font-semibold mb-4 w-5/6 text-center font-saira">
            Leading Enterprise in Asset Pooling
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl p-6">
            {/* Image 1 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about1.jpeg"
                alt="Image 1"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about5.jpeg"
                alt="Image 2"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
            {/* Image 3 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about3.jpeg"
                alt="Image 3"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
            {/* Image 4 */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="./BackgroundImage/about4.jpeg"
                alt="Image 4"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-5/6  md:p-4 md:mt-0 mt-16">
        <div className="flex flex-col w-full md:w-1/2 md:p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            MISSION
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            To cater to our client needs in the best possible manner through
            best quality products and services, constant adaptive approach,
            innovation and embedding integrity in all what we do thus helping in
            a seamless suplly chain flow
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:p-4">
          <img
            className="w-full h-auto "
            src="./AboutUs/mission.png"
            alt="Mission Image"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-5/6  md:p-4 font-saira md:mt-0 mt-16">
        <div className="flex justify-center items-center w-full md:w-1/2 md:p-4">
          <img
            className="w-full h-auto "
            src="./AboutUs/vision.png"
            alt="Vision Image"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            VISION
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            To provide high quality and cost effective packaging solutions and
            be the best in all what we do.
          </p>
        </div>
      </div>
    

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-5/6 md:space-x-4 md:p-4">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            Our Presence
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            We began our operations in 2013, and within a short span, Repool India has
            created a significant PAN India presence.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="./AboutUs/map.webp"
            alt="Mission Image"
          />
        </div>
      </div>
      <div className="container m-auto flex justify-center  mt-10">
        <div className=" w-5/6 flex justify-center">
          <img className="object-contain  " src="./AboutUs/names.png" alt="" />
        </div>
      </div>

      {/* <div className="bg-green-600 py-10 md:px-5">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-center text-white flex justify-center font-saira pb-3"
            >
              <div className="flex justify-center">
                <p className="text-lg md:text-xl leading-relaxed w-5/6 mb-4 text-center">
                  {testimonial.text}
                </p>
              </div>
              <p className="font-semibold text-lg">{testimonial.author}</p>
              <p className="text-sm">{testimonial.title}</p>
              <img
                src={testimonial.logo}
                alt="Logo"
                className="mx-auto mt-4 w-24 h-auto"
              />
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
};

export default AboutLeap;
