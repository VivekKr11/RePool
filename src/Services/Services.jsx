import React from "react";

const serviceFeatures = {
  packaging: [
    "Reduce packaging waste",
    "Lower long-term packaging costs",
    "Improve material protection",
    "Enhance operational efficiency",
    "Support sustainable supply chain practices",
  ],
  logistics: [
    "Ensure efficient material movement",
    "Minimize supply chain disruptions",
    "Improve delivery reliability",
    "Support day-to-day operational efficiency",
  ],
};

const industries = [
  "Automotive OEMs",
  "Tier 1 & Tier 2 Suppliers",
  "Manufacturing & Engineering Industries",
];

const whyChoose = [
  "11+ Years of Industry Experience",
  "Reliable & Efficient Service",
  "Cost-Effective Solutions",
  "Customer-Focused Approach",
  "Commitment to Quality & Sustainability",
];

const Services = () => {
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
            src="./BackgroundImage/about1.jpeg"
            alt="Services"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 gap-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase font-saira text-center">
            Our Services
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-saira text-center max-w-2xl">
            Delivering Reliable Packaging &amp; Logistics Solutions
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="container mx-auto bg-white px-4 md:p-8 font-saira py-10">
        <div className="w-full md:w-5/6 mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            At Repool India, we provide efficient returnable packaging and
            dependable logistics services tailored for automotive and industrial
            supply chains. With over 11 years of industry experience, we focus
            on helping businesses reduce operational costs, improve handling
            efficiency, and ensure smooth material movement.
          </p>
        </div>
      </div>

      

      {/* RETURNABLE PACKAGING SOLUTIONS */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Returnable Packaging Solutions
          </h2>
          <p className="mt-3 text-base md:text-lg font-semibold text-center md:text-left text-gray-600">
            Smart, Sustainable &amp; Cost-Efficient Packaging Systems
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-center md:text-left">
            We specialize in durable and reusable packaging solutions designed
            to support efficient transportation, storage, and handling of
            industrial components.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-center md:text-left">
            Our returnable packaging systems help businesses:
          </p>
          <ul className="mt-4 space-y-2">
            {serviceFeatures.packaging.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-center md:text-left">
            We provide practical packaging solutions tailored to the specific
            requirements of automotive and industrial operations.
          </p>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl shadow-lg"
            src="./BackgroundImage/about1.jpeg"
            alt="Returnable Packaging"
          />
        </div>
      </div>

      {/* LOGISTICS SERVICES */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10 font-saira">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl shadow-lg"
            src="./BackgroundImage/about5.jpeg"
            alt="Logistics Services"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Logistics Services
          </h2>
          <p className="mt-3 text-base md:text-lg font-semibold text-center md:text-left text-gray-600">
            Reliable Transportation &amp; Supply Chain Support
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-center md:text-left">
            Repool India offers dependable logistics services focused on timely
            delivery and supply chain continuity.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-center md:text-left">
            Our logistics solutions are designed to:
          </p>
          <ul className="mt-4 space-y-2">
            {serviceFeatures.logistics.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-center md:text-left">
            With a strong understanding of industrial logistics requirements, we
            work to provide consistent and reliable transportation support for
            our clients.
          </p>
        </div>
      </div>

      {/* INDUSTRIES WE SERVE */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10">
        <div className="flex flex-col w-full md:w-1/2 font-saira">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Industries We Serve
          </h2>
          <ul className="mt-6 space-y-3">
            {industries.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-xl"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl shadow-lg"
            src="./BackgroundImage/about3.jpeg"
            alt="Industries We Serve"
          />
        </div>
      </div>

      {/* WHY CHOOSE REPOOL INDIA */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-full md:w-5/6 px-4 md:p-4 py-12 md:py-20 gap-10 font-saira">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl shadow-lg"
            src="./BackgroundImage/about4.jpeg"
            alt="Why Choose Repool India"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Why Choose Repool India
          </h2>
          <ul className="mt-6 space-y-3">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-xl"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;