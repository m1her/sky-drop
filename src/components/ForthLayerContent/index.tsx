"use client";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const ForthLayerContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[340px] bg-darkBlue -pb-10">
      <motion.div
        className="rounded-t-lg w-full h-full p-8 pt-12 flex flex-col items-center gap-y-8 bg-darkBlue"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -150 : 100 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="text-5xl font-bold font-urbanist text-white">
          <span className="text-blue-200">JOIN</span> THE WAITING LIST
        </div>
        <div className="flex rounded border bg-white border-gray-300 text-xl focus-within:border-royalBlue transition-all duration-300">
          <input
            className="outline-none px-4 py-2 m-2 font-jost peer text-darkBlue"
            placeholder="my-email@example.com"
          />
          <div className="w-20 bg-gray-300 peer-focus:bg-royalBlue flex items-center justify-center text-white font-urbanist font-bold transition-all duration-300">
            JOIN
          </div>
        </div>

        <div className="w-full h-[1px] border-b border-white/20 mt-4"></div>

        <div className="w-full grid grid-cols-2 text-white text-base font-jost">
          <div className="w-full">SKYDROP</div>
          <div className="grid grid-cols-3 w-full">
            <div className="flex flex-col gap-y-2">
              <div>column 1</div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 1
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 2
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 3
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div>column 2</div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 1
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 2
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 3
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 4
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div>column 3</div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 1
              </div>
              <div className="text-white/80 hover:text-white border-b border-white/0 hover:border-white w-fit duration-300 transition-all cursor-pointer">
                line 2
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
