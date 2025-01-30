"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";
import {motion} from "motion/react";
interface PricingProps {
    planName: string;
    price: string;
    included: string[];
    index: number;
}

const PricingCard: React.FC<PricingProps> = ({ planName, price, included,index }) => {
    const scrollToBooking = () => {
        const bookingElement = document.getElementById("booking-link");
        if (bookingElement) {
          bookingElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

    return (
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }}  className={`w-full sm:w-[400px] flex flex-col p-8 border-[0.1px] border-[#969696] rounded-xl hero-bg-${index}`}>
            <div className="font-[poppins] text-base font-light">{planName}</div>
            <div className="font-[zain] text-[38px]">
                ${price}<span className="text-sm font-light font-[poppins]">/website</span>
            </div>
            <div className="font-[poppins] text-xl font-light text-[#CBCBCB]">What's Included?</div>
            <ul>
                {included.map((item, index) => (
                    <li className="flex text-base items-center font-light font-[poppins] mt-1" key={index} ><FiCheck className="text-[#DB2B39] mr-2 text-xl" /> {item}</li>
                ))}
            </ul>
            <Button onClick={scrollToBooking} className="font-[zain] mt-4 w-full mx-auto text-sm md:text-base lg:text-lg font-light" >Book a 15-min call</Button>
        </motion.div>
    );
};

export default PricingCard;