import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import { userLogout } from "../../store/actions/userActions";
import ProfilePictureConst from "../../components/ProfilePictureConst";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
      toast.success("You're logged out 👍");
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
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10 h-[550px]">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePictureConst avatar={profileData?.avatar} />
          <form>
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
                disabled={true}
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
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
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
                disabled={true}
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
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.email?.message && (
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            )}
            {/* <div className="flex flex-row justify-center items-center mb-6 w-full">
              <label
                htmlFor="password"
                className="block font-bold text-[#323233] mt-2 pt-2 px-5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                disabled = {true}
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
                className={`font-semibold placeholder:text-[#5b5c5c] text-dark-hard px-5 py-4 mt-4 outline-none rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
              />
            </div>
            {errors.password?.message && (
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            )} */}
          </form>
          <div className="flex flex-row justify-center items-center gap-x-4 ml-8">
          <button className="px-4 py-2 border border-red-500 text-red-500 hover:transition-all hover:scale-105 hover:duration-150 text-sm rounded-lg text-center hover:bg-red-500 hover:text-white hover:font-bold" onClick={logoutHandler}>Logout</button>
          <button className="px-4 py-2 border border-dark-soft text-dark-soft hover:transition-all hover:scale-105 hover:duration-150 text-sm rounded-lg text-center hover:bg-dark-soft hover:text-white hover:font-bold" onClick={() => navigate('/update_profile')}>Update</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
