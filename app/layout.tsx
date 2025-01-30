// "use client";
import type { Metadata } from "next";
import { Zain, Poppins, Whisper } from "next/font/google";
// import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
// import Lenis from 'lenis';
import {ReactLenis} from './lenis';
const zain = Zain({
  subsets: ["latin"],
  weight: ["300","400","700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400", "700"],
});

const whisper = Whisper({
  subsets: ["latin"],
  weight: ["400"],
});

const metadata: Metadata = {
  title: "Websizze",
  description: "Elevate your brand identity with a custom and high-converting website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // useEffect(()=>{
  //   const lenis = new Lenis();
  //   function raf(time:any){
  //     lenis.raf(time);
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // },[]);
  return (
    <html lang="en">
      <ReactLenis root>
      <body className={`${zain.className} ${poppins.className} ${whisper.className}antialiased main-scrollbar`}>
        <div>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
      </ReactLenis>
    </html>
  );
}
