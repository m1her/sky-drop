"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { Steps } from "./Steps";
import { Galary } from "./Galary";

export const SecondLayerContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div ref={ref} className="w-full h-full bg-white pt-24">
      <motion.div
        className="rounded-t-lg w-full h-full p-8 flex flex-col items-center gap-y-8"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -150 : 100 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="text-5xl font-bold font-urbanist text-black">
          <span className="text-eggplant">How</span> it works
        </div>
        <Steps
          text={"SELECT"}
          imageLink={"/select.svg"}
          imageAlt={"select image"}
        />
        <Steps
          text={"SET LOCATION"}
          imageLink={"/location.svg"}
          imageAlt={"location image"}
          isReverse={true}
        />
        <Steps
          text={"CONFIRM"}
          imageLink={"/confirm.svg"}
          imageAlt={"confirming image"}
        />

        <div className="text-5xl font-bold font-urbanist text-darkBlue">
          Then look at the <span className="text-royalBlue">sky</span>
        </div>
        <Galary />
        <div className="w-full text-3xl font-semibold text-center font-urbanist mt-8 text-gray-400">
          We Deliver <span className="text-black"> Instantly</span>
        </div>
      </motion.div>
    </div>
  );
};
