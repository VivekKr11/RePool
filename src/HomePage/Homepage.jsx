import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MiddleSection from "./MiddleSection";
import InfiniteMovingCard from "../InfiniteMovingCard";

const Homepage = () => {
  const items = [
    {
      title: "Reduce",
      description: "Minimize waste by reducing unnecessary consumption.",
      image: "/Homepage/reduce.svg", // Path to your logo in the public folder
    },
    {
      title: "Recycle",
      description: "Recycle materials to turn waste into new products.",
      image: "/Homepage/recycle.svg", // Path to your logo in the public folder
    },
    {
      title: "Repair",
      description: "Repair items to extend their usability.",
      image: "/Homepage/repair.svg", // Path to your logo in the public folder
    },
    {
      title: "Reuse",
      description: "Reuse items to reduce the need for new resources.",
      image: "/Homepage/reuse.svg", // Path to your logo in the public folder
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "0",
          right: "0",
          margin: "0 auto",
        }}
      >
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className=" font-saira">
      {/* herosection */}
      <MiddleSection />
      {/* second section */}
      <div className="bg-black text-white p-4 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold md:text-left text-center">
              Best-in-Class Solutions for your Supply Chain
            </h1>
            <p className="text-lg leading-relaxed md:text-left text-center">
              We help supply chains reduce costs, save time, and enhance
              customer satisfaction. Our integrated suite of products & services
              provides transportation/storage management, distribution, and
              warehousing solutions across the country.
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-[#333333] relative">
            <div className="relative overflow-hidden">
              <img
                src="./BackgroundImage/truck1.webp"
                alt="Products"
                className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
              />
            </div>
            <div className="p-12 md:p-14">
              <h3 className="text-2xl font-semibold mb-2">Services</h3>
              <p className="mt-7">
                Custom tailored services that best fit your Supply Chain needs.
              </p>
              <div className="bg-green-400 w-16 h-16 flex justify-center items-center absolute right-0 bottom-0 group cursor-pointer">
                <img
                  className="h-7 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4"
                  src="./logo/rightarrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#333333] relative">
            <div className="relative overflow-hidden">
              <img
                src="./BackgroundImage/truck2.webp"
                alt="Products"
                className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
              />
            </div>
            <div className="p-12 md:p-14">
              <h3 className="text-2xl font-semibold mb-2">Products</h3>
              <p className="mt-7">
                Our products are the backbone of all supply chain businesses.
              </p>
              <div className="bg-blue-400 w-16 h-16 flex justify-center items-center absolute right-0 bottom-0 group cursor-pointer">
                <img
                  className="h-7 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4"
                  src="./logo/rightarrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white p-4 md:p-10 flex items-center justify-center min-h-screen">
        {/* Text Section */}
        <div className="md:w-5/6 flex justify-center container m-auto">
          <div>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="md:w-1/2 w-full flex items-center justify-center text-center ">
                <h1 className="text-3xl md:text-5xl text-center  font-bold mb-4 md:p-5">
                  An Efficient and Effective Supply Chain
                </h1>
              </div>
              <div className="md:w-1/2 w-full md:text-left text-center md:p-7">
                <p className="text-gray-600 leading-relaxed">
                  We in Repool India acts as an extended team of our esteemed
                  clients and help the in their supply chain by ensuring to
                  provide best packaging solutions to our clients whenever and
                  wherever they need to keep the flow seamless. We feel immense
                  proud to state that through our dedicated approach and a
                  people friendly environment we have gained our customers trust
                  over the years and are able to keep our customers and other
                  stakeholders happy by matching as well as exceeding their
                  expectations.
                </p>
                {/* <p className="text-gray-600 leading-relaxed mt-10">
                  LEAP acts as a trusted supply chain partner to India’s most
                  reputable brands spread across a variety of industries. Get
                  the pallets you need, wherever you need it, whenever you need
                  it. LEAP rents pallets and other assets and also takes care of
                  asset administration, return and repair once you’ve delivered
                  your goods.
                </p> */}
              </div>
            </div>

            {/* Image Section */}
            <div className="md:flex md:space-x-8">
              {/* First Image */}
              <div className="md:w-1/2  flex justify-center">
                <img
                  src="./BackgroundImage/worker.webp"
                  alt="Supply Chain Workers"
                  className=" h-5/6 object-cover "
                />
              </div>

              {/* Second Image */}
              <div className="md:w-1/2 mt-6 md:mt-0 flex items-end justify-center">
                <img
                  src="./BackgroundImage/product.webp"
                  alt="Warehouse Storage"
                  className="h-4/5 md:w-5/6 w-fit object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Sustainability Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* fifth section */}
      <div className=" p-4 md:p-10">
        {/* Container for the whole section */}
        <div className="container m-auto w-full flex md:flex-row flex-col items-center mx-auto   gap-10">
          {/* Left Section: Pioneers in Asset Pooling */}
          <div className="space-y-6 md:w-1/2 w-full flex flex-col items-center justify-center h-1/2 md:p-12">
            <div>
              <h1 className="text-4xl md:text-left text-center font-bold text-gray-800">
                Pioneers in Asset Pooling
              </h1>
              <p className="text-gray-600 md:text-left text-center mt-6">
                LEAP is a trusted name in India for providing Asset Pooling
                solutions for use in supply chains. We have an array of Asset
                Pooling solutions in over 2500 locations, with over 6 million
                total assets managed, and more than 4000 consumer touchpoints in
                India. We provide end-to-end customized pooling solutions for
                our clients. Currently, LEAP India has 22 manufacturing centers
                and 25 warehouses across the country.
              </p>
            </div>
          </div>
          {/* Right Section: Awards Image */}
          <div className="flex justify-center items-center md:w-1/2 w-full">
            <img
              src="./BackgroundImage/best.webp"
              alt="Awards"
              className=" object-cover "
            />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="md:w-1/2 w-full container m-auto">
            <p className="text-3xl md:text-5xl font-bold text-center">
              Client Testimonials
            </p>
            <p className="mt-1 md:mt-6 text-center">
              We are the proud providers of asset pooling services in India but
              often it’s not just about what we do, it’s about how we do it.
              Don’t just take our word for it though, watch what our esteemed
              clients have to say.
            </p>
          </div>
        </div>
        <InfiniteMovingCard />
      </div>

      {/* last section  */}
      <div className="relative w-full bg-[#EFEFEC] p-4 md:py-9 flex justify-center mt-12">
        <div className="relative w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden container m-auto">
          <img
            src="./BackgroundImage/gallery8.webp"
            alt="A Sustainable Future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold">
                A Sustainable Future
              </h1>
              <p className="mt-4 text-sm md:text-lg leading-relaxed">
                With the growing concern around climate change, there is a need
                for a collective course of action. LEAP focuses on the
                contributors of creating a more positive impact on the
                environment through Sustainable Supply Chain Pooling Solutions
                by creating products that reduce the use of single-use
                packaging.
              </p>
              <p className="mt-4 text-sm md:text-lg leading-relaxed">
                By adopting responsible business practices, we are committed to
                ensuring that our business practices are reliable and safe.
                Through our mission, we aim to always provide Sustainable Supply
                Chain Pooling Solutions that create a team which is motivated
                towards helping the environment and conducting business
                sensibly.
              </p>
              <button className="mt-6 px-4 py-2 md:px-6 md:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
