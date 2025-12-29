import React from "react";
import logo from "../assets/logo.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#ccfd06] p-10 flex flex-col justify-center items-start lg:h-[70vh]">
      <motion.img
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        src={logo}
        alt=""
        className="w-24"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4 className="text-4xl font-medium mb-4">North Fortberry</h4>
            <p>123 Anywhere St.</p>
            <p className="mb-4">Any City, ST 12345</p>
            <p>(123) 456-7890</p>
            <p>hello@bbgym.com</p>
            <p>@bbgym</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4 className="text-4xl font-medium mb-4">Club Hours</h4>
            <p>Tuesday to Saturday</p>
            <p className="mb-4">6:00 am to 10:00 pm</p>
            <p>Sunday</p>
            <p>8:00 am to 9:00 pm</p>
            <p>Closed on Mondays</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4 className="text-4xl font-medium mb-4">Stay Connected</h4>
            <ul className="flex space-x-4">
              <li>
                <span className="text-black">@instagram</span>
              </li>
              <li>
                <span className="text-black">@twitter</span>
              </li>
              <li>
                <span className="text-black">@facebook</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
