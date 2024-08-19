"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const NavBar = () => {
  const refNav = useRef(null);
  const { scrollY } = useScroll({ target: refNav });
  const backgroundColor = useTransform(
    scrollY,
    [170, 400],
    ["rgba(255, 255, 255,0)", "rgba(255, 255, 255,1)"]
  );

  return (
    <motion.div
      ref={refNav}
      className="fixed top-0 left-0 w-full px-8 py-4 z-50"
      style={{
        backgroundColor,
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
