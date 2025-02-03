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
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
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

export const metadata: Metadata = {
  title: "Websizze.com",
  description: "Elevate your brand identity with a custom and high-converting website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body className={`${zain.className} ${poppins.className} ${whisper.className}antialiased main-scrollbar`}>
      <SpeedInsights />
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
