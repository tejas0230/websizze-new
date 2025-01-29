"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-link");
    if (bookingElement) {
    // Ensure alignment to top of the viewport
    bookingElement.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the element to the top of the viewport
    });
  }
  };

    return (
      <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-10 lg:py-[140px] justify-center mx-auto">
        <div className="relative rotate-2 m-auto text-xl md:text-3xl lg:text-5xl">
            <div className="font-[Whisper]  relative z-10 ">
                Is your brand struggling to convert potential clients?
            </div>
            <div className="font-[Whisper] blur-[7px] absolute top-0 left-0 z-0">
                Is your brand struggling to convert potential clients?
            </div>
        </div>
        <div className="text-center text-3xl md:text-6xl lg:text-8xl px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
            Elevate your brand identity with <span className="text-[#DB2B39]">custom</span> and <span className="text-[#DB2B39]">high-converting</span> website
        </div>
        <div className="text-center font-[poppins] text-sm md:text-base lg:text-xl px-5 w-full max-w-[950px] m-auto leading-[110%] lg:leading-[100%] font-normal mt-1 text-[#A6A6A6]">We craft engaging and budget-friendly websites for small to midsize businesses, driving meaningful online engagement and growth.</div>
        <Button className="mt-8 w-max mx-auto text-sm md:text-base lg:text-lg" >Book a 15-min call</Button>
        <div className="mx-auto text-center font-[poppins] text-xs mt-1">Fixed Prices. No Long-Term Contracts.</div>
      </div>
    );
  }
  