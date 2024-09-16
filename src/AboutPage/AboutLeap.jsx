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
            src="./AboutUs/Bg.webp"
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
      <div className="bg-white md:p-8 font-saira">
        <div className="w-5/6 mx-auto">
          <h2 className="text-4xl font-bold mb-8">Why LEAP?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>
                We, at LEAP, know for a fact that improving supply chain
                efficiencies is a lifelong learning process. Our decades of
                research and development, products, and solutions have always
                aimed at improving efficiency, profitability, and sustainability
                of your supply chain without having to compromise on compliance.
              </p>
              <p>
                We now hold the lion's share of the market in Asset Pooling and
                have delivered quality supply chain solutions via our 22
                warehouses, 9 manufacturing units, 2500+ locations, 6 million+
                total managed assets and 4000+ consumer touchpoints spread
                across the country.
              </p>
              <p>
                Since our inception in 2013, LEAP India has driven a wide range
                of supply chain industries across the country via products,
                customized supply chain solutions, that have considerably
                reduced transportation costs, aimed for lesser wastage, minimal
                inventories, and heightened efficiencies in the Supply Chain
                Management workflow.
              </p>
            </div>
            <div>
              <p>
                The reason why customers prefer LEAP is because of our unmatched
                quality in the Pooling and Supply Chain solutions. Better
                quality solutions and innovations, including dependable
                warehousing solutions, have been our top priority in protecting
                our clients' cargo.
              </p>
              <p>
                Dedicated LEAPIans ensure proper reporting and timely response
                to our clientele, ensuring a seamless supply chain solution
                experience. We also warrant cost efficiency, compliance, and
                enhanced lifecycle visibility via our MyLEAP App, which
                communicates the flow of information seamlessly to all our
                clients.
              </p>
              <p>
                Established in 2013 with a mission of quality supply chain
                solutions in mind, LEAP, or ‘Leading Enterprise in Asset
                Pooling’, has forged the path ahead with the most exceptional
                level of execution, planning and management tailored for our
                esteemed customers across the country. We have created a niche
                for ourselves in the Supply Chain industry and have established
                ourselves as a brand that carries immense trust from everyone
                associated with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-between bg-white relative">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-black text-4xl md:text-6xl font-semibold mb-4 w-5/6 text-center font-saira">
            Leading Enterprise in Asset Pooling
          </div>
        </div>

        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-40 md:top-24">
          <img
            src="./BackgroundImage/truck1.webp"
            alt=""
            className="md:w-full md:h-full h-98 object-cover"
          />
        </div>

        <div className="bg-green-600 w-full h-1/2 md:h-1/3 lg:h-1/2 relative bottom-0"></div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-5/6  md:p-4 md:mt-0 mt-16">
        <div className="flex flex-col w-full md:w-1/2 md:p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            MISSION
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            The purpose of LEAP is to bring a two-way packaging model to the
            Indian Supply Chain by providing innovative solutions that reduce
            the operational costs of our clients, thereby increasing shareholder
            value.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:p-4">
          <img
            className="w-full h-auto "
            src="./AboutUs/mission.webp"
            alt="Mission Image"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-5/6  md:p-4 font-saira md:mt-0 mt-16">
        <div className="flex justify-center items-center w-full md:w-1/2 md:p-4">
          <img
            className="w-full h-auto "
            src="./AboutUs/vision.webp"
            alt="Vision Image"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            VISION
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            The purpose of LEAP is to bring a two-way packaging model to the
            Indian Supply Chain by providing innovative solutions that reduce
            the operational costs of our clients, thereby increasing shareholder
            value.
          </p>
        </div>
      </div>
      <div className="container m-auto flex flex-col md:flex-row items-center justify-center md:p-4">
        {/* Left Section: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <img
            src="./AboutUs/cert.webp"
            alt="Certificate"
            className="w-auto object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Right Section: Certificate Details */}
        <div className="w-full md:w-1/2 md:mt-0 md:ml-12 p-4 font-saira">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Certified for Excellence in Information Security
          </h2>
          <p className="text-gray-700 mb-4">
            LEAP India is proud to announce its recent accomplishment in
            achieving the ISO 27001:2022 certification. This certification,
            granted in accordance with Lex Q Certification procedures, marks a
            significant milestone in our commitment to maintaining the highest
            standards of information security.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            Scope of Certification
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>
              <strong>
                Ensuring Information Security in Supply Chain Management
                Solutions:
              </strong>{" "}
              We are dedicated to providing secure and reliable solutions in
              supply chain management.
            </li>
            <li>
              <strong>Design and Technology Implementation:</strong> Our team is
              committed to implementing cutting-edge design and technology
              solutions.
            </li>
            <li>
              <strong>Information Technology Services:</strong> Our IT services
              are in strict compliance with SOA V 1.0. We provide technology
              solutions that align with this framework, guaranteeing that our
              applications and services meet the highest security benchmarks.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-5/6 md:space-x-4 md:p-4">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
            Our Presence
          </h1>
          <p className="mt-5 text-lg md:text-xl text-center md:text-left">
            We began our operations in 2013, and within a short span, LEAP has
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
      <div className="container m-auto flex justify-center md:mt-0 mt-10">
        <div className=" w-5/6 flex justify-center">
          <img className="object-contain  " src="./AboutUs/names.webp" alt="" />
        </div>
      </div>

      <div className="bg-green-600 py-10 md:px-5">
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
      </div>
    </>
  );
};

export default AboutLeap;
