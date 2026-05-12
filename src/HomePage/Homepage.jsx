import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MiddleSection from "./MiddleSection";
import InfiniteMovingCard from "../InfiniteMovingCard";
import { NavLink } from "react-router-dom";
import { CheckCircle, Award, RefreshCw, Truck } from "lucide-react";
const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const items = [
    {
      title: "Reduce",
      description: "Minimize waste by reducing unnecessary consumption.",
      image: "/Homepage/reduce.svg",
    },
    {
      title: "Recycle",
      description: "Recycle materials to turn waste into new products.",
      image: "/Homepage/recycle.svg",
    },
    {
      title: "Repair",
      description: "Repair items to extend their usability.",
      image: "/Homepage/repair.svg",
    },
    {
      title: "Reuse",
      description: "Reuse items to reduce the need for new resources.",
      image: "/Homepage/reuse.svg",
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
              Repool India rents and sell high quality pallets and other
              packaging equipments to help you in a smooth delivery of your
              assets in the most efficient manner.
            </p>
          </div>

          {/* Card 1 */}
          <NavLink to="/services">
            <div className="bg-[#333333] relative">
              <div className="relative overflow-hidden">
                <img
                  src="./BackgroundImage/truck2.jpeg"
                  alt="Products"
                  className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                />
              </div>
              <div className="p-12 md:p-14">
                <h3 className="text-2xl font-semibold mb-2">Services</h3>
                <p className="mt-7">
                  Custom tailored services that best fit your Supply Chain
                  needs.
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
          </NavLink>

          {/* Card 2 */}
          <div
            className="bg-[#333333] relative overflow-hidden inline-block cursor-pointer"
            onClick={toggleSidebar}
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src="./BackgroundImage/truck4.jpeg"
                alt="Products"
                className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
              />
            </div>

            {/* Content Section */}
            <div className="p-12 md:p-14">
              <h3 className="text-2xl font-semibold mb-2">Products</h3>
              <p className="mt-7">
                Our products are the backbone of all supply chain businesses.
              </p>
              {/* Arrow Button */}
              <div className="bg-blue-400 w-16 h-16 flex justify-center items-center absolute right-0 bottom-0 group cursor-pointer">
                <img
                  className="h-7 transition-transform duration-300 ease-in-out transform group-hover:translate-x-4"
                  src="./logo/rightarrow.svg"
                  alt="Open Sidebar"
                />
              </div>
            </div>

            {/* Sidebar Content */}
            <div
              className={`absolute top-0 right-0 h-full w-full bg-[#131F3A] text-white p-4 transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transformOrigin: "right center" }}
            >
              <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
              <div className="space-y-3">
                <NavLink to="/pallet" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    Pallet
                  </p>
                </NavLink>
                <NavLink to="/flc" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    FLC
                  </p>
                </NavLink>
                <NavLink to="/windowpls" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    Window PLS
                  </p>
                </NavLink>
                <NavLink to="/ppboxes" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    PP Boxes
                  </p>
                </NavLink>
                <NavLink to="/metaltrolley" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    Metal Trolleys
                  </p>
                </NavLink>
                <NavLink to="/others" onClick={toggleSidebar}>
                  <p className="block border-b border-gray-600 p-3 text-white cursor-pointer hover:bg-blue-500 hover:text-gray-100 rounded-md transition duration-200">
                    Others
                  </p>
                </NavLink>
              </div>
              <button
                onClick={toggleSidebar}
                className="mt-6 w-full text-blue-400 hover:text-blue-500 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              {/* Decorative background box */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-3xl z-0" />
              <img
                src="./BackgroundImage/worker1.jpeg"
                alt="Supply Chain Workers"
                className="relative z-10 w-full h-72 md:h-[440px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Accent label */}
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                Who We Are
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                An Efficient and Effective Supply Chain
              </h1>

              {/* Divider */}
              <div className="w-12 h-1 bg-blue-600 rounded-full" />

              <p className="text-gray-500 leading-relaxed text-base">
                In rental model for every rotation cycle we do thorough quality
                check and perform cleaning and maintenance activity of our
                packaging assets before returning it to our customer for further
                movement of assets. on time. Thus, ensuring best quality and
                service in each & every movement.
              </p>

              <p className="text-gray-500 leading-relaxed text-base">
                We, the team of Repool India, are happy and proud to share that
                we have been in the business for more than 11 years and are
                serving OEMs and Tier 1 and Tier 2 suppliers since then with our
                efficient, cost-effective and reusable packaging systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-4 md:p-10">
        <div className="container m-auto w-full flex md:flex-row flex-col items-center mx-auto   gap-10"></div>
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
      <div className="relative w-full p-4 md:py-9 flex justify-center mt-12">
        <div className="relative w-full h-[500px] overflow-hidden container m-auto">
          <img
            src="./BackgroundImage/lake.jpeg"
            alt="A Sustainable Future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-100 drop-shadow-lg">
                Sustainability Practices
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-6 bg-white/80 backdrop-blur-md rounded-lg md:rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 object-contain"
                    />
                    <h3 className="text-sm md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
