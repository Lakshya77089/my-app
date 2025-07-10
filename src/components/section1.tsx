import RippleImage from "@/components/RippleImage";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative w-full bg-black h-[130vh] pb-16  md:pb-0">
      <div
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        <RippleImage />
      </div>

      {/* Overlay + Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <div className="text-center pt-20">
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
                  our events are more than just gatherings—they&apos;re gateways
                  into the decentralized future. We curate meetups, panels,
                  workshops, and networking mixers globally to onboard students,
                  startups, creators, and enterprises into the Web3 and AI
                  ecosystem.
                </p>
              </div>

              <button className="mt-4 flex mx-auto md:mx-0 items-center  gap-3 rounded-full px-6 py-3 transition text-sm font-medium">
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

            {/* <div className="md:w-1/2 relative flex flex-col mt-15 items-center md:items-end">
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
            </div> */}

            {/* Right Content start */}
            <div className="relative bg-white/5 rounded-xl p-3 mt-10 w-full max-w-[45rem] md:w-[45rem] h-60 sm:h-72 md:h-80 backdrop-blur-[3px] overflow-hidden flex z-[-1]">
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10" />
              <span className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-white/10 via-white/60 to-white/10" />

              <div className="bg-[#3120F3] h-full w-[70%] relative">
                <Image
                  src="/section1/Line 4.png"
                  alt="Section 1 Image"
                  width={639}
                  height={228}
                  className="absolute top-0 right-0 opacity-50"
                />
                <Image
                  src="/section1/Line 3.png"
                  alt="Section 1 Image"
                  width={639}
                  height={228}
                  className="absolute bottom-0 right-0 opacity-50"
                />
                <div className="relative z-10 h-full w-full p-2 sm:p-3">
                  <div className="flex items-center justify-center flex-col sm:mb-2">
                    <p className="text-[8px] sm:text-[10px] text-gray-100">
                      banking partner
                    </p>
                    <Image
                      src="/section1/IDFC_logo.png"
                      alt="IDFC Logo"
                      width={88}
                      height={25}
                      className="object-cover w-16 sm:w-auto h-auto"
                    />
                  </div>
                  <Image
                    src="/section1/logo4.png"
                    alt="IDFC Logo"
                    width={144}
                    height={355}
                    className="object-cover m-auto w-full h-24 sm:h-32 md:h-[174px] -mt-0 sm:-mt-10"
                  />
                  <div className="flex -mt-4 sm:-mt-8 items-center justify-center gap-2 sm:gap-4">
                    <div>
                      <p className="text-[7px] sm:text-[9px] mb-1">
                        sponsored by
                      </p>
                      <Image
                        src="/section1/sLogo1.png"
                        alt="sLogo1"
                        width={144}
                        height={26}
                        className="object-cover m-auto w-8 sm:w-full h-3 sm:h-[20px]"
                      />
                    </div>
                    <div>
                      <p className="text-[7px] sm:text-[9px] mb-1">
                        powered by
                      </p>
                      <Image
                        src="/section1/sLogo2.png"
                        alt="sLogo1"
                        width={144}
                        height={26}
                        className="object-cover m-auto w-8 sm:w-full h-3 sm:h-[20px]"
                      />
                    </div>
                    <div>
                      <p className="text-[7px] sm:text-[9px] mb-1">
                        organised by
                      </p>
                      <Image
                        src="/section1/sLogo3.png"
                        alt="sLogo1"
                        width={144}
                        height={26}
                        className="object-cover m-auto w-8 sm:w-full h-3 sm:h-[20px]"
                      />
                    </div>
                  </div>

                  <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin w-4 h-4 sm:w-6 sm:h-6"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                    </svg>

                    <p className="text-[8px] sm:text-[10px] leading-[1.2]">
                      Wework Blue One Square <br />{" "}
                      <span className="font-bold">Gurugram</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full w-[30%] relative flex flex-col items-start p-2 justify-end">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-start"
                  style={{ lineHeight: 1 }}
                >
                  Join <br />
                  FUTURE <br />
                  xcon
                </h2>
                <p className="text-[8px] sm:text-[12px] font-bold text-white/90 mt-2">
                  15th December 2023
                </p>
                <button className="mt-3 flex items-center text-[10px] sm:text-sm">
                  <img
                    src="/section2/register.png"
                    alt="Register Icon"
                    width={18}
                    height={18}
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                  Join Now
                </button>
              </div>
            </div>
            {/* Right Content end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
