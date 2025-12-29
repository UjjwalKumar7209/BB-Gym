import React from "react";
import { FaBicycle } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

export default function OurAmenities() {
  return (
    <div className="our-amenities bg-black text-white p-10 flex flex-col gap-10">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-6xl text-end max-lg:text-5xl max-md:text-3xl"
      >
        Our Amenities
      </motion.h2>
      <div className="amenities m-3 flex justify-evenly gap-10 max-lg:flex-col">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 flex justify-center items-start flex-col gap-3"
        >
          <FaHeartbeat className="text-[#ccfd06] text-2xl font-bold" />
          <h2 className="text-[#ccfd06] text-2xl font-bold">CARDIO ZONE</h2>
          <p className="text-gray-500 lg:h-[144px]">
            To create a stunning presentation, it's best to simplify your
            thoughts.Start with an outline of topics and identify highlights,
            whih can be applied to whatever subject you plan on discussing.
          </p>
          <button className="bg-[#ccfd06] text-black p-2">
            {" "}
            <Link to="/about">LEARN MORE</Link>
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 flex justify-center items-start flex-col gap-3"
        >
          <FaBicycle className="text-[#ccfd06] text-2xl font-bold" />
          <h2 className="text-[#ccfd06] text-2xl font-bold">CYCLING STUDIO</h2>
          <p className="text-gray-500 lg:h-[144px]">
            Share your product or service offering here. Give your prospective
            clients an overview of why they should use it.
          </p>
          <button className="bg-[#ccfd06] text-black p-2">
            {" "}
            <Link to="/about">LEARN MORE</Link>
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 flex justify-center items-start flex-col gap-3"
        >
          <GiWeightLiftingUp className="text-[#ccfd06] text-2xl font-bold" />
          <h2 className="text-[#ccfd06] text-2xl font-bold">WEIGHT ZONE</h2>
          <p className="text-gray-500 lg:h-[144px]">
            Share your product or serve offering here. Give your prospective
            clients an overview of why they should use it. Differentiate it from
            the others listed on this page.
          </p>
          <button className="bg-[#ccfd06] text-black p-2">
            {" "}
            <Link to="/about">LEARN MORE</Link>
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card lg:w-1/4 flex justify-center items-start flex-col gap-3"
        >
          <GiRunningShoe className="text-[#ccfd06] text-2xl font-bold" />
          <h2 className="text-[#ccfd06] text-2xl font-bold">CLASS STUDIO</h2>
          <p className="text-gray-500 lg:h-[144px]">
            Share your product or service offering here. Differentiate it from
            the otehrs listed on this page
          </p>
          <button className="bg-[#ccfd06] text-black p-2">
            {" "}
            <Link to="/admin"> LEARN MORE </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
