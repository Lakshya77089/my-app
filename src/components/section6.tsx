"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/hover-1.webp",
  "/images/hover-2.webp",
  "/images/hover-3.webp",
  "/images/hover-4.webp",
];

const Section6 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const totalWidth = track.scrollWidth - container.offsetWidth;

    gsap.to(track, {
      x: -totalWidth,
      ease: "power1.inOut", // smoother than "none"
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1, // smoother scrub effect
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-x-hidden overflow-y-visible bg-black md:mt-0 mt-70"
    >
      <div
        ref={trackRef}
        className="flex absolute top-[20%] pl-[20vw] sm:pl-[50vw] gap-6 sm:gap-10"
        style={{ willChange: "transform" }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-[250px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[450px] object-cover shadow-2xl"
            style={{ marginTop: `${index * 40}px` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Section6;
