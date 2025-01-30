"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-link");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

    return (
      <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-10 lg:py-[140px] justify-center mx-auto">
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} 
          className="relative  m-auto text-xl sm:text-3xl lg:text-4xl">
            <div className="font-[Whisper]  relative z-10 ">
                Is your brand struggling to convert potential clients?
            </div>
            <div className="font-[Whisper] blur-[7px] absolute top-0 left-0 z-0">
                Is your brand struggling to convert potential clients?
            </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="font-[zain] text-center text-4xl  md:text-6xl lg:text-7xl px-5 w-full max-w-[850px] mx-auto mt-2 lg:mt-6 leading-[75%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
            Elevate your brand identity with <span className="text-[#DB2B39]">custom</span> and <span className="text-[#DB2B39]">high-converting</span> website
        </motion.div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="text-center font-light font-[poppins] text-sm md:text-base lg:text-lg px-5 w-full max-w-[950px] m-auto leading-[120%] lg:leading-[100%] font-normal mt-1 text-[#A6A6A6]">We craft engaging and budget-friendly websites for small to midsize businesses, driving meaningful online engagement and growth.</motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="m-auto"> <Button onClick={scrollToBooking} className="font-[zain] mt-4 md:mt-8 font-light px-8 w-max mx-auto text-base md:text-base lg:text-base" >Book a 15-min call</Button></motion.div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="mx-auto font-light text-center font-[poppins] text-sm mt-1">Fixed Prices. No Long-Term Contracts.</motion.div>
      </div>
    );
  }
  