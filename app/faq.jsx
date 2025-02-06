"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import CalCom from './cal';

import {motion} from "motion/react";
export default function FAQ() {
    const scrollToBooking = () => {
        const bookingElement = document.getElementById("booking-link");
        if (bookingElement) {
          bookingElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

    return (
      <div id="faq" className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-4 justify-center m-auto mt-0 lg:mt-20 h-[1000px]">
            <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }}  className="font-[zain] text-center  text-3xl md:text-4xl lg:text-5xl font-light px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
                Ready to <span className="text-[#DB2B39]">grow</span> your business? Have <span className="text-[#DB2B39]">questions</span>?         
            </motion.div>
            <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="m-auto">
            <Button onClick={scrollToBooking} className="font-[zain] w-max m-auto mt-5 px-10 text-lg font-light">Book a 15-min call</Button>
            </motion.div>
            <motion.div initial={{opacity:0, y:10}} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1 }} className="m-auto w-full lg:w-1/2">
            <Accordion type="single" collapsible className="font-[poppins]  m-auto">
                <AccordionItem value="item-1" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-5">
                    <AccordionTrigger><div className="text-base font-light">Who’s behind Websizze?</div></AccordionTrigger>
                    <AccordionContent>
                    <div className="text-base font-light text-[#D0D0D0]">Websizze is led by a team of passionate and experienced web developers, designers, and strategists dedicated to building high-quality websites that drive results.</div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-5">
                    <AccordionTrigger><div className="text-base font-light">Can I get a refund?</div></AccordionTrigger>
                    <AccordionContent>
                    <div className="text-base font-light text-[#D0D0D0]">We strive to deliver exceptional results, and client satisfaction is our priority. If you're not satisfied with our work, we offer refunds based on the terms outlined in our refund policy.</div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-5">
                    <AccordionTrigger><div className="text-base font-light">How quickly will I receive my project?</div></AccordionTrigger>
                    <AccordionContent>
                    <div className="text-base font-light text-[#D0D0D0]">Project timelines vary depending on complexity and requirements. A standard website typically takes between 2 to 6 weeks from design to launch. For urgent projects, we offer expedited development options. Get in touch, and we’ll provide a tailored timeline based on your needs.</div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </motion.div>
            <CalCom/>
      </div>
    );
  }
  