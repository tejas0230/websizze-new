import React from "react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import CalCom from './cal';
export default function FAQ() {
    return (
      <div className="flex flex-col w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-4 justify-center m-auto mt-0 lg:mt-20 h-[1000px]">
            <div className="text-center text-xl md:text-4xl lg:text-6xl px-5 w-full max-w-[1100px] mx-auto mt-2 lg:mt-6 leading-[70%] md:leading-[70%] lg:leading-[70%] tracking-tighter">
                Ready to <span className="text-[#DB2B39]">grow</span> your business? Have <span className="text-[#DB2B39]">questions</span>?         
            </div>
            <Button className="w-max m-auto mt-5 px-10 text-lg">Book a 15-min call</Button>
            <Accordion type="single" collapsible className="font-[poppins] text-base w-full lg:w-1/2 m-auto">
                <AccordionItem value="item-1" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-3">
                    <AccordionTrigger>Who’s behind Websizze?</AccordionTrigger>
                    <AccordionContent>
                        We are a team of enthusiastic developers
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-3">
                    <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-[0.1px] border-[#969696] rounded-xl px-5 m-4 hero-bg-3">
                    <AccordionTrigger>How quickly will I receive my project?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <CalCom/>
      </div>
    );
  }
  