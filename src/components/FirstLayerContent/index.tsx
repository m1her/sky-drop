"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const FirstLayerContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex flex-col justify-center items-center rounded-t-lg px-8 bg-white pt-12 pb-28">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-urbanist font-black">
          WATCH YOUR FOOD <span className="text-darkBlue"> TAKE FLIGHT</span>
        </div>
        <div className="text-3xl font-urbanist font-black">
          DELIVERED STRAIGHT TO YOUR DOOR{" "}
          <span className="text-royalBlue">BY DRONE!</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="relative w-[400px] aspect-square object-cover object-center">
          <Image src={"/drone.svg"} alt={"drone image"} fill />
        </div>
      </div>

      <div className="w-full text-3xl font-semibold text-center font-urbanist mb-12 text-gray-400">
        <span className="text-eggplant">Our mission </span> is to improve the
        world by making lightning-fast suburban deliveries affordable, green and
        safe.
      </div>
      <div
        ref={ref}
        className="bg-darkBlue rounded-lg w-fit p-16 flex items-center"
      >
        <div className="text-white font-urbanist flex flex-col border-r-2 border-white/60 pr-8">
          <div className="text-[4em] whitespace-nowrap font-extrabold flex">
           1 Minute
          </div>
          <div className="text-[1.5em] font-bold">Delivery Windows</div>
          <div className="text-[1em] font-jost">
            Deliveries arrive in the exact right place with down-to-the-second
            ETAs.
          </div>
        </div>

        <div className="text-white font-urbanist flex flex-col pl-8 border-r-2 border-white/60 pr-8">
          <div className="text-[4em] whitespace-nowrap font-extrabold flex">
            8x Faster
          </div>
          <div className="text-[1.5em] font-bold">Delivery Speeds</div>
          <div className="text-[1em] font-jost">
            SkyDrop delivers at about 8x the speed of traditional car
            deliveries.
          </div>
        </div>

        <div className="text-white font-urbanist flex flex-col pl-8">
          <div className="text-[4em] whitespace-nowrap font-extrabold flex">
            100%
          </div>
          <div className="text-[1.5em] font-bold">Emission-Free</div>
          <div className="text-[1em] font-jost">
            Our fully electric, battery-powered aircraft fly with zero carbon
            emissions.
          </div>
        </div>
      </div>
    </div>
  );
};
