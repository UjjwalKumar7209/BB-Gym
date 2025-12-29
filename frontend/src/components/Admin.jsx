import { useState } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [Page, setPage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const a = await fetch("http://localhost:3000/");
    const r = await a.json();
    const { user, pass } = r[0];
    console.log(user, pass);
    if (user == data.name && pass == data.password) {
      setPage(true);
      navigate("/adminPage");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <Navbar />
      <div
        className={`flex justify-between flex-wrap gap-3 h-[87.25vh] bg-black text-white over`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-start w-1/2 gap-3 m-auto pr-5  animate-slide-left-right"
        >
          <div className="">
            <h2 className="font-bold text-2xl text-[#ccfd06]">Admin?</h2>
            <p className="text-gray-500">Log In</p>
          </div>
          <label className="flex flex-col gap-1 w-full">
            <span className="text-md text-white font-medium">Name:</span>
            <input
              defaultValue=""
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              className="outline-none w-full bg-transparent"
              type="text"
            />
            <div className="h-[1.25px] w-full bg-white"></div>
            {errors.name && (
              <span className="text-red-800">{errors.name.message}</span>
            )}
          </label>

          <label className="flex flex-col gap-1 w-full">
            <span className="text-md text-white font-medium">Password:</span>
            <input
              defaultValue=""
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="outline-none w-full bg-transparent"
              type="password"
            />
            <div className="h-[1.25px] w-full bg-white"></div>
            {errors.password && (
              <span className="text-red-800">{errors.password.message}</span>
            )}
          </label>

          <input
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black px-3 py-2 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
