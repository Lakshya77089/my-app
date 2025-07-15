import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Navbar from "@/components/Navbar";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Footer from "@/components/footer";
import Section7 from "@/components/Section7";
// import Section6 from "@/components/section6";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
      <Section1 />
      {/* <Section6 /> */}
      <Section2 />
      <Section3 />
      </div>
      <Section4 />
      <div className="relative">
        <Section5 />
      </div>
      <Section7 />
      <Footer />
    </main>
  );
}
