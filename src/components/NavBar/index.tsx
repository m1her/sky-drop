"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

export const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrollVal, setScrollVal] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollVal(latest);
  });

  return (
    <motion.div
      className="fixed top-0 left-0 w-full px-8 py-4 z-50"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${
          scrollVal <= 400 ? scrollVal / 400 : 1
        })`,
      }}
    >
      <div className="text-darkBlue text-[34px] font-urbanist flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          SK
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Y
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          DRO
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -7 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          P
        </motion.div>
      </div>
    </motion.div>
  );
};
