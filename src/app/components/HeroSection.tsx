"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container max-w-[1440px] min-h-screen mx-auto relative  flex flex-col justify-center items-start overflow-x-hidden">
      <h1 className="text-white font-monument font-regular max-w-[1211px] text-3xl lg:text-[64px] leading-tight  ">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Filipino Virtual Assistant
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Specializing in <span className="text-[#D0EE36]">Web Design,</span>
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className="text-[#D0EE36]"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            eCommerce Listing, Data Entry &
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className="text-[#D0EE36]"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Script Coding
          </motion.p>
        </div>
      </h1>
      <div className="container h-32 flex justify-end items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="w-32 h-32 rounded-full l relative"
        >
          <Image
            className="animate-spin-slow"
            src="/images/curve text.png"
            width={200}
            height={200}
            alt="curve"
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/images/Union.png"
            width={50}
            height={50}
            alt="arrow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
