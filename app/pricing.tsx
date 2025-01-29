import React from "react";
import PricingCard from "./pricing-card";

const PricingProps = [
    {planName:"Basic", price:200, included:["Custom Landing Page Design","Design tailored to your audience","Fast turnaround time(Within 7 days)","Basic SEO ready","Basic Contact Form Integration"]},
    {planName:"Standard", price:500, included:["Full Website Design (Up to 5 Pages)","High converting sales page","Fully responsive site","Three Free Revisions","Post Launch Support"]},
];
export default function Pricing() {
    return(
        <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-10 lg:py-[10px] justify-center mx-auto mt-1 md:mt-10 lg:mt-15 xl:mt-20">
            <div className="text-center text-xl md:text-4xl lg:text-6xl px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
                Transparent <span className="text-[#DB2B39]">Pricing?</span>        
            </div>
            <div className="flex flex-col gap-10 lg:flex-row m-auto md:gap-[60px] lg:gap-[120px] mt-10 px-2">
                {
                    PricingProps.map((item,index)=>(
                        <PricingCard key={index} planName={item.planName} price={item.price.toString()} included={item.included} index={index+1}/>
                    ))
                }
            </div>
      </div>
    );
}