import React from "react";
import Articles from "../../../components/Articles";
import { BiArrowFromLeft } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/index/posts";
import toast from "react-hot-toast";
import ArticleDetailSkeleton from "../../../components/ArticleDetailSkeleton";
import ErrorHandler from "../../../components/ErrorHandler";
import Loader from "../../../components/Loader";
const ArticleCard = () => {
  const {
    data,
    isLoading: postLoading,
    isError: postError,
  } = useQuery({
    queryFn: () => getAllPosts(3),
    queryKey: ["posts", {limit: 3}],
    onError: (error) => {
      toast.error(error);
      console.log(error);
    },
  });
  return (
    <div className="flex flex-col container mx-auto  py-10">
      <h2 className="text-4xl text-dark-hard font-extrabold font-roboto pl-0.5 md:pl-4 pb-6 text-center md:text-left">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-3 lg:gap-x-5 gap-x-2 gap-y-5 px-5 pb-10 ">
        {/* ArticleDetailSkeleton is the loading state for component Article */}
        {postLoading
          ? [...Array(3)].map((item, index) => (
               <ArticleDetailSkeleton key={index} />
          ))
          : postError ? (
            <ErrorHandler message="Could not load posts" />
          ):  data.map((post) => (
              <Articles key={post._id} post={post} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            ))}
      </div>
      <button className="mx-auto">
        <span className="flex justify-center items-center text-primary border-primary py-2 px-4 border-2 text-center rounded-md">
          More Articles{" "}
          <BiArrowFromLeft className="w-4 h-4 text-primary flex mx-2 mt-0.5" />
        </span>
      </button>
      <div className="mt-2 gap-x-4 flex items-start"></div>
    </div>
  );
};

export default ArticleCard;
