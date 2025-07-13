"use client";

import React from "react";

const Section3 = () => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  // const handleHover = (index: number) => {
  //   setHoveredIndex(index);
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play();
  //   }
  // };
  // const handleLeave = () => {
  //   setHoveredIndex(null);
  // };
  const items = [
    "WEB3 CRASH COURSES AND LIVE DEMOS",
    "FIRESIDE CHATS WITH INDUSTRY LEADERS",
    "IRL SIDE EVENTS DURING GLOBAL BLOCKCHAIN CONFERENCES",
    "BUSINESS PANELS FOR STARTUPS & ENTERPRISES",
    "INTERACTIVE GAMES, BOOTHS, AND TOKEN GIVEAWAYS",
  ];
  // const images = [
  //   "/images/hover-1.webp",
  //   "/images/hover-2.webp",
  //   "/images/hover-3.webp",
  //   "/images/hover-4.webp",
  //   "/images/hover-5.webp",
  // ];
  return (
    <section className="w-full bg-black text-white px-6 lg:px-20  pt-25">
      {/* <audio ref={audioRef} src="click-effect.mp3" preload="auto" /> */}
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Top Right Box */}
        <div className="flex flex-col md:flex-row items-center justify-end md:ml-20 ml-0 px-1 md:px-0">
          {/* {hoveredIndex !== null && (
            <div className="bg-red w-[50%] h-full z-[10]">
              <img
                src={images[hoveredIndex]}
                alt="Hover Preview"
                className="w-[250px] h-auto object-contain h-[300px]"
              />
            </div>
          )} */}
          <div
            className="
      bg-black/50 
      backdrop-blur-[1px] 
      border 
      border-white/20 
      rounded-xl 
      py-5 
      md:px-14 
      px-6
      text-sm 
      text-white
      w-full 
      md:w-[50%]
    "
          >
            <ul className="space-y-3 list-none">
              {items.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  {/* Arrow icon */}
                  <span className="text-white/70 text-[#8A8AFF]">→</span>

                  {/* Text with your custom font */}
                  <span
                    // onMouseEnter={() => handleHover(index)}
                    // onMouseLeave={handleLeave}
                    className=" hover:underline underline-offset-4 hover:text-white/30"
                    style={{ fontFamily: "LufgaLight" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Grid: Left + Right */}
        <div className="flex flex-col lg:flex-row relative min-h-[700px] ">
          {/* Left: Events Box */}
          <div
            className="bg-black/50 
        backdrop-blur-[1px] 
        border 
        border-white/20 
        rounded-xl md:px-14 px-7 pt-7 pb-7 shadow-lg flex-1 max-h-[800px] lg:absolute lg:bottom-[10%]"
          >
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              EVENTS TAILORED FOR
            </h3>
            <ul className="space-y-3 text-white/70 text-sm uppercase">
              <li className="flex items-start gap-2">
                <span className="text-white/70 text-[#8A8AFF]">→</span> Students
                & professionals seeking Web3 education
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/70 text-[#8A8AFF]">→</span>{" "}
                Early-stage founders exploring crypto product ideas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/70 text-[#8A8AFF]">→</span>{" "}
                Corporates looking to transition to blockchain
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/70 text-[#8A8AFF]">→</span>{" "}
                Developers, designers & marketers eager to contribute
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/70 text-[#8A8AFF]">→</span> VCs
                scouting the next big project
              </li>
            </ul>
            <button className="md:mt-6 mt-8 flex items-center text-black font-semibold text-sm py-2 rounded-full">
              <img
                src="/section2/register.png"
                alt="Register Icon"
                width={18}
                height={18}
                className="w-18 h-18"
              />
              <p className="text-white">REGISTER FOR OUR UPCOMING MEET-UPS</p>
            </button>
          </div>

          {/* Right: Main Heading */}
          <div className="md:flex-1 md:flex md:items-start md:justify-end">
            <div className="md:text-right text-center">
              <h2
                style={{ fontFamily: "SatoshiMedium" }}
                className="text-5xl sm:text-6xl lg:text-[9rem] font-light h-full md:leading-[0.9] md:pt-15 pt-25"
              >
                everyone with <br />
                <span className="font-normal">a </span>
                <span style={{ fontFamily: "SatoshiBlack" }}>VISION</span>{" "}
                <br />
                <span
                  style={{ fontFamily: "SatoshiBlack" }}
                  className="font-extrabold"
                >
                  FOR THE
                </span>
                <br />
                <span
                  style={{ fontFamily: "SatoshiBlack" }}
                  className="font-extrabold"
                >
                  FUTURE
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
