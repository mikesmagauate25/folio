"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Card from "./Card";

interface ExpertiseItem {
  img: string;
  title: string;
  description: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    img: "/icons/ui ux.png",
    title: "UI/UX",
    description:
      "Creating visually appealing and user-friendly interfaces for websites and applications, ensuring an optimal user experience through meticulous attention to detail, user research, and iterative design processes.",
  },
  {
    img: "/icons/Web Dev.png",
    title: "Web Dev",
    description:
      "Building and maintaining responsive, efficient, and scalable websites using the latest technologies and best practices. This includes front-end and back-end development, ensuring high performance, security, and seamless user interactions.",
  },
  {
    img: "/icons/product listing.png",
    title: "Product Listing",
    description:
      "Managing and optimizing product listings on eCommerce platforms to improve visibility and sales performance. This involves keyword optimization, compelling product descriptions, and high-quality images to attract and convert potential customers.",
  },
  {
    img: "/icons/data entry.png",
    title: "Data Entry",
    description:
      "Accurately inputting, updating, and managing data across various platforms, ensuring data integrity and consistency. This includes handling large volumes of data, using various data entry tools, and maintaining a high level of accuracy and attention to detail.",
  },
  {
    img: "/icons/scripting.png",
    title: "Scripting",
    description:
      "Developing custom software solutions and scripts to automate tasks, enhance functionality, and improve efficiency. This includes writing clean, efficient code, debugging, and maintaining scripts to ensure they meet the needs of the business.",
  },
  {
    img: "/icons/graphic-design.jpg",
    title: "Graphic Design",
    description:
      "Creating visually compelling graphics and marketing materials to enhance brand identity and engage audiences. This includes designing logos, brochures, social media graphics, and other visual content that aligns with the brand's aesthetic and messaging.",
  },
  {
    img: "/icons/seo.png",
    title: "SEO Optimization",
    description:
      "Implementing SEO strategies to improve website ranking, drive organic traffic, and increase online visibility. This involves keyword research, on-page and off-page optimization, content creation, and staying up-to-date with the latest SEO trends and algorithm changes.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const Slider: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="container max-w-[1440px] min-h-screen mx-auto ">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white font-monument font-regular uppercase mt-10 text-xl"
      >
        my expertise
      </motion.h2>
      <motion.div
        ref={carousel}
        className="overflow-hidden mt-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="container flex justify-between items-center w-full cursor-grab  flex-nowrap gap-5 lg:gap-10"
        >
          {expertiseData.map((data, index) => (
            <motion.div key={index} variants={childVariants}>
              <Card
                image={data.img}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="w-full h-[75px] flex justify-start items-center px-3 text-2xl border-2 font-monument rounded-xl font-regular text-white mt-5"
      >
        <p className="text-xs lg:text-2xl">DISCOVER ABOUT ME</p>
      </motion.div>
    </div>
  );
};

export default Slider;
