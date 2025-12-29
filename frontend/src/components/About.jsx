import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import seven from "../assets/7.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container flex lg:h-[87.25vh] text-white">
        <div className="left h-full bg-black w-3/4 max-lg:w-[100vw] flex gap-5 p-10 flex-wrap">
          <img
            src={seven}
            alt=""
            className="lg:w-1/4 rounded-xl animate-slide-left-right"
          />
          <div className="flex flex-col gap-3 lg:w-1/2 justify-center items-start">
            <span className="text-gray-600 animate-slide-up-down">
              WHO ARE WE?
            </span>
            <div>
              <h2 className="font-semibold text-2xl animate-slide-up-down">
                BB GYM
              </h2>
              <h3 className="text-xl animate-slide-up-down">
                LACK OF MOTIVATION?
              </h3>
            </div>
            <h3 className="text-xl animate-slide-up-down">COME JOIN US...</h3>
            <p className="text-gray-500 animate-slide-up-down">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              optio temporibus sint officiis cum est a veniam iusto laboriosam
              autem rem eligendi sit nisi magnam adipisci facere suscipit. Nam
              vel excepturi sequi ipsam dolorem.
            </p>
            <button className="bg-[#ccfd06] text-black text-lg px-4 py-1 mx-2 my-5 animate-slide-up-down max-lg:text-sm max-md:text-xs">
              <Link to="/reservation">Register Now</Link>
            </button>
          </div>
        </div>
        <div className="right w-1/4 bg-[#ccfd06] flex justify-start items-end px-10 pb-10 max-lg:hidden">
          <span className="font-medium text-3xl w-1/2 text-black animate-slide-up-down">
            SECTION ABOUT
          </span>
        </div>
      </div>
    </>
  );
}
