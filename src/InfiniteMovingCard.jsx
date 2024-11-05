import React, { useEffect, useState, useRef } from "react";

const InfiniteMovingCard = () => {
  const testimonials = [
    {
      quote: "Seven share lead; Meghna stuns Kunte",

      name: "lorem",
      title: "dolorum cupiditate",
      img: "./profile.webp",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",

      name: "lorem",
      title: "dolorum cupiditate",
      img: "./profile.webp",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",

      name: "lorem",
      title: "dolorum cupiditate",
      img: "./profile.webp",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",

      name: "lorem",
      title: "dolorum cupiditate",
      img: "./profile.webp",
    },
  ];

  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
      <img src="" alt="" />
    </div>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "",
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "220s"); // Slower animation
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="container m-auto scroller relative z-20 max-w-7xl overflow-hidden"
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
            start && "animate-scroll"
          } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              className="w-[250px] md:w-[350px] lg:w-[450px] max-w-full relative rounded-2xl border border-blue-300 flex-shrink-0 bg-gradient-to-r from-[#3A8DFF] to-[#71C9FF] text-white shadow-lg px-6 md:px-8 py-4 md:py-6"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-base md:text-lg font-medium leading-relaxed text-[#e0e6ed]">
                  {item.quote}
                </span>
                <div className="relative z-20 flex flex-row items-center mt-4">
                  <span className="flex gap-2 items-center">
                    <span className="text-sm md:text-base font-semibold text-[#d1d9e0]">
                      {item.name}
                    </span>
                  </span>
                </div>
                {/* <div className="absolute bottom-2 right-4">
                  <img
                    className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white shadow-md"
                    src={item.img}
                    alt={`${item.name}'s image`}
                  />
                </div> */}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InfiniteMovingCard;
