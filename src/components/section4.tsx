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
            LET&apos;S BUILD
            <br />
            TOGETHER
          </h1>
          <img
            src="section4/image1.png"
            alt="Crystalline Graphic"
            className="w-64 h-48 mb-10 md:w-[32.5rem] md:h-[42.5rem] rounded-xl md:-mt-50 md:-ml-120 md:mb-60"
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
              className="mb-4 max-w-md text-center text-sm leading-relaxed text-gray-400 md:text-right md:text-base"
            >
              Whether you&apos;re a blockchain protocol, a Web3 product, a
              university, or an innovation hub—
            </p>

            <div className="relative rounded-xl bg-black md:p-4 md:pb-10 md:pr-10">
              <div className="absolute left-0 top-1/2 hidden h-1/2 w-px bg-white/50 md:block" />
              <div className="absolute right-0 top-1/2 hidden h-1/2 w-px bg-white/50 md:block" />
              <div className="absolute bottom-0 left-0 hidden h-px w-full bg-white/50 md:block" />
              <p
                style={{ fontFamily: "LufgaLight" }}
                className="max-w-md text-center text-sm leading-relaxed text-gray-400 md:text-right md:text-base"
              >
                Partnering with us gives you access to our growing international
                presence and deep-rooted tech community. We&apos;re present in
                60+ countries, and we bring the right crowd to help your mission
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
