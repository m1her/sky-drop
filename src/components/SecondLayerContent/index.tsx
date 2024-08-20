"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const SecondLayerContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-full bg-white pt-24">
      <motion.div
        className="rounded-t-lg w-full h-full p-8 flex flex-col items-center gap-y-8"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -150 : 100 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="text-5xl font-bold font-urbanist text-darkBlue">
          How it works
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="text-4xl font-bold font-urbanist text-[#6c63ff]">
            SELECT
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="relative w-[400px] aspect-square object-cover object-center">
              <Image src={"/select.svg"} alt={"select image"} fill />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col items-center w-full">
            <div className="relative w-[400px] aspect-square object-cover object-center">
              <Image src={"/location.svg"} alt={"location image"} fill />
            </div>
          </div>
          <div className="text-4xl font-bold font-urbanist text-[#6c63ff]">
            SET LOCATION
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="text-4xl font-bold font-urbanist text-[#6c63ff]">
            CONFIRM
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="relative w-[400px] aspect-square object-cover object-center">
              <Image src={"/confirm.svg"} alt={"confirming image"} fill />
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold font-urbanist text-darkBlue">
          Then look at the <span className="text-royalBlue">sky</span>
        </div>
        <div className="grid grid-cols-4 gap-8 w-full">
          <motion.div initial={{}} className="flex flex-col gap-6 w-full">
            <div className="relative w-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
              <Image src={"/sky1.jpg"} alt={"sky1 image"} fill />
            </div>
            <div className="relative w-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
              <Image src={"/sky2.jpg"} alt={"sky2 image"} fill />
            </div>
          </motion.div>
          <div className="flex w-full items-center">
            <div className="relative w-full aspect-[1/2] object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
              <Image src={"/sky12.jpg"} alt={"sky2 image"} fill />
            </div>
          </div>
          <div className="flex flex-col w-full items-center col-span-2 gap-4">
            <div className="flex gap-6 w-full h-full">
              <div className="relative h-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
                <Image src={"/sky3.jpg"} alt={"sky2 image"} fill />
              </div>
              <div className="relative h-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
                <Image src={"/sky4.jpg"} alt={"sky2 image"} fill />
              </div>
            </div>
            <div className="relative h-full aspect-[2/1] object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
              <Image src={"/sky21.jpg"} alt={"sky2 image"} fill />
            </div>
          </div>
        </div>
        <div className="w-full text-3xl font-semibold text-center font-urbanist mt-8 text-gray-400">
          We Deliver <span className="text-black"> Instantly</span>
        </div>
      </motion.div>
    </div>
  );
};
