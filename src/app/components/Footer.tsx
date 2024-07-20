"use client";

import { motion } from "framer-motion";
import StraggerLetters from "../utils/StaggetLetters";
import BackToTopButton from "./ScrollTop";

const Footers = () => {
  return (
    <footer className="container  text-xs gap-10 font-machina uppercase bg-[#2E2E2E] flex flex-col justify-between items-start lg:h-[90px] rounded-xl p-2 pt-5 pb-5 lg:mt-20 mb-10 lg:max-w-[1440px] mx-2 lg:mx-auto lg:flex-row lg:justify-between lg:items-center">
      <h2 className="text-white">florence michael maguate</h2>
      <div className="flex flex-col  lg:flex-row lg:justify-between lg:items-center lg:gap-5">
        <p className="text-white">facebook</p>
        <p className="text-white">onlinejobs</p>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footers;
