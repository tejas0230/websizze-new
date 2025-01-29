import { Container } from "postcss";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
export default function Footer() {
    return (
      <div className="flex gap-2 mx-2 px-6 py-8 justify-center border h-48 rounded-xl border-[#323232] overflow-clip flex-col mb-2 hero-bg-4">
        <div className="flex flex-col gap-5 sm:flex-row m-auto justify-between w-full xl:w-[1024px] 2xl:w-[1280px] content-start">
          <div className="font-[Zain] text-3xl">Websizze</div>
          <div className="flex flex-col gap-y-2">
            <div className="font-[Poppins] text-lg">Connect</div>
            <div className="flex gap-4 text-[#838383]">
              <a href=""><ImInstagram className="size-6"/></a>
              <a href=""><ImLinkedin2 className="size-6"/></a>
              <a href=""><ImTwitter className="size-6"/></a>
            </div>
            <div className="font-[poppins]">team@websizze.com</div>
          </div>
        </div>
        <div className="border border-[#323232] w-full "></div>
        <div className="flex m-auto justify-between w-full xl:w-[1024px] 2xl:w-[1280px] content-start">
          <div className="font-[poppins] text-sm md:text-base  text-[#7E7E7E]">Copyright 2025 Websizze. All rights reserved.</div>
        </div>
      </div>
    );
  }
  