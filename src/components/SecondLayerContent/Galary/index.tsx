import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const Galary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="grid grid-cols-4 gap-8 w-full">
      <div className="flex flex-col gap-6 w-full">
        <motion.div
          initial={{ x: -100, y: -50, scale: 1.3, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]"
        >
          <Image src={"/sky1.jpg"} alt={"sky1 image"} sizes="2" fill />
        </motion.div>
        <div className="relative w-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
          <Image src={"/sky2.jpg"} alt={"sky2 image"} sizes="2" fill />
        </div>
      </div>
      <div className="flex w-full items-center">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full aspect-[1/2] object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]"
        >
          <Image src={"/sky12.jpg"} alt={"sky2 image"} sizes="2" fill />
        </motion.div>
      </div>
      <div className="flex flex-col w-full items-center col-span-2 gap-4">
        <div className="flex gap-6 w-full h-full">
          <div className="relative h-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
            <Image src={"/sky3.jpg"} alt={"sky2 image"} sizes="2" fill />
          </div>
          <div className="relative h-full aspect-square object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]">
            <Image src={"/sky4.jpg"} alt={"sky2 image"} sizes="2" fill />
          </div>
        </div>
        <motion.div
          initial={{ x: 100, y: 70, scale: 1.5, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-full aspect-[2/1] object-cover object-center rounded-xl overflow-hidden shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)]"
        >
          <Image src={"/sky21.jpg"} alt={"sky2 image"} sizes="2" fill />
        </motion.div>
      </div>
    </div>
  );
};
