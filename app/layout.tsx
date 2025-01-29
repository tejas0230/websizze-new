"use client";
import type { Metadata } from "next";
import { Zain, Poppins, Whisper } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth <= 768; // Check if it's a mobile device
      if (!isMobile && scrollContainerRef.current) {
        import("locomotive-scroll").then((LocomotiveScroll) => {
          const scrollInstance = new LocomotiveScroll.default({
            el: scrollContainerRef.current as HTMLElement,
            smooth: true,
            smartphone: {
              smooth: true, // Enable smooth scroll on mobile only if you want
            },
            tablet: {
              smooth: true,
              breakpoint: 1024, // Set breakpoint for tablet devices
            },
            getDirection: true,
            multiplier: 1,
            lerp: 0.1,
          });

          setLocomotiveScroll(scrollInstance);

          return () => {
            scrollInstance.destroy();
          };
        });
      }
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${zain.className} ${whisper.className} antialiased main-scrollbar`}
      >
        <div
          ref={scrollContainerRef}
          data-scroll-container
          style={typeof window !== "undefined" && window.innerWidth <= 768 ? { overflowY: "auto" } : {}}
        >
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
