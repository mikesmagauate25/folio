"use client";

import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

const firstLetterVariant = {
  initial: { y: 0, transition: { duration: 0.2 } },
  animate: {
    y: -36,
    transition: {
      ease: easeInOut, //use this instead of delay
    },
  },
};

const StraggerLetters = ({ text }: { text: string }) => {
  const letters = text.split("");

  const [hovering, setHover] = useState<boolean>(false);

  return (
    <div
      className="h-[25px]  overflow-hidden  "
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
    >
      <motion.div
        variants={firstLetterVariant}
        initial="initial"
        animate={hovering ? "animate" : "initial"}
        className="cursor-pointer"
      >
        {letters.map((letter, index) => (
          <motion.span key={index}>{letter}</motion.span>
        ))}
      </motion.div>
      <motion.div
        variants={firstLetterVariant}
        initial="initial"
        animate={hovering ? "animate" : "initial"}
        className="mt-3"
      >
        {letters.map((letter, index) => (
          <motion.span key={index}>{letter}</motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default StraggerLetters;
