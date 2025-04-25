import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/index/users";
import toast from "react-hot-toast";
import { userActions } from "../../store/reducer/userReducers";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
      toast.success("You're logged in :)");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-4xl text-dark-hard font-sans font-bold text-center mb-6">
            Log In
          </h1>
          <form onSubmit={handleSubmit(submitHandler)} className="animate-jump">
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="block text-semibold text-[#323233] mt-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please fill out this field!",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg border focus:border-[#2c2c2c] ${
                  errors.email ? "border-red-500" : "border-[#2c2c2c]"
                } shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.email?.message && (
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            )}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="block text-semibold text-[#323233] mt-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Password should have more than 3 characters",
                  },
                  required: {
                    value: true,
                    message: "Please fill out this field!",
                  },
                })}
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg border focus:border-[#2c2c2c] ${
                  errors.password ? "border-red-500" : "border-[#2c2c2c]"
                } shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.password?.message && (
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            )}
          </form>
          <Link
            to="/forgot-password"
            className="text-[#6479BD] text-xs font-sams font-bold mt-3 underline"
          >
            Forgot password?
          </Link>
          <div className="group relative w-full mt-6">
            <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-700 animate-tilt" />
            <button
              type="submit"
              disabled={!isValid && !isLoading}
              className="relative w-full px-8 py-4 text-white bg-[#0D2436] rounded-xl font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed z-10"
              onClick={handleSubmit(submitHandler)}
            >
              Login
            </button>
          </div>
          <p className="text-dark-light text-[13px] font-roboto font-light mt-4 ">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#6479BD] text-xs font-sams font-bold mt-3 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
