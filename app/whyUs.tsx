import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Feature from "./feature";

const featuresProps= [
    { title: "Optimized for Conversions", description: "A little touch of user psychology trick, can increase your conversions. We help you by optimizing these details." },
    { title: "Custom Website", description: "Uniqueness is essential for brand identity. Hence, we don’t use templates and make custom designs catered to you brand." },
    { title: "User Focused", description: "Your site will have the highest form of user-experience." },
    { title: "Mobile Optimized", description: "Most of the internet users surf on mobile devices. We make sure that your don’t miss out on potential customers." },
    { title: "Speed Optimized", description: "Customers hate to wait. We make sure that you don’t lose any customer to slow site speed." },
    { title: "Search Engine Optimized", description: "Your site will be SEO optimized to rank it over your competitors." },
  ];


export default function WhyUs() {
    return (
      <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  md:py-10 lg:py-[10px] justify-center mx-auto">
        <div className="text-center text-xl md:text-4xl lg:text-6xl px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
            Why <span className="text-[#DB2B39]">Us?</span>        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[60px] lg:gap-x-[80px] gap-y-[20px] m-auto mt-4 sm:mt-10">
            {featuresProps.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
            ))}
        </div>
      </div>
    );
  }
  