"use client";
import type { Metadata } from "next";
import { Zain, Poppins, Whisper } from "next/font/google";
import { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const zain = Zain({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const whisper = Whisper({
  subsets: ["latin"],
  weight: ["400"],
});

const metadata: Metadata = {
  title: "Websizze",
  description: "Elevate your brand identify with custom and high-converting website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        inertia: 0.3, // Control deceleration (lower = slower stop)
        getDirection: true, // Track scroll direction
        multiplier: 1.2, // Adjust scroll speed multiplier
      });

      // Clean up LocomotiveScroll on unmount
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${zain.className} ${zain.className} antialiased main-scrollbar` }
      >
        <div ref={scrollContainerRef} data-scroll-container>
        <Header />
        <div >
          {children}
        </div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
