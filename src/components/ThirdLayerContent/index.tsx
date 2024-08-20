"use client";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const ThirdLayerContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-full bg-white pt-12">
      <motion.div
        className="rounded-t-lg w-full h-full p-8 flex flex-col items-center gap-y-8"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -150 : 100 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="text-5xl font-bold font-urbanist text-black">
          <span className="text-eggplant">CURRENT </span> DELIVERY ZONES
        </div>
        <div className="font-jost w-2/3 text-center">
          Don’t see your neighborhood? We’re constantly working to expand our
          operations while adhering to the latest regulations. We hope to reach
          you soon!
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-16">
          <div className="flex flex-col items-center gap-4 text-2xl font-urbanist font-extrabold text-darkBlue">
            <FontAwesomeIcon icon={faLocationDot} className="scale-125" />
            <div>BOISE, IDAHO</div>
          </div>
          <div className="flex flex-col items-center gap-4 text-2xl font-urbanist font-extrabold text-darkBlue">
            <FontAwesomeIcon icon={faLocationDot} className="scale-125" />
            <div>SAVANNAH, GEORGIA</div>
          </div>
          <div className="flex flex-col items-center gap-4 text-2xl font-urbanist font-extrabold text-darkBlue">
            <FontAwesomeIcon icon={faLocationDot} className="scale-125" />
            <div>ASHEVILLE, NORTH CAROLINA</div>
          </div>
          <div className="flex flex-col items-center gap-4 text-2xl font-urbanist font-extrabold text-darkBlue">
            <FontAwesomeIcon icon={faLocationDot} className="scale-125" />
            <div>EUGENE, OREGON</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
