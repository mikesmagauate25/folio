"use client";

import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

const letterVariant = {
  initial: { y: 0 },
  animate: { y: -36, transition: { duration: 0.3, ease: easeInOut } },
  exit: { y: 0, transition: { duration: 0.3, ease: easeInOut } },
};

const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse stagger for exit
      when: "afterChildren",
    },
  },
};

const StraggerLetters = ({ text }: { text: string }) => {
  const letters = text.split("");

  const [hovering, setHover] = useState<boolean>(false);

  return (
    <div
      className="h-[25px] overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate={hovering ? "animate" : "exit"}
        exit="exit"
        className="cursor-pointer flex"
      >
        {letters.map((letter, index) => (
          <motion.div key={index} variants={letterVariant}>
            {letter}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate={hovering ? "animate" : "exit"}
        exit="exit"
        className="mt-3 text-[#D0EE36] flex"
      >
        {letters.map((letter, index) => (
          <motion.div key={index} variants={letterVariant}>
            {letter}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StraggerLetters;
