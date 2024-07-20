"use client";

import Link from "next/link";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import StraggerLetters from "../utils/StaggetLetters";

const links = [
  { path: "/", name: "home" },
  { path: "/works", name: "works" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
];

const modalVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Add ease-out easing function
    },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: {
      duration: 0.1,
      ease: "easeOut", // Add ease-out easing function
    },
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const HeaderNav = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <header className="container max-w-[1440px] h-[70px] px-2 flex justify-between items-center  mx-auto sticky top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <Link
        href="/"
        className="text-white text-sm lg:text-lg font-machina font-regular uppercase flex items-center gap-2 z-50"
      >
        <svg
          className="animate-spin-slow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 350 350"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M160.714 4.96218C160.714 15.018 166.02 114.942 167.1 125.254C168.805 141.505 165.557 136.042 154.339 103.792C148.93 88.2355 139.439 60.9107 133.248 43.0695C127.059 25.2284 121.613 10.2513 121.145 9.78579C120.336 8.98097 97.3875 17.9957 95.5214 19.8541C95.0304 20.3426 101.346 34.6642 109.555 51.6792C117.766 68.6924 127.491 89.0102 131.168 96.8274C134.843 104.645 140.998 117.357 144.848 125.076C148.696 132.796 151.514 139.442 151.107 139.845C150.7 140.251 132.082 120.343 109.732 95.6086C87.3821 70.8723 67.2143 48.6589 64.9161 46.2426L60.7357 41.8525L50.8875 51.5282C45.4714 56.8492 41.2482 61.7688 41.5018 62.4617C41.7571 63.1546 60.0446 79.8728 82.1429 99.6132C138.486 149.946 143.636 154.782 138.93 152.945C136.671 152.063 109.559 139.275 78.6839 124.529C47.8089 109.785 21.4321 97.5185 20.0696 97.2733C18.5411 96.998 15.9321 100.857 13.2607 107.345C8.09822 119.878 7.94821 121.855 12.0536 123.195C13.7732 123.754 27.2321 128.535 41.9643 133.819C56.6964 139.103 81.4643 147.935 97.0036 153.447C138.22 168.071 139.343 168.956 115.179 167.767C104.375 167.236 85.4911 166.076 73.2143 165.189C60.9375 164.305 39.4429 163.038 25.4464 162.377L0 161.176V175.791V190.405L12.9464 189.375C20.0679 188.808 43.9732 187.538 66.0714 186.554C88.1696 185.569 112.679 184.37 120.536 183.889C131.004 183.249 133.98 183.514 131.673 184.882C128.68 186.658 99.0339 197.245 50 214.047C37.7232 218.254 23.1696 223.451 17.6589 225.594L7.6375 229.493L12.675 242.221C15.7536 249.999 18.6089 254.734 20.0161 254.397C21.2839 254.095 49.1 241.148 81.8304 225.629C114.559 210.11 140.273 198.693 138.973 200.26C137.671 201.826 115.545 221.793 89.8 244.634C64.0571 267.473 42.525 286.915 41.9518 287.837C41.3804 288.757 45.4893 294.066 51.0821 299.632L61.2536 309.752L66.5607 303.67C69.4804 300.325 80.8643 287.595 91.8572 275.381C102.852 263.166 120.509 243.323 131.096 231.284C141.684 219.247 150.668 209.717 151.062 210.108C151.679 210.721 143.105 229.046 101.636 315.764C97.7893 323.805 94.6429 330.732 94.6429 331.155C94.6429 331.576 100.357 334.095 107.341 336.75C122.109 342.366 120.688 343.389 128.318 321.648C131.246 313.302 138.429 292.881 144.279 276.269C150.127 259.657 156.646 240.786 158.764 234.333C160.884 227.88 163.82 221.085 165.291 219.231C167.729 216.161 167.879 216.728 166.991 225.635C165.995 235.625 160.714 336.107 160.714 345.054V350H175.15H189.588L188.441 330.013C187.811 319.021 186.564 298.033 185.67 283.376C182.073 224.405 181.834 215.733 183.889 218.945C185.67 221.728 199.452 259.206 215.096 303.807C223.212 326.946 228.693 341.117 229.525 341.117C231.427 341.117 251.111 333.372 252.543 332.061C253.527 331.16 250.168 322.098 244.229 309.627C238.748 298.12 232.05 283.909 229.343 278.046C226.636 272.183 218.107 254.239 210.387 238.171C199.216 214.912 197.309 209.842 201.034 213.297C203.607 215.685 224.295 238.227 247.007 263.388C269.718 288.549 288.723 309.046 289.239 308.936C289.755 308.826 294.361 304.2 299.473 298.655L308.768 288.572L263.759 248.351C239.004 226.228 216.339 205.567 213.393 202.437C208.339 197.07 208.289 196.878 212.5 199.056C214.955 200.326 242.679 213.63 274.107 228.619C329.971 255.264 331.286 255.784 332.863 251.858C333.75 249.649 336.293 243.699 338.513 238.636L342.548 229.428L336.9 227.331C329.479 224.577 285.179 209.153 248.214 196.455C232.009 190.887 217.952 185.546 216.975 184.585C215.812 183.441 220.12 183.169 229.475 183.794C237.327 184.319 261.429 185.555 283.036 186.541C304.643 187.527 328.55 188.787 336.161 189.341L350 190.345V175.753V161.16L323.661 162.366C309.173 163.029 286.875 164.308 274.107 165.209C261.339 166.11 242.455 167.234 232.143 167.709L213.393 168.572L221.429 164.985C225.848 163.011 239.509 157.9 251.786 153.627C311.695 132.769 321.266 129.388 330.804 125.716C336.45 123.541 341.071 121.125 341.071 120.345C341.071 119.037 332.296 97.403 331.348 96.3708C331.116 96.1203 304.884 108.388 273.054 123.632C241.221 138.875 213.17 152.117 210.714 153.057C205.238 155.151 199.632 160.495 261.113 105.004L308.83 61.9322L298.664 52.0558L288.496 42.1812L282.195 49.2985C266.046 67.5358 197.707 142.132 197.146 142.132C196.193 142.132 199.779 133.27 203.595 126.203C209.55 115.173 253.571 22.5261 253.571 21.0231C253.571 19.9162 231.611 8.88325 229.409 8.88325C228.6 8.88325 217.793 38.4201 195.605 101.269C191.293 113.483 186.459 126.275 184.863 129.695C181.548 136.798 181.545 136.928 186.634 51.5228C188.059 27.5825 189.239 6.19518 189.255 3.99746C189.284 0.182995 188.634 0 175 0H160.714V4.96218Z"
            fill="#D0EE36"
          />
        </svg>
        <p className="cursor-pointer">Florence Michael Maguate</p>
      </Link>
      <nav className="hidden lg:flex justify-between items-center gap-56 ">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              link.name === "home" ? "block sm:hidden" : "hidden sm:block"
            } font-machina uppercase font-regular text-white list-none text-sm`}
          >
            <Link href={link.path}>
              <StraggerLetters text={link.name} />
            </Link>
          </li>
        ))}
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="text-white lg:hidden z-50"
      >
        <div className="flex justify-center items-center flex-col gap-1 h-5 ">
          <div className="w-6 h-[1.5px] bg-white"></div>
          {open ? null : <div className="w-6 h-[1.5px] bg-white"></div>}
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute flex justify-center items-center  top-0 right-0 left-0 bottom-0 min-h-screen bg-black"
          >
            <motion.ul
              variants={navLinksVariants}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              className="flex flex-col justify-center items-center gap-10 text-white"
            >
              {links.map((link, index) => (
                <motion.li
                  onClick={() => setOpen(!open)}
                  variants={linkItemVariants}
                  key={index}
                  className="font-machina text-5xl uppercase"
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.li>
              ))}
              <li></li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNav;
