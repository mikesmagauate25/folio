"use client";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import CallToAction from "../components/CallToAction";

const titleVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.9,
    },
  },
};

const titleVariantRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.9,
    },
  },
};

const Contact = () => {
  return (
    <section className="container min-h-screen max-w-[1440px] mx-auto mt-10 mb-40 relative  ">
      <div className="container pt-5  flex flex-col lg:flex-row justify-center items-center border-2 rounded-xl ">
        <div className="  w-[300px] lg:min-h-screen flex justify-center items-center text-white ">
          <h1 className="lg:tracking-wide  bg-[#0E0E0E] text-5xl lg:text-9xl font-monument font-extrabold lg:-rotate-90 text-center text-gray-300 uppercase ">
            <span>
              <motion.div
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                CONTACT
              </motion.div>
            </span>
            <span>
              <motion.div
                variants={titleVariantRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                ME
              </motion.div>
            </span>
          </h1>
        </div>
        <div className="flex-1 px-10  gap-10 flex-col flex -mt-20 lg:mt-0 justify-center items-center min-h-screen text-white ">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
            }}
            whileInView="true"
            viewport={{ once: true, amount: 0.5 }}
            className="font-monument  text-xl lg:text-3xl w-3/3 lg:w-3/4  uppercase "
          >
            You need a fast, efficient, and accurate virtual assistant for your
            digital project? lets get in touch
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.5,
              },
            }}
            whileInView="true"
            viewport={{ once: true, amount: 0.5 }}
            className=" font-machina text-xl lg:text-4xl w-3/3  lg:w-3/4  "
          >
            CONTACT DETAILS virtualdev09@gmail.com
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -12,
          transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
        }}
        whileInView="true"
        viewport={{ once: true, amount: 0.5 }}
        className="absolute bottom-3 right-0 text-2xl lg:text-4xl p-2 lg:p-5 font-monument uppercase bg-[#D0EE36]"
      >
        <p className="text-center">lets work together</p>
      </motion.div>
    </section>
  );
};

export default Contact;
