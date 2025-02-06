"use client";
import React from "react";
import PricingCard from "./pricing-card";
import { motion } from "motion/react";
const PricingProps = [
    {planName:"Introductory", price:0, included:["Free website upto 3 pages","Static pages with data","Fully responsive site","Aesthertic design","Terms and conditions applied"],offer:"Limited time offer"},
    {planName:"Basic", price:100, included:["Custom Landing Page Design","Design tailored to your audience","Fast turnaround time(Within 7 days)","Basic SEO ready","Basic Contact Form Integration"], highPrice:200},
    {planName:"Standard", price:250, included:["Full Website Design (Up to 5 Pages)","High converting sales page","Fully responsive site","Three Free Revisions","Post Launch Support"],highPrice:500},
];
export default function Pricing() {
    return(
        <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-10 lg:py-[10px] justify-center mx-auto mt-1 md:mt-10 lg:mt-15 xl:mt-20">
            <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="font-[zain] text-center  text-3xl md:text-4xl lg:text-5xl font-light px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
                Transparent <span className="text-[#DB2B39]">Pricing</span>?      
            </motion.div>
            <div className="flex flex-wrap justify-center flex-col gap-10 lg:flex-row m-auto md:gap-[60px] lg:gap-[14px] xl:gap-[14px] mt-10 px-6">
                {
                    PricingProps.map((item,index)=>(
                        <PricingCard key={index} planName={item.planName} price={item.price.toString()} included={item.included} index={index+1} highPrice={item.highPrice} offer={item.offer}/>
                    ))
                }
            </div>
      </div>
    );
}