"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CallToAction: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { amount: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      if (isInView) {
        const scrollY = window.scrollY;
        const newRotation = scrollY * 0.01;
        setRotation(newRotation);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <div className="container max-w-[1440px] flex flex-col justify-center mx-auto min-h-screen -mt-40 lg:mt-20">
      <p className="text-white font-monument text-xs lg:text-2xl">
        Whether Its a Minor or Major Task
      </p>
      <div className="w-full flex justify-between items-center">
        <motion.p
          initial={{ opacity: 0, translateX: -30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="font-monument font-ultrabold text-4xl lg:text-9xl text-white"
        >
          LET ME <br /> SAVE
        </motion.p>
        <motion.div
          ref={imageRef}
          className="w-[120px] h-[120px] lg:w-[300px] lg:h-[300px]"
          style={{ rotate: `${rotation}deg` }}
        >
          <Image
            src="/images/asterisk.png"
            width={300}
            height={300}
            alt=""
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className="w-full flex justify-between items-center mt-5">
        <motion.div
          ref={imageRef}
          className="w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#D0EE36] flex justify-center items-center"
          style={{ rotate: `${rotation}deg` }}
        >
          <h2 className="font-monument font-regular text-[10px] lg:text-2xl">
            GET IN TOUCH
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, translateX: 30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="font-monument font-ultrabold text-4xl lg:text-9xl text-white text-end w-[250px] lg:w-[900px]"
        >
          YOURE TIME
        </motion.p>
      </div>
    </div>
  );
};

export default CallToAction;
