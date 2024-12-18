import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 font-saira mt-14 overflow-hidden">
      <img
        className="absolute top-0 left-0 transform rotate-180 w-full h-auto"
        src="./AboutUs/White-bg-mask.svg"
        alt=""
      />
      <div className="w-5/6 container m-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-6 md:pt-20">
        <div className="text-center flex flex-col ">
          <img
            src="/logo/Repool-India-Logo.svg"
            alt="Logo"
            className="mb-4 md:pl-5 h-16 mx-auto md:mx-0"
          />
          <p className="text-gray-300 text-xl mt-4">
            Connect with Us on Social Media
          </p>
          <div className="flex justify-center gap-16 mt-6">
            <p className="flex items-center cursor-pointer">
              <img
                className="h-5"
                src="./logo/linkedinlogo.svg"
                alt="LinkedIn"
              />
            </p>
            <p className="flex items-center cursor-pointer">
              <img
                className="h-5"
                src="./logo/facebooklog.svg"
                alt="Facebook"
              />
            </p>
            <p className="flex items-center cursor-pointer">
              <img
                className="h-6"
                src="./logo/instagramlogo.svg"
                alt="Instagram"
              />
            </p>
            <p className="flex items-center cursor-pointer">
              <img className="h-5" src="./logo/xlogo.png" alt="X/Twitter" />
            </p>
          </div>
        </div>

        <div className="md:mt-0 mt-7  text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-4 ">Contact Info</h4>
          <div className="flex flex-col items-start gap-2 mt-3">
            <div className="flex gap-2">
              <img className="h-4 mt-1" src="./logo/location.svg" alt="" />
              <p className="text-gray-400">
                Gate No 123, Moi Road, Siddeshwar Cahowk, Murhe Wasti, Chimbali
                Phata Pune 410501
              </p>
            </div>
            <div className="flex gap-2">
              <img className="h-4 mt-1" src="./logo/pin.svg" alt="" />
              <p className="text-gray-400">
                G.No.2258/2 Hotel laxmi pune nasix highway Chakan, Pune - 410501
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <img className="h-4 mt-2" src="./logo/mail.svg" alt="" />
                <p className="text-gray-400">
                  adarsh@repoolindia.com <br /> rohit@repoolindia.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-0 mt-7 text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Privacy & Terms</h4>
          <p className="text-gray-400">
            Please read our Privacy Policy and T&Cs carefully as it will help
            you make informed decisions about sharing your personal information
            with us.
          </p>
          <div className="mt-4 space-x-0 md:space-x-4 flex flex-col md:flex-row">
            <NavLink to="/privacy">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#111827] border group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
                  Privacy
                </span>
              </a>
            </NavLink>
            <Link to="/termsandcondition">
              <a
                href="#_"
                className="mt-3 md:mt-0 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#111827] border group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className=" absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
                  T&C
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
