"use client";
import React from "react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Speaker {
  image: string;
  name: string;
  title: string;
  company: string;
}

const Section7: React.FC = () => {
  const projectImages1: ProjectImage[] = [
    { src: "./section7/img1.png", alt: "Project 1" },
    { src: "./section7/img2.png", alt: "Project 2" },
    { src: "./section7/img3.png", alt: "Project 3" },
    { src: "./section7/img4.png", alt: "Project 4" },
    { src: "./section7/img5.png", alt: "Project 5" },
    { src: "./section7/img6.png", alt: "Project 6" },
  ];

  const projectImages2: ProjectImage[] = [
    { src: "./section7/img8.png", alt: "Project 8" },
    { src: "./section7/img9.png", alt: "Project 9" },
    { src: "./section7/img3.png", alt: "Project 3" },
    { src: "./section7/img4.png", alt: "Project 4" },
    { src: "./section7/img5.png", alt: "Project 5" },
    { src: "./section7/img6.png", alt: "Project 6" },
  ];

  const speakers: Speaker[] = [
    {
      image: "./section7/p1.png",
      name: "Kenny Li",
      title: "Co Founder",
      company: "Manta Network",
    },
    {
      image: "./section7/p2.png",
      name: "Sarah Chen",
      title: "CEO",
      company: "DeFi Protocol",
    },
    {
      image: "./section7/p3.png",
      name: "Mike Johnson",
      title: "CTO",
      company: "Blockchain Labs",
    },
    {
      image: "./section7/p4.png",
      name: "Lisa Wang",
      title: "Head of Product",
      company: "Crypto Exchange",
    },
    {
      image: "./section7/p5.png",
      name: "David Park",
      title: "Founder",
      company: "NFT Platform",
    },
    {
      image: "./section7/p6.png",
      name: "Emma Davis",
      title: "VP Engineering",
      company: "Web3 Startup",
    },
    {
      image: "./section7/p7.png",
      name: "Alex Kim",
      title: "Chief Architect",
      company: "Layer 2 Solution",
    },
  ];

  const renderProjectImages = (
    images: ProjectImage[],
    duplicateCount: number = 2
  ) => {
    const duplicatedImages = Array(duplicateCount).fill(images).flat();
    return duplicatedImages.map((image, index) => (
      <img
        key={`${image.src}-${index}`}
        src={image.src}
        className="h-[50px] w-[150px] inline-block shrink-0 mx-10"
        alt={image.alt}
      />
    ));
  };

  const renderSpeakers = (speakers: Speaker[], duplicateCount: number = 2) => {
    const duplicatedSpeakers = Array(duplicateCount).fill(speakers).flat();
    return duplicatedSpeakers.map((speaker, index) => (
      <div
        key={`${speaker.name}-${index}`}
        className="flex flex-col items-center shrink-0 bg-[#0A0A0A] rounded-lg overflow-hidden border-t-2 border-gray-600 p-3"
      >
        <img
          src={speaker.image}
          className="h-[120px] w-full object-cover"
          alt={speaker.name}
        />
        <h4 className="text-lg mt-2 font-medium">{speaker.name}</h4>
        <p className="text-[10px] text-gray-400">{speaker.title}</p>
        <p className="text-[10px] text-gray-400">{speaker.company}</p>
      </div>
    ));
  };

  return (
    <section className="w-full bg-black text-white md:py-20">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      <h1 className="text-center text-3xl font-light mt-10 mb-10">
        Our powder Projects <br /> <span className="font-bold">Ecosystem</span>
      </h1>

      <div className="mt-16 overflow-hidden">
        <div className="flex sm:gap-10 gap-5 animate-marquee">
          {renderProjectImages(projectImages1)}
        </div>
      </div>

      <div className="sm:mt-16 mt-8 overflow-hidden">
        <div className="flex sm:gap-10 gap-5 animate-marquee-reverse">
          {renderProjectImages(projectImages2)}
        </div>
      </div>

      <h1 className="text-center text-3xl font-light mt-20 mb-10">
        The Leading Voices
        <br /> <span className="font-bold">On Crypto&apos;s Biggest Stage</span>
      </h1>

      <div className="mt-16 overflow-hidden">
        <div className="flex gap-10 animate-marquee">
          {renderSpeakers(speakers)}
        </div>
      </div>
    </section>
  );
};

export default Section7;
