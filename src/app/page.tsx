import Section1 from '@/components/section1';
import Section2 from '@/components/section2';
import Navbar from "@/components/Navbar";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <div className="relative">
      <Section4/>
      <Section5/>
      </div>
      <Footer/>
    </main>
  );
}
