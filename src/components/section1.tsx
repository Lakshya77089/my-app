const Section1 = () => {
  return (
    <section className="relative w-full bg-black min-h-screen pb-16 md:pb-0">
      {/* Background Image */}
      <img
        src="/section1/background-rectangle.png"
        alt="Background"
        className="w-full h-full object-cover absolute inset-0"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* Overlay + Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <div className="text-center pt-2">
          <h1 className="font-sans text-white flex flex-col font-medium w-full">
            <span
              style={{ fontFamily: "LufgaMedium" }}
              className="block text-right text-6xl md:text-[210px] mr-[-10px]"
            >
              FUTURE OF
            </span>
            <span
              style={{ fontFamily: "LufgaMedium" }}
              className="block text-left text-6xl md:text-[160px] -mt-4"
            >
              NETWORKING
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start mx-4 md:mx-[14%]">
            <div className="md:w-3/4 space-y-12 md:text-left text-center text-white mt-27">
              <h3
                style={{ fontFamily: "LufgaRegular" }}
                className="w-full text-lg md:text-xl font-medium"
              >
                Join the Movement Driving Web3 Adoption
              </h3>
              <div className="w-full md:w-[65%]">
                <p
                  style={{
                    fontFamily: "LufgaRegular",
                    lineHeight: "1.4",
                  }}
                  className="text-[13px] md:text-[15px] text-white/90 md:leading-[1.8rem]"
                >
                  At{" "}
                  <span className="font-semibold text-white">BFM Academy</span>,
                  our events are more than just gatherings—they&apos;re gateways into
                  the decentralized future. We curate meetups, panels,
                  workshops, and networking mixers globally to onboard students,
                  startups, creators, and enterprises into the Web3 and AI
                  ecosystem.
                </p>
              </div>

              <button className="mt-4 flex mx-auto md:mx-0 items-center  gap-3 rounded-full px-6 py-3 hover:bg-white hover:text-black transition text-sm font-medium">
                <img
                src="/section2/register.png"
                alt="Register Icon"
                width={18}
                height={18}
                className="w-18 h-18"
              />
                ATTEND OUR NEXT EVENT
              </button>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 relative flex flex-col mt-15 items-center md:items-end">
              {/* Stat Box */}
              <div className="relative bg-white/5 rounded-xl mr-3 p-3 mb-10 w-[240px] backdrop-blur-[3px] overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10" />
                <span className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-white/10 via-white/60 to-white/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src="/section1/profile-pict.png"
                      className="w-22 h-9 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-lg text-left font-semibold">500+</p>
                      <p className="text-xs">Happy Clients</p>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-white/90">
                    <div>
                      <p className="text-lg text-left font-semibold">10</p>
                      <p className="text-xs">Years Exp.</p>
                    </div>
                    <div>
                      <p className="text-lg text-left font-semibold">100+</p>
                      <p className="text-xs">Business Scale Up</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[80%] text-white">
                <h2
                  className="text-6xl md:text-5xl font-light leading-tight text-center md:text-right "
                  style={{ fontFamily: "Satoshimedium" }}
                >
                  the frontier of <br />
                  <span className="font-black">Web3 education</span> and{" "}
                  <span className="font-black">innovation</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;