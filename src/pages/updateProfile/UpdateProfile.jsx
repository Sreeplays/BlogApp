import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateUserProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userLogout } from "../../store/actions/userActions";
import { userActions } from "../../store/reducer/userReducers";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateUserProfile({
        token: userState.userInfo.token,
        userData: {name, email, password}
       });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"])
      toast.success(`${userState.userInfo.name}'s profile updated successfully`);
      navigate('/profile')
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10 ">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-row justify-center items-center mb-6 w-full">
              <label
                htmlFor="name"
                className="block font-bold text-[#323233] pt-3 px-5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", {
                  minLength: {
                    value: 3,
                    message: "Atleast three characters are needed",
                  },
                  required: {
                    value: true,
                    message: "Please fill out this field!",
                  },
                })}
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg border focus:border-[#2c2c2c] ${
                    errors.name ? "border-red-500" : "border-[#2c2c2c]"
                  } shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.name?.message && (
              <p className="text-red-500 text-xs">{errors.name?.message}</p>
            )}
            <div className="flex flex-row justify-center items-center mb-6 w-full">
              <label
                htmlFor="email"
                className="block font-bold text-[#323233] mt-2 pt-2 px-5"
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
            <div className="flex flex-row justify-center items-center mb-6 w-full">
              <label
                htmlFor="password"
                className="block font-bold text-[#323233] mt-2 pt-2 px-8 text-sm"
              >
                New Pass (optional)
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your new password (optional)"
                {...register("password")}
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg border focus:border-[#2c2c2c] ${
                    errors.password ? "border-red-500" : "border-[#2c2c2c]"
                  } shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.password?.message && (
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            )}
          </form>
          <div className="group relative w-full mt-6">
            <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-700 animate-tilt" />
            <button
              type="submit"
              disabled={!isValid && !isLoading}
              className="relative w-full px-8 py-4 text-white bg-[#0D2436] rounded-xl font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed z-10"
              onClick={handleSubmit(submitHandler)}
            >
              Update
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UpdateProfile;
