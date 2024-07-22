"use client";

import Link from "next/link";
import BackToTopButton from "./ScrollTop";
import StraggerLetters from "../utils/StaggetLetters";

const Footers = () => {
  return (
    <footer className="container  text-xs gap-10 font-machina uppercase bg-[#2E2E2E] flex flex-col justify-between items-start lg:h-[90px] mx-auto rounded-xl p-2 pt-5 pb-5 lg:mt-20 mb-10 lg:max-w-[1440px]  lg:mx-auto lg:flex-row lg:justify-between lg:items-center">
      <h2 className="text-white text-sm">florence michael maguate</h2>
      <div className="flex flex-col  lg:flex-row lg:justify-between lg:items-center lg:gap-5">
        <Link
          href="https://www.onlinejobs.ph/jobseekers/info/3527342"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="text-white text-sm">
            <StraggerLetters text="onlinejobs" />
          </div>
        </Link>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footers;
