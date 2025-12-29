import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function SuccessStories() {
  return (
    <div className="home bg-black text-white flex justify-center items-start flex-col lg:gap-10 px-5 py-10 overflow-hidden">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-3xl font-bold max-md:text-xl max-lg:mb-10"
      >
        SUCCESS STORIES
      </motion.h2>
      <div className="success flex justify-center items-center max-lg:flex-col gap-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 max-lg:w-3/4 flex justify-center items-start flex-col gap-3 max-lg:hidden"
        >
          <img src={one} alt="" className="lg:w-3/4 grayscale" />
          <p className="text-white lg:h-[144px] lg:w-3/4">
            "Boost your product and service's crediability by adding
            testimonials from your clients. People love recommendations so
            feedback from others who've tried it is invaluable."
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 max-lg:w-3/4 flex justify-center items-start flex-col gap-3"
        >
          <img src={two} alt="" className="lg:w-3/4 grayscale" />
          <p className="text-white lg:h-[144px] lg:w-3/4">
            "Boost your product and service's crediability by adding
            testimonials from your clients. People love recommendations so
            feedback from others who've tried it is invaluable."
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 max-lg:w-3/4 flex justify-center items-start flex-col gap-3 max-lg:hidden"
        >
          <img src={three} alt="" className="lg:w-3/4 grayscale" />
          <p className="text-white lg:h-[144px] lg:w-3/4">
            "Boost your product and service's crediability by adding
            testimonials from your clients. People love recommendations so
            feedback from others who've tried it is invaluable."
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 max-lg:w-3/4 flex justify-center items-start flex-col gap-3"
        >
          <img src={four} alt="" className="lg:w-3/4 grayscale" />
          <p className="text-white lg:h-[144px] lg:w-3/4">
            "Boost your product and service's crediability by adding
            testimonials from your clients. People love recommendations so
            feedback from others who've tried it is invaluable."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
