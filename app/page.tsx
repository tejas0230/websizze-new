import Image from "next/image";
import Hero from "./hero";
import WhyUs from "./whyUs";
import Pricing from "./pricing";
import FAQ from "./faq";
export default function Home() {
  return (
    <div>
      <div className="w-1/2 h-[1232px] bg-[#DB2B3950] rounded-[800px] blur-[400px] fixed inset-x-[25%] top-[-20%] z-[-1] absolute"></div>
      <Hero/>
      <WhyUs/>
      <Pricing/>
      <FAQ/>
    </div>
  );
}
