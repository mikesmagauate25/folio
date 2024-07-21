"use client";

import Image from "next/image";
import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.9,
    },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.9,
    },
  },
};

const midVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.9,
    },
  },
};

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

const Works = () => {
  return (
    <>
      <div className="container max-w-[1440px] mb-10 text-white h-auto mx-auto gap-5 min-h-screen grid grid-cols-4 lg:mt-16  lg:grid-cols-12 lg:grid-rows-20">
        <div className=" col-span-4   row-start-1  col-start-1 lg:h-[1010px]  lg:col-span-3 lg:row-span-8 text-white rounded-xl flex justify-center items-center">
          <h1 className="lg:tracking-wide text-7xl lg:text-9xl font-monument font-extrabold lg:-rotate-90 text-center text-gray-300 uppercase ">
            <span>
              <motion.div
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                my
              </motion.div>
            </span>
            <span>
              <motion.div
                variants={titleVariantRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                works
              </motion.div>
            </span>
          </h1>
        </div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className=" col-span-4 lg:col-start-4 lg:col-span-9 lg:row-span-5 rounded-2xl flex justify-end items-center overflow-hidden relative"
        >
          <Image
            className="  lg:object-cover w-full h-full border-2"
            src="/images/works-a+content.png"
            width={1075}
            height={624}
            alt="works-a+"
          />
        </motion.div>
        <motion.div
          variants={midVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="p-2 col-span-4 row-start-3 lg:col-span-4 lg:row-span-3 lg:col-start-4 lg:row-start-6  rounded-2xl w-full h-full bg-blue-600"
        >
          <p className="font-machina text-xs uppercase">
            A+ Content showcases my expertise in creating visually rich and
            informative product listings. This includes enhanced brand content,
            detailed descriptions, high-quality images, and engaging multimedia
            elements to provide customers with a comprehensive understanding of
            the product. My approach ensures that the content not only looks
            appealing but also effectively communicates the products benefits,
            leading to increased customer trust and higher conversion rates.
          </p>
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-4 lg:col-span-5 lg:row-span-7 lg:col-start-8 lg:row-start-6  rounded-2xl overflow-hidden relative"
        >
          <Image
            className="object-contain lg:object-cover w-full h-full"
            src="/images/works-ui-ux.png"
            width={593}
            height={880}
            alt="ui/ux"
          />
        </motion.div>
        <motion.div
          variants={midVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-4  lg:col-span-5  lg:row-span-4 lg:col-start-3 lg:row-start-9  rounded-2xl overflow-hidden relative"
        >
          <Image
            className="lg:object-cover w-full h-full"
            src="/images/works-product-listing-2.png"
            width={589}
            height={494}
            alt="works-product"
          />
        </motion.div>
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="p-2 col-span-4 lg:col-span-2 lg:row-span-4 lg:col-start-1 lg:row-start-9 rounded-2xl bg-orange-500"
        >
          <p className="font-machina text-xs uppercase">
            My product listing work involves creating detailed and optimized
            listings for eCommerce platforms. This includes writing compelling
            product descriptions, selecting and editing high-quality images, and
            ensuring all necessary information is accurately presented. My goal
            is to create listings that attract potential buyers and provide them
            with all the information they need to make informed purchasing
            decisions.
          </p>
        </motion.div>
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-4 lg:col-span-6 lg:row-span-7  rounded-2xl relative overflow-hidden"
        >
          <Image
            src="/images/works-data-entry-new.png"
            className="object-contain lg:object-cover w-full h-full"
            width={704}
            height={877}
            alt="works-product"
          />
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="p-2 row-start-5 col-span-4 lg:col-span-6 lg:row-span-2  rounded-2xl bg-red-500"
        >
          <p className="font-machina text-xs uppercase">
            My UI/UX work emphasizes creating intuitive and aesthetically
            pleasing interfaces that provide an exceptional user experience. I
            focus on understanding the users needs and behaviors to design
            interfaces that are easy to navigate and visually engaging. This
            involves wireframing, prototyping, user testing, and iterating on
            designs to ensure the final product is both functional and
            delightful to use.
          </p>
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-4 lg:col-span-6 lg:row-span-5 rounded-2xl overflow-hidden relative"
        >
          <Image
            className="lg:object-cover w-full h-full"
            src="/images/works-scripting.png"
            width={710}
            height={623}
            alt="works-product"
          />
        </motion.div>
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="p-2 row-start-9 col-span-4 lg:col-span-6 lg:row-span-1 rounded-2xl bg-red-500"
        >
          <p className="font-machina text-xs uppercase">
            In my data entry projects, I leverage automation to enhance accuracy
            and efficiency. By implementing scripts and automation tools, I
            streamline repetitive tasks, reduce the likelihood of errors, and
            significantly speed up the data entry process. This approach not
            only improves productivity but also ensures high-quality and
            consistent data management.
          </p>
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="p-2 col-span-4 lg:col-span-6 lg:row-span-1 rounded-2xl bg-blue-600"
        >
          <p className="font-machina text-xs uppercase">
            My scripting expertise covers developing custom scripts to automate
            various tasks and processes. Whether its data manipulation, system
            monitoring, or task automation, I create scripts that enhance
            efficiency and reduce manual workload. My scripting solutions are
            designed to be robust, scalable, and easy to integrate into existing
            workflows, helping businesses save time and resources.
          </p>
        </motion.div>
      </div>
      <CallToAction />
    </>
  );
};

export default Works;
