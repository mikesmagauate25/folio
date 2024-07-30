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

const About = () => {
  return (
    <section className="container min-h-screen max-w-[1440px] mx-auto mt-10 overflow-hidden ">
      <div className="container  flex flex-col lg:flex-row justify-center items-center ">
        <div className="  w-[300px] lg:min-h-screen flex justify-center items-center text-white ">
          <h1 className="lg:tracking-wide text-7xl lg:text-9xl font-monument font-extrabold lg:-rotate-90 text-center text-gray-300 uppercase ">
            <span>
              <motion.div
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                ABOUT
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
        <div className="flex-1 px-10  gap-10 flex-col flex justify-center items-center min-h-screen text-white ">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
            }}
            whileInView="true"
            viewport={{ once: true, amount: 0.5 }}
            className="font-monument text-[1rem] lg:text-3xl w-3/3 lg:w-3/4  uppercase "
          >
            IM FLORENCE MICHAEL, FILIPINO INDEPENDENT Virtual Assistant
            Specializing in <span className="text-[#D0EE36]">Web Design</span>
            <span className="text-[#D0EE36]">, eCommerce Listing</span>{" "}
            <span className="text-[#D0EE36]">, Data Entry & Script Coding</span>
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
            className="font-machina text-xs lg:text-sm lg:w-3/4 uppercase "
          >
            With over 4 years of experience as a Virtual Assistant in the
            freelance industry, I have developed a comprehensive and versatile
            skill set. This allows me to excel in both minor and major tasks
            assigned to me with speed, accuracy, and a keen eye for detail. My
            expertise encompasses a wide range of areas, including web design,
            eCommerce listing, data entry, and programming. I am adept at
            managing multiple projects simultaneously, ensuring that each task
            is completed efficiently and to the highest standard. My strong
            organizational skills, combined with a proactive approach, enable me
            to anticipate client needs and deliver exceptional results. Whether
            it&apos;s enhancing user experiences, streamlining processes, or
            maintaining meticulous records, I bring a dedicated and professional
            attitude to every project I undertake.
          </motion.p>
        </div>
      </div>
      <Slider />
      <CallToAction />
    </section>
  );
};

export default About;
