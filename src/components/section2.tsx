// components/Section2.jsx
"use client";

import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="relative bg-black text-white w-full mt-20 md:mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 z-10 relative">
        <p
          style={{
            fontFamily: "LufgaRegular",
            letterSpacing: "-0.01em",
            WebkitFontSmoothing: "antialiased",
          }}
          className="max-w-xl text-[20px] leading-[1.6] text-center md:text-left "
        >
          Our mission is simple: bridge the gap between Web2 curiosity and Web3
          clarity. Whether you&apos;re an absolute beginner or an experienced
          builder, our events provide hands-on learning, direct access to
          thought leaders, and a chance to connect with a global community
          pushing the edge of tech.
        </p>
      </div>

      {/* 2. Full‑width wrapper for the headline + image */}
      <div className="relative w-full mt-10">
        {/* Blue diagonal lines background */}

        {/* a) centered image at your desired max‑width */}
        <h2
          style={{ fontFamily: "SatoshiBold" }}
          className="absolute top-0 left-0 w-full z-30 h-full flex items-center justify-center text-2xl md:text-[4.8rem] text-center "
        >
          {/* solid white at start */}
          <span className="hidden md:inline text-white">Creati</span>

          {/* transparent fill + white stroke in the middle */}
          <span
            className="hidden md:inline"
            style={{
              color: "rgba(200,200,200,0.3)",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#ffffff",
            }}
          >
            ng Real Impact for Real Inno
          </span>
          <span
            className="inline md:hidden"
            style={{
              color: "rgba(200,200,200,0.3)",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#ffffff",
            }}
          >
            Creating Real Impact for Real Innovators
          </span>

          {/* solid white at end */}
          <span className="hidden md:inline text-white">vators</span>
        </h2>
        <div className="absolute z-0 inset-0 pointer-events-none">
          <div className="relative -left-3/8 top-0 w-[200%] h-full rotate-[-45deg] flex flex-col gap-9">
            <div
              style={{ backgroundColor: "#1E00FF" }}
              className="w-full h-5/16"
            ></div>
            <div
              style={{ backgroundColor: "#1E00FF" }}
              className="w-full h-5/16"
            ></div>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <Image
            src="/section2/Rectangle.png"
            alt="Middle graphic"
            width={1281}
            height={393}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="w-full h-auto  block rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
