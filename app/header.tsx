"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {motion} from 'motion/react';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Header() {
  
    return (
      <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }} className="flex w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-4 justify-center m-auto">
        <div className="w-full px-4 flex justify-between content-center">
            <Link href="/" className="self-center text-2xl font-light">Websizze</Link>
            <div className="flex w-max justify-between content-center gap-0 md:gap-10 text-lg font-light">
                <Link href="/" className="hidden md:block self-center">Home</Link>
                <Link href="/our work" className="hidden md:block self-center">Our Work</Link>
                <Link href="/FAQ" className="hidden md:block self-center">FAQ</Link>
                <Button className="font-light text-base md:text-lg">Book a 15-min call</Button>
            </div>
        </div>
      </motion.div>
    );
  }
  