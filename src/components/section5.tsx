const Section5 = () => {
  return (
    <section>
      <div className="absolute inset-0 z-50">
        <img
          src="/Vector.png"
          alt="Background Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-black text-white py-12 px-4 z-10">
        <h1
          style={{ fontFamily: "LufgaLight" }}
          className="text-4xl text-center mb-8"
        >
          <span style={{ fontFamily: "LufgaMedium" }}>PARTNER WITH </span>US &
          GET
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div
            className=" 
        bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700"
          >
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Targeted Community Support
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              Reach thousands of developers, founders, learners & early
              adopters.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700">
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Public Relations & Media Visibility
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              We promote your brand through our social media, media partners and
              newsletter.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700">
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Qualified Traction for Your Product
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              Get real-time feedback, adoption and user testing from our curated
              audiences.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700">
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Connections That Matter
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              Network with our ecosystem of VCs, advisors, creators, and other
              builders.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700">
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Access to IRL & Virtual Side Events
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              Plug into global stages like TOKEN2049, ETHGlobal, and Degen
              Summit.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-[2px] p-6 rounded-lg shadow-lg border border-gray-700">
            <h2
              style={{ fontFamily: "LufgaSemiBold" }}
              className="text-3xl font-semibold mb-2"
            >
              Co-branded Campaigns & Booth Space
            </h2>
            <p style={{ fontFamily: "LufgaLight" }} className="text-gray-400">
              Showcase your product or idea with us—virtually or physically.
            </p>
          </div>
        </div>
      </div>

      <div className="relative backdrop-blur-sm bg-black text-white py-16 px-4 z-10">
        {/* Main content */}
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Headline */}
          <h1
            style={{ fontFamily: "LufgaLight" }}
            className="text-5xl md:text-8xl tracking-tight text-left mb-8"
          >
            <span style={{ fontFamily: "LufgaSemibold" }}>LET'S CO-CREATE</span>
            <br />
            THE FUTURE
          </h1>

          {/* Buttons and Text Block */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                style={{
                  backgroundColor: "#212AFF",
                  fontFamily: "BeVietnamPro-Medium",
                }}
                className="text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Partner With Us
              </button>
              <button
                style={{ fontFamily: "BeVietnamPro-Medium" }}
                className="border border-white text-white px-5 py-3 rounded-md font-medium hover:bg-white hover:text-black transition flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <img src="./phone.svg" alt="Phone Icon" className="w-5 h-5" />
                Schedule a Consultation Call
              </button>
            </div>

            {/* Text Block */}
            <div className="md:ml-auto">
              <p
                style={{ fontFamily: "LufgaLight" }}
                className="text-white-700 max-w-xs text-left md:text-right"
              >
                Whether you want to host a co-branded event, sponsor a session,
                or run product showcases—we&apos;re here to work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section5;
