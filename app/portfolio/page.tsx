"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const ourWork = [
  { title: "Home Cleaning Company Demo Design", slug: "content", imageURL: "/Portfolio Card 1.png", imageWidth: 300, imageHeight: 100 },
  { title: "Social Media Marketing Company Demo Design", slug: "future-of-web-design", imageURL: "/Portfolio Card 2.png",imageWidth: 300, imageHeight: 200 },
  { title: "Your Next Stunning Website Starts Here", slug: "seo-strategies-2024", imageURL: "/Portfolio Card 3.png",imageWidth: 300, imageHeight: 200 },
];


export default function Portfolio() {

  
    return (
          
        <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-10 lg:py-[80px] justify-center mx-auto">
          <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }} className="font-[zain] text-center text-4xl  md:text-6xl lg:text-7xl px-5 w-full max-w-[1050px] mx-auto mt-2 lg:mt-6 leading-[75%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
             Crafting Digital Experiences That Drive Results
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }} className="text-center font-light font-[poppins] text-sm md:text-base lg:text-lg px-5 w-full max-w-[950px] m-auto leading-[120%] lg:leading-[140%] font-light mt-8 text-[#CDCDCD]">Explore our portfolio of stunning, high-performance websites designed to captivate, convert, and elevate brands. See how we bring ideas to life through strategy, design, and seamless functionality.</motion.div>

          <div className="w-full flex flex-row items-center justify-center gap-[16px] mt-10">
                {
                ourWork.map((work,index) => (
                  <motion.div key={work.slug} initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} transition={{ ease: "easeOut", duration: 1, delay: index * 0.2 }}>
                    <div className="w-auto max-w-full relative">
                      <Image 
                        src={work.imageURL} 
                        alt={work.title} 
                        width={work.imageWidth} 
                        height={work.imageHeight} 
                        className="rounded-t-md object-cover w-auto"
                      />
                      <div className="absolute top-[175px] left-1/2 transform -translate-x-1/2 text-center w-full mb-2 flex flex-col justify-center">
                          <div className="font-[zain] text-[22px]">{work.title}</div>
                        {
                          index !== 2 && (
                            <Link href="/" className="font-[zain] hidden md:block self-center bg-white text-black w-max px-10 py-1 rounded-3xl transition duration-300 hover:scale-105 backdrop-blur-sm">
                              View Project
                            </Link>
                          )
                        }
                      </div>
                    </div>
                  </motion.div>
                ))}
          </div>

          <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }} className="font-[zain] text-center text-2xl  md:text-3xl lg:text-4xl px-5 w-full max-w-[1050px] mx-auto mt-2 lg:mt-[80px] leading-[75%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
              Let’s Boost Your Business Online – Start Your Project Today!
            </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 1 }} className="m-auto"> <Button className="font-[zain] mt-4 md:mt-4 font-light px-8 w-max mx-auto text-base md:text-base lg:text-base mb-[180px]" >Book a 15-min call</Button></motion.div>
        </div>
      );
}
