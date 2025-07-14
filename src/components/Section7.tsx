"use client";
import React, { useEffect, useRef, useState } from "react";

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
    { src: "./section7/img7.png", alt: "Project 7" },
    { src: "./section7/img8.png", alt: "Project 8" },
    { src: "./section7/img9.png", alt: "Project 9" },
    { src: "./section7/img10.png", alt: "Project 10" },
    { src: "./section7/img11.png", alt: "Project 11" },
    { src: "./section7/img12.png", alt: "Project 12" },
    { src: "./section7/img13.png", alt: "Project 13" },
    { src: "./section7/img14.png", alt: "Project 14" },
    { src: "./section7/img15.png", alt: "Project 15" },
    { src: "./section7/img16.png", alt: "Project 16" },
    { src: "./section7/img17.png", alt: "Project 17" },
    { src: "./section7/img18.png", alt: "Project 18" },
    { src: "./section7/img19.png", alt: "Project 19" },
    { src: "./section7/img20.png", alt: "Project 20" },
    { src: "./section7/img21.png", alt: "Project 21" },
    { src: "./section7/img22.png", alt: "Project 22" },
    { src: "./section7/img23.png", alt: "Project 23" },
    { src: "./section7/img24.png", alt: "Project 24" },
    { src: "./section7/img25.png", alt: "Project 25" },
    { src: "./section7/img26.png", alt: "Project 26" },
    { src: "./section7/img27.png", alt: "Project 27" },
    { src: "./section7/img28.png", alt: "Project 28" },
    { src: "./section7/img29.png", alt: "Project 29" },
    { src: "./section7/img30.png", alt: "Project 30" },
    { src: "./section7/img31.png", alt: "Project 31" },
    { src: "./section7/img32.png", alt: "Project 32" },
    { src: "./section7/img33.png", alt: "Project 33" },
    { src: "./section7/img34.png", alt: "Project 34" },
    { src: "./section7/img35.png", alt: "Project 35" },
    { src: "./section7/img36.png", alt: "Project 36" },
    { src: "./section7/img37.png", alt: "Project 37" },
    { src: "./section7/img38.png", alt: "Project 38" },
    { src: "./section7/img39.png", alt: "Project 39" },
    { src: "./section7/img40.png", alt: "Project 40" },
    { src: "./section7/img41.png", alt: "Project 41" },
    { src: "./section7/img42.png", alt: "Project 42" },
  ];

  const projectImages2: ProjectImage[] = [
    { src: "./section7/img43.png", alt: "Project 43" },
    { src: "./section7/img44.png", alt: "Project 44" },
    { src: "./section7/img45.png", alt: "Project 45" },
    { src: "./section7/img46.png", alt: "Project 46" },
    { src: "./section7/img47.png", alt: "Project 47" },
    { src: "./section7/img48.png", alt: "Project 48" },
    { src: "./section7/img49.png", alt: "Project 49" },
    { src: "./section7/img50.png", alt: "Project 50" },
    { src: "./section7/img51.png", alt: "Project 51" },
    { src: "./section7/img52.png", alt: "Project 52" },
    { src: "./section7/img53.png", alt: "Project 53" },
    { src: "./section7/img54.png", alt: "Project 54" },
    { src: "./section7/img55.png", alt: "Project 55" },
    { src: "./section7/img56.png", alt: "Project 56" },
    { src: "./section7/img57.png", alt: "Project 57" },
    { src: "./section7/img58.png", alt: "Project 58" },
    { src: "./section7/img59.png", alt: "Project 59" },
    { src: "./section7/img60.png", alt: "Project 60" },
    { src: "./section7/img61.png", alt: "Project 61" },
    { src: "./section7/img62.png", alt: "Project 62" },
    { src: "./section7/img63.png", alt: "Project 63" },
    { src: "./section7/img64.png", alt: "Project 64" },
    { src: "./section7/img65.png", alt: "Project 65" },
    { src: "./section7/img66.png", alt: "Project 66" },
    { src: "./section7/img67.png", alt: "Project 67" },
    { src: "./section7/img68.png", alt: "Project 68" },
    { src: "./section7/img69.png", alt: "Project 69" },
    { src: "./section7/img70.png", alt: "Project 70" },
    { src: "./section7/img71.png", alt: "Project 71" },
    { src: "./section7/img72.png", alt: "Project 72" },
    { src: "./section7/img73.png", alt: "Project 73" },
    { src: "./section7/img74.png", alt: "Project 74" },
    { src: "./section7/img75.png", alt: "Project 75" },
    { src: "./section7/img76.png", alt: "Project 76" },
    { src: "./section7/img77.png", alt: "Project 77" },
    { src: "./section7/img78.png", alt: "Project 78" },
    { src: "./section7/img79.png", alt: "Project 79" },
    { src: "./section7/img80.png", alt: "Project 80" },
    { src: "./section7/img81.png", alt: "Project 81" },
    { src: "./section7/img82.png", alt: "Project 82" },
  ];

  const speakers: Speaker[] = [
    {
      image: "./section7/p1.png",
      name: "Clara Tsao",
      title: "Founding Officer",
      company: "Filecoin Foundation",
    },
    {
      image: "./section7/p2.png",
      name: "Dyma Budorin",
      title: "Co-Founder & CEO",
      company: "Hacken",
    },
    {
      image: "./section7/p3.png",
      name: "Kenny Li",
      title: "Co-Founder",
      company: "Manta Network",
    },
    {
      image: "./section7/p4.png",
      name: "Yusuf",
      title: "CKO",
      company: "Animoca Brands",
    },
    {
      image: "./section7/p5.png",
      name: "Vivien Lin",
      title: "Chief Product Officer",
      company: "BingX",
    },
    {
      image: "./section7/p6.png",
      name: "Mauricio Correa",
      title: "Founder",
      company: "Intelchain",
    },
    {
      image: "./section7/p7.png",
      name: "Kevin Lee",
      title: "Chief Business Officer",
      company: "Gate.io",
    },
    {
      image: "./section7/p8.png",
      name: "Dmitriy Sheludko",
      title: "CEO & Founder",
      company: "Biconomy.com",
    },
    {
      image: "./section7/p9.png",
      name: "Joshua Cheong",
      title: "Head of Product",
      company: "Mantle Network",
    },
    {
      image: "./section7/p10.png",
      name: "Georgios Vlachos",
      title: "Co-Founder",
      company: "Axelar Protocol",
    },
    {
      image: "./section7/p11.png",
      name: "Raul Pardeilhan 老虎",
      title: "CEO",
      company: "HXT Holding Group",
    },
    {
      image: "./section7/p12.png",
      name: "Arben Kane",
      title: "Co-Founder",
      company: "Incentiv",
    },
    {
      image: "./section7/p13.png",
      name: "Alex Momot",
      title: "CEO",
      company: "Peanut.trade",
    },
    {
      image: "./section7/p14.png",
      name: "Tobias Bauer",
      title: "General Partner",
      company: "TBV",
    },
    {
      image: "./section7/p15.png",
      name: "Sam MacPherson",
      title: "Co-Founder & CEO",
      company: "Phoenix Labs",
    },
    {
      image: "./section7/p16.png",
      name: "Juliet Su",
      title: "Managing Partner",
      company: "New Tribe Capital",
    },
    {
      image: "./section7/p17.png",
      name: "Illia Abrosimov",
      title: "Founder",
      company: "LTV Protocol",
    },
    {
      image: "./section7/p18.png",
      name: "Jean Herelle",
      title: "CEO",
      company: "Crunch",
    },
    {
      image: "./section7/p19.png",
      name: "Parker McCurley",
      title: "CEO & Co-Founder",
      company: "Decent Labs",
    },
    {
      image: "./section7/p20.png",
      name: "Sam Bourgi",
      title: "Senior News Writer",
      company: "Cointelegraph",
    },
    {
      image: "./section7/p21.png",
      name: "Alex Nascimento",
      title: "Web3 Faculty",
      company: "UCLA blockchain",
    },
    {
      image: "./section7/p22.png",
      name: "Katie Evans",
      title: "CBDO",
      company: "Swarm.com",
    },
    {
      image: "./section7/p23.png",
      name: "Kapil Dhiman",
      title: "CEO & Co-Founder",
      company: "Quranium",
    },
    {
      image: "./section7/p24.png",
      name: "Kapil Dhiman",
      title: "CEO & Co-Founder",
      company: "Quranium",
    },
    {
      image: "./section7/p25.png",
      name: "Amit Arora",
      title: "Head of Partnerships",
      company: "RAK Digital Asset Oasis",
    },
    {
      image: "./section7/p26.png",
      name: "Ajeet Khurana",
      title: "Founder",
      company: "Reflexical",
    },
    {
      image: "./section7/p27.png",
      name: "Aaron Ahmadi",
      title: "Head of Communications",
      company: "Decent Labs",
    },
    {
      image: "./section7/p28.png",
      name: "Jeff Owens",
      title: "Co-Founder & CEO",
      company: "Haven1",
    },
    {
      image: "./section7/p29.png",
      name: "Sam Bourgi",
      title: "Senior News Writer",
      company: "Cointelegraph",
    },
    {
      image: "./section7/p30.png",
      name: "Kevin Soltani",
      title: "Founder & CEO",
      company: "Gima Group",
    },
    {
      image: "./section7/p31.png",
      name: "Sachin Kumar",
      title: "Founder & CEO",
      company: "Jumbo Chain",
    },
    {
      image: "./section7/p32.png",
      name: "Sheikh Mohammad Noman",
      title: "Founder & CEO",
      company: "Pegasus",
    },
    {
      image: "./section7/p33.png",
      name: "Alexander Belov",
      title: "COO",
      company: "CoinsTelegram",
    },
    {
      image: "./section7/p34.png",
      name: "DAOSasha",
      title: "Partnership Lead",
      company: "1inch",
    },
    {
      image: "./section7/p35.png",
      name: "Christof Cloete",
      title: "Senior Business Development Manager",
      company: "CLS Global",
    },
    {
      image: "./section7/p36.png",
      name: "Christian Gleich",
      title: "International Ambassador",
      company: "European Blockchain",
    },
    {
      image: "./section7/p37.png",
      name: "Jock Haslam",
      title: "Co-Founder & Director",
      company: "HashLock",
    },
    {
      image: "./section7/p38.png",
      name: "Sergey Maslov",
      title: "CTO",
      company: "Fintopio",
    },
    {
      image: "./section7/p39.png",
      name: "Sai poorna Patnaik",
      title: "Venture Partner",
      company: "Matterblock",
    },
    {
      image: "./section7/p40.png",
      name: "Preetam Rao",
      title: "CEO and Co-Founder",
      company: "Quillaudits",
    },
    {
      image: "./section7/p41.png",
      name: "Nandit Mehra",
      title: "Founder",
      company: "Lighthouse",
    },
    {
      image: "./section7/p42.png",
      name: "Kumardev Chatterjee",
      title: "Editor",
      company: "The Asian Banker",
    },
    {
      image: "./section7/p43.png",
      name: "Ashton Hettiarachi",
      title: "Founder",
      company: "Openmesh",
    },
    {
      image: "./section7/p44.png",
      name: "Sudeep Saxena",
      title: "Co-Founder",
      company: "Coin Gabbar",
    },
    {
      image: "./section7/p45.png",
      name: "Zain Khan",
      title: "Senior Partnership Manager",
      company: "Cointelegraph",
    },
    {
      image: "./section7/p46.png",
      name: "Ved Singh",
      title: "Co-Founder",
      company: "Kaanch inc",
    },
    {
      image: "./section7/p47.png",
      name: "Shubham bhandari",
      title: "Head of Ecosystem",
      company: "Manta Network",
    },
    {
      image: "./section7/p48.png",
      name: "Alex Litvinovich",
      title: "Head of Partnerships",
      company: "Lumia",
    },
    {
      image: "./section7/p49.png",
      name: "Harsh Rajat",
      title: "Founder",
      company: "Push Chain",
    },
  ];

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  // const [isMobile, setIsMobile] = useState(false);

  // Add this useEffect to your component
  useEffect(() => {
    const setAnimationProperties = () => {
      if (containerRef1.current) {
        containerRef1.current.style.setProperty(
          "--duration",
          containerRef1.current.getAttribute("data-duration") || "40"
        );
        containerRef1.current.style.setProperty(
          "--mobile-duration",
          containerRef1.current.getAttribute("data-mobile-duration") || "20"
        );
      }
      if (containerRef2.current) {
        containerRef2.current.style.setProperty(
          "--duration",
          containerRef2.current.getAttribute("data-duration") || "40"
        );
        containerRef2.current.style.setProperty(
          "--mobile-duration",
          containerRef2.current.getAttribute("data-mobile-duration") || "20"
        );
      }
      if (containerRef3.current) {
        containerRef3.current.style.setProperty(
          "--duration",
          containerRef3.current.getAttribute("data-duration") || "40"
        );
        containerRef3.current.style.setProperty(
          "--mobile-duration",
          containerRef3.current.getAttribute("data-mobile-duration") || "20"
        );
      }
    };

    setAnimationProperties();
    window.addEventListener("resize", setAnimationProperties);
    return () => window.removeEventListener("resize", setAnimationProperties);
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const renderProjectImages = (images: ProjectImage[]) => {
    return images.map((image, index) => (
      <img
        key={`${image.src}-${index}`}
        src={image.src}
        className="h-[50px] w-[150px] inline-block shrink-0 mx-5 sm:mx-10"
        alt={image.alt}
        loading="lazy"
      />
    ));
  };

  const renderSpeakers = (speakers: Speaker[]) => {
    return speakers.map((speaker, index) => (
      <div className="flex-shrink-0 inline-block" key={index}>
        <div className="flex flex-col items-center shrink-0 bg-[#0A0A0A] rounded-lg overflow-hidden border-t-2 border-gray-600 p-3 mx-3 sm:mx-5 w-[160px] sm:w-[200px]">
          <div className="h-[150px] w-full overflow-hidden relative">
            <img
              src={speaker.image}
              className="h-full w-[90%] object-cover"
              alt={speaker.name}
              loading="lazy"
            />
          </div>
          <h4 className="text-sm sm:text-lg mt-2 font-medium text-center">
            {speaker.name}
          </h4>
          <p className="text-[9px] sm:text-[10px] text-gray-400 text-center">
            {speaker.title}
          </p>
          <p className="text-[9px] sm:text-[10px] text-gray-400 text-center">
            {speaker.company}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section className="w-full bg-black text-white md:py-20">
      <h1 className="text-center text-2xl sm:text-3xl font-light mt-10 mb-10 px-4">
        Our powder Projects <br /> <span className="font-bold">Ecosystem</span>
      </h1>

      <div className="mt-16 overflow-hidden relative">
        <div className="marquee-wrapper">
          <div
            ref={containerRef1}
            className="marquee-content"
            data-direction="left"
            data-speed="slow"
          >
            {renderProjectImages(projectImages1)}
            {renderProjectImages(projectImages1)}
          </div>
        </div>
      </div>

      <div className="sm:mt-16 mt-8 overflow-hidden relative">
        <div className="marquee-wrapper">
          <div
            ref={containerRef2}
            className="marquee-content"
            data-direction="right"
            data-speed="slow"
          >
            {renderProjectImages(projectImages2)}
            {renderProjectImages(projectImages2)}
          </div>
        </div>
      </div>

      <h1 className="text-center text-2xl sm:text-3xl font-light mt-20 mb-10 px-4">
        The Leading Voices
        <br /> <span className="font-bold">On Crypto&apos;s Biggest Stage</span>
      </h1>

      <div className="mt-16 overflow-hidden relative">
        <div className="marquee-wrapper">
          <div
            ref={containerRef3}
            className="marquee-content"
            data-direction="left"
            data-speed="slow"
          >
            {renderSpeakers(speakers)}
            {renderSpeakers(speakers)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
