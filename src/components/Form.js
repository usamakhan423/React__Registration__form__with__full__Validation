import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="font-poppins">
        <div className="w-screen h-full flex bg-gray-950 rounded bg-orange-500 mx-auto">
          <div className="w-full sm:w-1/2 p-6 mx-auto py-8 text-center mt-12 mb-12 rounded-lg border-2 border-gray-400">
            <h3 className="text-xl sm:text-4xl text-white font-bold mb-2">
              Sign In
            </h3>
            <span className="text-gray-300 text-lg">
              Register and enjoy the service
            </span>

            <form
              id="form"
              className="mt-8 flex flex-col space-y-8 px-4 sm:px-12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("username", { maxLength: 12, required: true })}
                placeholder="username"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-4"
              />
              {errors.username?.type === "maxLength" &&
                alert("Username length exceeded!")}
              {errors.username?.type === "required" &&
                alert("Username required!")}
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-4"
              />
              <input
                type="password"
                {...register("cpassword")}
                placeholder="confirm password"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-4"
              />
              <input
                type="text"
                {...register("mob", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
                placeholder="mobile number"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-4"
              />
              {errors.mob?.type === "required" &&
                alert("Mobile number is required!")}
              {errors.mob?.type === "minLength" &&
                alert("Please provide the required length!")}
              {errors.mob?.type === "maxLength" &&
                alert("Mobile length exceeded!")}
              <button className="bg-teal-600 text-white py-4 px-4 rounded hover:bg-teal-700 text-xl sm:text-2xl rounded-full font-bold">
                Sign Up
              </button>
              <p className="text-gray-400">
                Already registered?, please{" "}
                <a href="/login" className="text-green-500">
                  <Link to="/login">Login</Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
