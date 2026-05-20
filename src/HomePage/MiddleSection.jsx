import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    className="absolute top-1/2 right-3 -translate-y-1/2 z-10
               w-9 h-9 rounded-full hidden sm:flex items-center justify-center
               bg-blue-950/80 border border-blue-500/30 text-blue-300
               hover:bg-blue-600/30 hover:border-blue-400
               transition-all duration-200 backdrop-blur-sm"
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M5 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    className="absolute top-1/2 left-3 -translate-y-1/2 z-10
               w-9 h-9 rounded-full hidden sm:flex items-center justify-center
               bg-blue-950/80 border border-blue-500/30 text-blue-300
               hover:bg-blue-600/30 hover:border-blue-400
               transition-all duration-200 backdrop-blur-sm"
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M9 2L4 7l5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const images = [
  { src: "./Homepage/image17.png", alt: "Plastic PLS", name: "Plastic PLS" },
  { src: "./Homepage/image18.png", alt: "Metal PLS", name: "Metal PLS" },
  {
    src: "./Homepage/image19.png",
    alt: "Metal Trolley/Pallets",
    name: "Metal Trolley / Pallets",
  },
  {
    src: "./Homepage/image20.png",
    alt: "Product 20",
    name: "Foldable Metal-Cage Pallet",
  },
  { src: "./Homepage/image2.png", alt: "Pallet", name: "Pallet" },
  { src: "./Homepage/image3.png", alt: "Pallet", name: "Pallet" },
  { src: "./Homepage/image6.png", alt: "Window PLS", name: "Window PLS" },
  { src: "./Homepage/image9.png", alt: "PP Boxes", name: "PP Boxes" },
  { src: "./Homepage/image10.png", alt: "PP Boxes", name: "PP Boxes" },
  { src: "./Homepage/image12.png", alt: "VCI Bags", name: "VCI Bags" },
  {
    src: "./Homepage/image14.png",
    alt: "Separator Sheet",
    name: "Separator Sheet",
  },
];

const stats = [
  { val: "100%", lbl: "Sustainable" },
  { val: "Pan‑India", lbl: "Coverage" },
  { val: "End‑to‑End", lbl: "Solutions" },
];

const cornerClasses = [
  "top-2.5 left-2.5 border-t-2 border-l-2",
  "top-2.5 right-2.5 border-t-2 border-r-2",
  "bottom-2.5 left-2.5 border-b-2 border-l-2",
  "bottom-2.5 right-2.5 border-b-2 border-r-2",
];

const MiddleSection = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center
                 pt-24 md:pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Hero background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./Homepage/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "rgba(5, 13, 26, 0.78)" }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(120deg, rgba(5,13,26,0.30) 0%, rgba(10,30,80,0.20) 50%, rgba(5,13,26,0.25) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-20">
          {/* TEXT SIDE */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 order-1">
            <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
              <span className="w-6 h-px bg-blue-400 block" />
              Green Supply Chain
            </span>

            <h1
              className="font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-white m-0"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Repool
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #3b82f6 0%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                India
              </span>
            </h1>

            <p
              className="text-blue-300 text-lg md:text-xl font-semibold m-0"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              — your partner in green supply chain solutions.
            </p>

            <div
              className="w-12 h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}
            />

            <p
              className="text-slate-300 text-[0.92rem] leading-[1.75] m-0 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Repool India is dedicated towards efficient and effective
              management of your supply chain requirements through our best in
              class sustainable and reliable packaging and transport solutions.
              Our highly trained professionals are aimed at improving efficiency
              and profitability of your supply chain.
            </p>

            <div className="flex flex-wrap gap-7 pt-1">
              {stats.map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="flex flex-col gap-0.5 pl-3 border-l-2 border-blue-500/40"
                >
                  <span
                    className="text-xl font-extrabold text-white leading-none"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {val}
                  </span>
                  <span className="text-[0.68rem] text-slate-400 uppercase tracking-widest font-medium">
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SLIDER SIDE */}
          <div className="w-full md:w-1/2 relative order-2">
            {/* Floating badge */}
            <div
              className="absolute -top-4 left-6 z-20 inline-flex items-center gap-2
                         px-3.5 py-[5px] rounded-full border border-blue-400/30
                         text-white text-[0.68rem] font-bold tracking-[0.12em] uppercase"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                boxShadow: "0 4px 16px rgba(29,78,216,0.4)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-blue-300"
                style={{
                  boxShadow: "0 0 6px #93c5fd",
                  animation: "rp-pulse 1.8s infinite",
                }}
              />
              Our Products
            </div>

            {/* Slider frame */}
            <div
              className="relative rounded-2xl overflow-hidden border border-blue-500/20"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.55), inset 0 0 60px rgba(30,80,200,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Top shimmer */}
              <div
                className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent)",
                }}
              />

              {/* Corner accents */}
              {cornerClasses.map((cls, i) => (
                <span
                  key={i}
                  className={`absolute w-3.5 h-3.5 border-blue-500 z-10 pointer-events-none ${cls}`}
                />
              ))}

              {/* Carousel */}
              <div className="relative">
                <Slider {...settings}>
                  {images.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-[280px] md:h-[400px] object-contain p-6"
                      />
                      {/* Product name label */}
                      {/* Product name label */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-4 z-10">
                        <div
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
               border border-blue-400/30 backdrop-blur-md"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(29,78,216,0.7), rgba(37,99,235,0.7))",
                            boxShadow: "0 4px 12px rgba(29,78,216,0.3)",
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          <span className="text-white text-xs font-semibold tracking-wide">
                            {img.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
};

export default MiddleSection;
