import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

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
      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const images = [
  { src: "./Homepage/image17.png", alt: "Product 17" },
  { src: "./Homepage/image18.png", alt: "Product 18" },
  { src: "./Homepage/image19.png", alt: "Product 19" },
  { src: "./Homepage/image20.png", alt: "Product 20" },
  { src: "./Homepage/image2.png",  alt: "Product 2"  },
  { src: "./Homepage/image3.png",  alt: "Product 3"  },
  { src: "./Homepage/image5.png",  alt: "Product 5"  },
  { src: "./Homepage/image6.png",  alt: "Product 6"  },
  { src: "./Homepage/image7.png",  alt: "Product 7"  },
  { src: "./Homepage/image8.png",  alt: "Product 8"  },
  { src: "./Homepage/image9.png",  alt: "Product 9"  },
  { src: "./Homepage/image10.png", alt: "Product 10" },
  { src: "./Homepage/image11.png", alt: "Product 11" },
  { src: "./Homepage/image12.png", alt: "Product 12" },
  { src: "./Homepage/image13.png", alt: "Product 13" },
  { src: "./Homepage/image14.png", alt: "Product 14" },
  { src: "./Homepage/image16.png", alt: "Product 16" },
];

const stats = [
  { val: "100%",       lbl: "Sustainable" },
  { val: "Pan‑India",  lbl: "Coverage"    },
  { val: "End‑to‑End", lbl: "Solutions"   },
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
      className="relative mt-12 md:mt-16 min-h-screen w-full flex items-center
                 py-16 px-4 overflow-hidden"
      style={{ background: "#050d1a" }}
    >
      {/* ── Radial glow blobs ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 72% 50%, rgba(30,90,220,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 45% at 5%  80%, rgba(10,40,120,0.32) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 90% 8%,  rgba(20,70,180,0.16) 0%, transparent 50%)
          `,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-20">

          {/* ── TEXT SIDE ── */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 order-1">

            {/* Eyebrow tag */}
            <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
              <span className="w-6 h-px bg-blue-400 block" />
              Green Supply Chain
            </span>

            {/* Headline */}
            <h1
              className="font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-white m-0"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Repool
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                India
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-blue-300 text-lg md:text-xl font-semibold m-0"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              — your partner in green supply chain solutions.
            </p>

            {/* Accent rule */}
            <div
              className="w-12 h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}
            />

            {/* Body copy */}
            <p
              className="text-slate-400 text-[0.92rem] leading-[1.75] m-0 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Repool India is dedicated towards efficient and effective management
              of your supply chain requirements through our best in class sustainable
              and reliable packaging and transport solutions. Our highly trained
              professionals are aimed at improving efficiency and profitability of
              your supply chain.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-7 pt-1">
              {stats.map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="flex flex-col gap-0.5 pl-3 border-l-2 border-blue-500/30"
                >
                  <span
                    className="text-xl font-extrabold text-white leading-none"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {val}
                  </span>
                  <span className="text-[0.68rem] text-slate-500 uppercase tracking-widest font-medium">
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SLIDER SIDE ── */}
          <div className="w-full md:w-1/2 relative order-2">

            {/* Floating "Our Products" badge */}
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
              {/* Pulse dot */}
              <span
                className="w-1.5 h-1.5 rounded-full bg-blue-300"
                style={{ boxShadow: "0 0 6px #93c5fd", animation: "rp-pulse 1.8s infinite" }}
              />
              Our Products
            </div>

            {/* Slider frame */}
            <div
              className="relative rounded-2xl overflow-hidden border border-blue-500/20"
              style={{
                background: "rgba(255,255,255,0.025)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55), inset 0 0 60px rgba(30,80,200,0.06)",
              }}
            >
              {/* Top shimmer line */}
              <div
                className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent)",
                }}
              />

              {/* Corner bracket accents */}
              {cornerClasses.map((cls, i) => (
                <span
                  key={i}
                  className={`absolute w-3.5 h-3.5 border-blue-500 z-10 pointer-events-none ${cls}`}
                />
              ))}

              {/* react-slick carousel */}
              <div className="relative">
                <Slider {...settings}>
                  {images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-[280px] md:h-[400px] object-contain p-6"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Keyframe for pulse dot only */}
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