"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    
      <Cal
        namespace="15min"
        calLink="tejas-websizze/15min"
        className="w-full lg:w-[1000px] h-[100%] m-auto overflow-scroll no-scrollbar"
        config={{ layout: "month_view", theme: "dark" }}
        id="booking-link"
      />
    
  );
};
