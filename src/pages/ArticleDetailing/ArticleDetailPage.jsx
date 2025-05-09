import React, { useEffect, useMemo, useState } from "react";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";
import Loader from "../../components/Loader.jsx";
import MainLayout from "../../components/MainLayout.jsx";
import BreadCrumbs from "../../components/BreadCrumbs.jsx";
import { BiSolidArrowFromRight } from "react-icons/bi";
import images from "../../constants/images.js";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./SuggestedPosts/suggestedPosts.jsx";
import CommentsContainer from "../../components/Comments-Comp/commentsContainer.jsx";
import SocialButtons from "../../components/SocialButtons.jsx";
import { useQuery } from "@tanstack/react-query";
import { getSinglePosts } from "../../services/index/posts.js";
import stables from "../../constants/stables.js";
import { generateHTML } from "@tiptap/html";
import ErrorHandler from "../../components/ErrorHandler.jsx";
import { useSelector } from "react-redux";

function history_back() {
  window.history.back();
}
const postsData = [
  {
    _id: 1,
    title: "Future Of Work",
    image: images.postImage,
    createdAt: "2024-06-25",
  },
  {
    _id: 1,
    title: "Future Of Work",
    image: images.postImage2,
    createdAt: "2024-06-25",
  },
  {
    _id: 1,
    title: "Future Of Work",
    image: images.postImage,
    createdAt: "2024-06-25",
  },
  {
    _id: 1,
    title: "Future Of Work",
    image: images.postImage2,
    createdAt: "2024-06-25",
  },
];
const tagsData = ["Technical", "Development", "Ai Technologies", "Ai Growth"];
// Actual code for Articles page
const ArticleDetailPage = () => {
  const [body, setBody] = useState(null);
  const userState = useSelector((state) => state.user)
  const { slug } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePosts({ slug }),
    queryKey: ["blog", slug],
  });

  useEffect(() => {
    if (!data?.body || !data.body.type || !data.body.content) return;

    const html = generateHTML(data?.body, [
      Bold,
      Italic,
      Text,
      Paragraph,
      Document,
    ]);
    const parsedHtml = parse(html);
    setBody(parsedHtml);
    console.log("HTML:", html);
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorHandler message="Could'nt fetch data for this post :("/>
      ) : (
        <MainLayout>
          <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 items-center lg:flex-row lg:items-start lg:gap-x-3">
            <article className="flex-1">
              <button>
                <BiSolidArrowFromRight
                  onClick={history_back}
                  className="w-6 h-6 text-opacity-80 text-gray-800 mb-4"
                />
              </button>
              <img
                className="rounded-2xl w-full lg:w-1/2 border border-transparent shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                src={
                  data?.photo
                    ? stables.POST_PIC_DEFAULT_URL + data?.photo
                    : images.sampleImage
                }
                alt={data?.title}
              />
              <div className="mt-4 flex ">
                {data?.categories.map((category) => (
                  <Link
                    to={`/blog?category=${category.name}`}
                    className="text-primary font-roboto text-sm inline-block"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl font-bold font-roboto mt-2 text-dark-hard">
                {data?.title}
              </h1>
              <div className="mt-4 text-dark-soft mb-10">
                <p className="leading-7 prose prose-sm md:prose-base">{body}</p>
              </div>
              <CommentsContainer loggedUserId={userState?.userInfo?._id} />
            </article>
            <div>
              <SuggestedPosts
                header="Latest Articles"
                posts={postsData}
                tags={tagsData}
              />
              <div>
                <SocialButtons
                  url={encodeURI("https://github.com/Sreeplays")}
                  title={encodeURIComponent("Sreeplays")}
                />
              </div>
            </div>
          </section>
        </MainLayout>
      )}
    </>
  );
};

export default ArticleDetailPage;
