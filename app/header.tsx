import { Container } from "postcss";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
      <div className="flex w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-4 justify-center m-auto">
        <div className="w-full px-4 flex justify-between content-center">
            <Link href="/" className="self-center text-xl">Websizze</Link>
            <div className="flex w-max justify-between content-center gap-0 md:gap-10">
                <Link href="/" className="hidden md:block self-center">Home</Link>
                <Link href="/our work" className="hidden md:block self-center">Our Work</Link>
                <Link href="/FAQ" className="hidden md:block self-center">FAQ</Link>
                <Button >Book a 15-min call</Button>
            </div>
        </div>
      </div>
    );
  }
  