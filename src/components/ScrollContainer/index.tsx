"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";

export const ScrollContainer = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [scrollVal, setScrollVal] = useState(0);

  const width = useTransform(scrollY, [170, 500], ["80%", "100%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollVal(latest);
  });

  console.log(width.get());

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full h-screen"></div>
      <div></div>
      <div
        className="bg-white min-h-screen flex items-start justify-center py-12"
        style={{
          width: width.get(),
        }}
      >
        {children}
      </div>
    </div>
  );
};
