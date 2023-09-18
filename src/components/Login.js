import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="font-poppins">
        <div className="w-screen w-full flex bg-gray-950 rounded bg-orange-500 mx-auto">
          <div className="w-full sm:w-1/2 h-full p-6 mx-auto py-8 text-center border-4 border-gray-300 mt-12 mb-12 rounded-lg mb-8">
            <h3 className="text-xl sm:text-4xl text-white font-bold mb-4">
              Login
            </h3>
            <span className="text-gray-300 text-xl">
              Enter your credentials to log in
            </span>

            <form
              id="login-form"
              className="mt-12 flex flex-col space-y-8 px-4 sm:px-12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Username"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-6 my-4"
              />
              {errors.username?.type === "required" && (
                <p className="text-red-500">Username is required!</p>
              )}

              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="bg-gray-700 outline-none p-2 focus:outline-none rounded text-white text-xl px-4 sm:px-8 py-6 my-8"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required!</p>
              )}

              <button
                type="submit"
                className="bg-teal-600 text-white py-4 px-4 rounded hover:bg-teal-700 text-xl sm:text-2xl rounded-full font-bold mt-12"
              >
                Log In
              </button>
              <p className="text-gray-300 text-xl">
                Not registered?, please{" "}
                <button className="text-green-500 ">
                  <Link> SignUp</Link>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
