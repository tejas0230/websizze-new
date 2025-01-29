"use client";
import type { Metadata } from "next";
import { Zain, Poppins, Whisper } from "next/font/google";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const locomotiveScroll = new LocomotiveScroll.default({
          el: scrollContainerRef.current as HTMLElement,
          smooth: true,
          getDirection: true,
          multiplier: 1,
          lerp: 0.1,
        });

        return () => {
          locomotiveScroll.destroy();
        };
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${zain.className} antialiased main-scrollbar`}>
        <div ref={scrollContainerRef} data-scroll-container>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
