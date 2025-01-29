"use client";
import React from "react";
import { motion } from "motion/react";

interface FeatureProps {
    title: string;
    description: string;
  }

const Feature = ({title,description}: FeatureProps)=>
{
    return(
        <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="w-full px-5">
            <div className="text-[#DB2B39] font-[zain] text-3xl md:text-[32px] font-bold">{title}</div>
            <div className="text-[#CBCBCB] font-[poppins] font-light text-base">{description}</div>
        </motion.div>
    );
}

export default Feature;