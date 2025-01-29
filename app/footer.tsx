import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Link from "next/link";

export default function Footer() {
    return (
      <div className="flex gap-2 mx-2 px-6 py-3 md:py-8 justify-center border h-54 rounded-lg border-[#323232] overflow-clip flex-col mb-2 hero-bg-4">
        <div className="flex flex-col gap-2 md:gap-5 sm:flex-row m-auto justify-between w-full xl:w-[1024px] 2xl:w-[1280px] content-start">
          <Link href="/" className="font-[Zain] text-[24px] md:text-[28px] font-light">Websizze</Link>
          <div className="flex flex-col gap-y-2">
            <div className="font-[Poppins] text-[16px] md:text-[20px] font-light">Connect</div>
            <div className="flex gap-4 text-[#838383]">
              <a href=""><ImInstagram className="size-6"/></a>
              <a href=""><ImLinkedin2 className="size-6"/></a>
              <a href=""><ImTwitter className="size-6"/></a>
            </div>
            <div className="font-[poppins] text-[14px] text-[#A4A4A4] font-light">team@websizze.com</div>
          </div>
        </div>
        <div className="border border-[#323232] w-full xl:w-[1024px] 2xl:w-[1280px] m-auto"></div>
        <div className="flex m-auto justify-between w-full xl:w-[1024px] 2xl:w-[1280px] content-start">
          <div className="font-[poppins] text-[14px] text-[#7E7E7E]">Copyright 2025 Websizze. All rights reserved.</div>
        </div>
      </div>
    );
  }
  