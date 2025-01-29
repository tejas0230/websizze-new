import React from "react";

interface FeatureProps {
    title: string;
    description: string;
  }

const Feature = ({title,description}: FeatureProps)=>
{
    return(
        <div className="w-full px-5">
            <div className="text-[#DB2B39] font-[Whisper] text-2xl md:text-4xl font-semibold">{title}</div>
            <div className="font-[poppins] text-base">{description}</div>
        </div>
    );
}

export default Feature;