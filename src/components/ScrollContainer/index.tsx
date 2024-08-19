"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

export const ScrollContainer = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const width = useTransform(scrollY, [170, 500], ["80%", "100%"]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 160,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full h-screen"></div>
      <motion.div
        className=" min-h-screen flex flex-col items-start justify-center"
        style={{
          width,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
