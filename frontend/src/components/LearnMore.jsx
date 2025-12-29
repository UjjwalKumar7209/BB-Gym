import eight from "../assets/8.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function LearnMore() {
  return (
    <>
      <div className="learn-more lg:h-[90vh] bg-[#ccfd06] text-black flex justify-center items-center py-10 px-5 gap-10 overflow-hidden">
        <motion.img
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          src={eight}
          alt=""
          className="max-lg:w-1/2 w-1/3"
        />
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl max-lg:text-3xl max-md:text-xs w-1/2"
        >
          BB GYM IS ON A MISSON TO HELP YOU ACHIEVE YOUR FITNESS GOALS AND LIVE
          A HEALTHY LIFESTYLE
        </motion.p>
      </div>
    </>
  );
}
