"use client";
const Section4 = () => {
  return (
    <section className="w-full bg-black text-white px-6 lg:px-20 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        <div className=" md:w-2/3 flex flex-col items-center md:flex-row md:justify-between">
          <h1
            style={{ fontFamily: "LufgaMedium" }}
            className="text-5xl md:mt-0 mt-10 text-left md:text-[14rem] leading-[1] mb-4 md:pl-15 md:pt-10"
          >
            LET'S BUILD
            <br />
            TOGETHER
          </h1>
          <img
            src="section4/image1.png"
            alt="Crystalline Graphic"
            className="w-48 h-48 mb-10 md:mb-40 md:w-[32.5rem] md:h-[42.5rem] rounded-xl md:-mt-50 md:-ml-120 md:mb-60"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 z-[110]">
          {/* Left Heading */}
          <h2
            style={{ fontFamily: "LufgaRegular" }}
            className="text-lg md:text-3xl mb-2 md:pl-15"
          >
            WHY PARTNER WITH BFM ACADEMY EVENTS?
          </h2>

          {/* Right Content */}
          <div className="md:mr-15 md:pr-5">
            <p
              style={{ fontFamily: "LufgaLight" }}
              className="text-sm md:text-base text-gray-400 md:text-right max-w-md leading-relaxed mb-4"
            >
              Whether you&apos;re a blockchain protocol, a Web3 product, a
              university, or an innovation hub—
            </p>

            <div className="bg-black md:border md:border-white/50 rounded-xl md:p-4 md:pr-10 md:pb-10">
              <p
                style={{ fontFamily: "LufgaLight" }}
                className="text-sm md:text-base text-gray-400 md:text-right max-w-md leading-relaxed"
              >
                Partnering with us gives you access to our growing international
                presence and deep-rooted tech community. We&apos;re present in 60+
                countries, and we bring the right crowd to help your mission
                scale.
              </p>
            </div>
          </div>
        </div>

        <img src="section4/bitcoinimage.png" className="z-60 md:-mt-28" />
      </div>
    </section>
  );
};
export default Section4;
