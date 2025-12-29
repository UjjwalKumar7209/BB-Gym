import logo from "../assets/logo.png";
import one from "../assets/10.jpg";
import LearnMore from "./LearnMore";
import OurAmenities from "./OurAmenities";
import ClassStudio from "./ClassStudio";
import SuccessStories from "./SuccessStories";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home lg:h-[100vh] bg-black text-white flex">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="left w-1/2 flex justify-center items-start flex-col pl-5"
        >
          <img
            src={logo}
            alt=""
            className="invert w-20 animate-slide-left-right"
          />
          <p className="text-7xl w-[80%] my-5 animate-slide-left-right max-lg:text-xl max-md:text-sm">
            {"IT'S TIME TO BE HEALTHY AND IN GREAT SHAPE"}
          </p>
          <button className="bg-[#ccfd06] text-black text-lg px-4 py-2 mx-2 my-5 animate-slide-left-right max-lg:text-sm max-md:text-xs">
            <Link to="/reservation">Make Reservation</Link>
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="right w-1/2 flex justify-center items-center overflow-hidden"
        >
          <img src={one} alt="" className="h-3/4 animate-slide-up-down" />
        </motion.div>
      </div>
      <LearnMore />
      <OurAmenities />
      <ClassStudio />
      <SuccessStories />
      <Footer />
    </>
  );
}
