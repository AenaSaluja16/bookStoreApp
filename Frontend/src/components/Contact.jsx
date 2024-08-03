import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 rounded-md outline-none py-1 border"
                {...register("name", {
                  required: "This field is required",
                })}
              />
              {errors.name && (
                <span className="text-sm text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 rounded-md outline-none py-1 border"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-full px-3 rounded-md outline-none py-1 border"
                {...register("message", {
                  required: "This field is required",
                })}
              />
              {errors.message && (
                <span className="text-sm text-red-600">
                  {errors.message.message}
                </span>
              )}
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
