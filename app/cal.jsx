"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalCom() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="15min"
    calLink="tejas-websizze/15min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"dark"}}
    id="booking-link"
  />;
};