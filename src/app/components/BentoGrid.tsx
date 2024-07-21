"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const BentoGrid = () => {
  return (
    <>
      <div className="container max-w-[1440px] mx-auto h-[50px] -mt-16 lg:mt-16 mb-4 flex justify-end items-center text-xl">
        <motion.h2
          initial={{ opacity: 0, translateX: 30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="text-white font-monument font-regular lg:text-2xl text-sm"
        >
          STUFF THAT I DO
        </motion.h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-6 gap-2  lg:grid-cols-12 lg:grid-rows-12 lg:gap-4 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, translateX: -30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-2 row-span-2 lg:col-span-4 lg:row-span-8 overflow-hidden rounded-xl group "
        >
          <Image
            className="w-full h-full  object-fill transform group-hover:scale-110 transition-transform duration-300"
            src="/images/ui-ux.png"
            width={500}
            height={832}
            alt="UI/UX"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-4 row-span-1 row-start-3 lg:col-span-8 lg:row-span-4 lg:col-start-5 overflow-hidden rounded-xl relative group"
        >
          <Image
            className="w-full h-full object-fill object-center transform group-hover:scale-110 transition-transform duration-300"
            src="/images/a+_content.png"
            width={953}
            height={467}
            alt="A+ Content"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-2 row-span-1 lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-5 overflow-hidden rounded-xl group"
        >
          <Image
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
            src="/images/coding.png"
            width={300}
            height={300}
            alt="coding"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-2 row-span-2 col-start-3 row-start-1 lg:col-span-4 lg:row-span-8 lg:col-start-9 lg:row-start-5 overflow-hidden rounded-xl group"
        >
          <Image
            className="w-full h-full object-fill object-center transform group-hover:scale-110 transition-transform duration-300"
            src="/images/data-entry.png"
            width={466}
            height={827}
            alt="data entry"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-2 row-span-1 lg:col-span-5 lg:row-span-4 lg:col-start-4 lg:row-start-9 rounded-xl group overflow-hidden"
        >
          <Image
            className="w-full h-full object-fill object-center transform group-hover:scale-110 transition-transform duration-300"
            src="/images/works-product-listing-2.png"
            width={588}
            height={462}
            alt="product listing"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-4 row-span-1 lg:col-span-3 lg:row-span-4 lg:col-start-1 lg:row-start-9 bg-orange-500 rounded-xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="col-span-4 lg:col-span-12 lg:row-start-13 border-2 h-[70px] lg:h-[75px] rounded-xl flex items-center px-3 text-2xl"
        >
          <h2 className="text-white font-monument font-regular text-xs lg:text-2xl">
            DISCOVER MORE WORKS
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default BentoGrid;
