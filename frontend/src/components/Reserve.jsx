import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const reserve = () => {
  const [Submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const a = await fetch("http://localhost:3000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let r = await a.text();
    setTimeout(() => {
      navigate("/");
    }, 5000);
    setSubmit(true);
    console.log(data);
    reset();
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
          {Submit && (
            <div className="text-white bg-blue-500 px-2 py-1 rounded-lg">
              Your registration form has been submitted. You will be redirected
              to Home page within a second...
            </div>
          )}
          <div className="">
            <h2 className="font-bold text-2xl text-[#ccfd06]">
              FILL FOR RESERVATION
            </h2>
            <p className="text-gray-500">Let's get started</p>
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
            <span className="text-md text-white font-medium">Age:</span>
            <input
              defaultValue=""
              {...register("age", {
                required: {
                  value: true,
                  message: "Age is required",
                },
              })}
              className="outline-none w-full bg-transparent"
              type="number"
            />
            <div className="h-[1.25px] w-full bg-white"></div>
            {errors.age && (
              <span className="text-red-800">{errors.age.message}</span>
            )}
          </label>
          <label className="flex flex-col gap-1 w-full">
            <span className="text-md text-white font-medium">Email:</span>
            <input
              defaultValue=""
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email is invalid",
                },
              })}
              className="outline-none w-full bg-transparent"
              type="email"
            />
            <div className="h-[1.25px] w-full bg-white"></div>
            {errors.email && (
              <span className="text-red-800">{errors.email.message}</span>
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
};

export default reserve;
