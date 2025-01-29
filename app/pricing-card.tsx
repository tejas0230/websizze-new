import React from "react";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";

interface PricingProps {
    planName: string;
    price: string;
    included: string[];
    index: number;
}

const PricingCard: React.FC<PricingProps> = ({ planName, price, included,index }) => {
    const a = "hero-bg";
    return (
        <div className={`w-full sm:w-[400px] flex flex-col p-8 border-[0.1px] border-[#969696] rounded-xl hero-bg-${index}`}>
            <div className="font-[zain] text-2xl">{planName}</div>
            <div className="text-5xl">
                ${price}<span className="text-2xl">/website</span>
            </div>
            <div className="font-[poppins] text-xl font-thin">What's Included?</div>
            <ul>
                {included.map((item, index) => (
                    <li className="flex text-base items-center font-[poppins] mt-1" key={index} ><FiCheck className="text-[#DB2B39] mr-2 text-xl" /> {item}</li>
                ))}
            </ul>
            <Button className="mt-4 w-full mx-auto text-sm md:text-base lg:text-lg" >Book a 15-min call</Button>
        </div>
    );
};

export default PricingCard;