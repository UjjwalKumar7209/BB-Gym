import six from "../assets/6.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function ClassStudio() {
  return (
    <div className="home bg-white text-black flex justify-center items-center py-14">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="left w-1/2 flex flex-col justify-center items-center gap-5 max-md:w-full"
      >
        <h2 className="text-6xl w-1/2 max-lg:text-5xl max-md:text-3xl">
          CLASS STUDIO
        </h2>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-gray-700 w-1/2 font-medium max-lg:text-xs">
            Use this space to highlight your most popular services. You can also
            use this for your flagship products
          </p>
          <button className="bg-black text-white font-semibold text-md p-2">
            <Link to="/reservation">TRY OUR CLASS</Link>
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="right flex justify-center items-center w-1/2 max-md:hidden"
      >
        <video src={six} autoPlay loop muted className="w-3/4"></video>
      </motion.div>
    </div>
  );
}
