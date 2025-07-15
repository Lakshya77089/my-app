import RippleImage from "@/components/RippleImage";
import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="relative w-full bg-black h-[110vh] md:h-[130vh] pb-16  md:pb-0">
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
              className="block text-center md:text-right text-5xl md:text-[210px] mr-[-10px]"
            >
              FUTURE OF
            </span>
            <span
              style={{ fontFamily: "LufgaMedium" }}
              className="block text-center md:text-left text-5xl md:text-[160px] md:-mt-4"
            >
              NETWORKING
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start mx-4 md:mx-[14%]">
            <div className="md:w-3/4 md:space-y-12 space-y-6 md:text-left text-center text-white mt-8 md:mt-27">
              <h3
                style={{ fontFamily: "LufgaRegular" }}
                className="w-full text-xl font-medium"
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

              <a
                href="https://lu.ma/fzop3h1k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:mt-4 flex mx-auto md:mx-0 items-center gap-3 rounded-full px-6 py-3 transition text-sm font-medium">
                  <img
                    src="/section2/register.png"
                    alt="Register Icon"
                    width={18}
                    height={18}
                    className="w-18 h-18"
                  />
                  ATTEND OUR NEXT EVENT
                </button>
              </a>
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
            <div className="relative bg-white/5 rounded-xl p-3 mt-10 w-full max-w-[45rem] md:w-[45rem] h-60 sm:h-72 md:h-80 backdrop-blur-[3px] overflow-hidden flex z-10">
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
                  Our <br />
                  Event
                </h2>
                <p className="text-[8px] sm:text-[12px] font-bold text-white/90 mt-2">
                  19th July 2025
                </p>
                <a
                  href="https://lu.ma/fzop3h1k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center text-[10px] sm:text-sm cursor-pointer"
                >
                  <img
                    src="/section2/register.png"
                    alt="Register Icon"
                    width={18}
                    height={18}
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                  Join Now
                </a>

                <div className="flex items-center gap-2 mt-3">
                  <Link
                    href="https://www.linkedin.com/showcase/futurexcon/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin cursor-pointer md:h-[20px] md:w-[20px] h-[12px] w-[12px]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 11v5" />
                      <path d="M8 8v.01" />
                      <path d="M12 16v-5" />
                      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://x.com/FutureXcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter cursor-pointer md:h-[20px] md:w-[20px] h-[12px] w-[12px]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://www.instagram.com/futurexcon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon cursor-pointer icon-tabler icons-tabler-outline icon-tabler-brand-instagram md:h-[20px] md:w-[20px] h-[12px] w-[12px]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M16.5 7.5v.01" />
                    </svg>
                  </Link>

                  <Link
                    href="https://t.me/futurexcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon cursor-pointer icon-tabler icons-tabler-outline icon-tabler-brand-telegram md:h-[20px] md:w-[20px] h-[12px] w-[12px]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </Link>

                  <Link
                    href="https://chat.whatsapp.com/HRwARw34qnoJp9mYCJoa4K?mode=ac_t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon cursor-pointer icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp md:h-[20px] md:w-[20px] h-[12px] w-[12px]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                  </Link>
                </div>
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
