import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const Steps = ({
  text,
  imageLink,
  imageAlt,
  isReverse = false,
}: {
  text: string;
  imageLink: string;
  imageAlt: string;
  isReverse?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid md:grid-cols-2 grid-cols-1 items-center">
      <div
        className={`text-4xl font-bold font-urbanist text-[#6c63ff] ${
          isReverse ? "order-1" : ""
        }`}
      >
        {text}
      </div>
      <div className="flex flex-col items-center w-full">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: isInView ? 0 : isReverse ? -100 : 100,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="relative w-[400px] aspect-square object-cover object-center"
        >
          <Image src={imageLink} alt={imageAlt} fill />
        </motion.div>
      </div>
    </div>
  );
};
