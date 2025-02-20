import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${slug}`,
  );
  console.log(response.data);
  return response.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "Post not found!!!";

  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl">
            {data.title}
          </h1>
          <div className="text-t4 flex items-center gap-2">
            <span>Written by</span>
            <Link className="text-btn">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-btn">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-t3 font-medium">{data.desc}</p>
        </div>
        <div className="hidden w-2/5 lg:block">
          {data.img ? (
            <Image src={data.img} w={600} className="rounded-2xl" />
          ) : (
            <Image
              src="blog-post-has-no-thumbnail.png"
              w={600}
              className="rounded-2xl"
            />
          )}
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-6 md:flex-row lg:gap-8 xl:gap-12">
        {/* text */}
        <div
          className="flex flex-col gap-6 text-justify md:w-[3.5/5] lg:w-4/5 lg:text-lg"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {/* menu */}
        <div className="sticky top-8 h-max md:w-[1.5/5] lg:w-1/5">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img ? (
                <img
                  src={data.user.img}
                  className="size-12 rounded-full object-cover"
                  w={48}
                  h={48}
                />
              ) : (
                <Image
                  src="no-avatar.jpg"
                  className="size-12 rounded-full object-cover"
                  w={48}
                  h={48}
                />
              )}
              <Link>{data.user.username}</Link>
            </div>
            <p className="text-t3 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/posts?cat=web-design">
              Web Design
            </Link>
            <Link className="underline" to="/posts?cat=email-marketing">
              Email Marketing
            </Link>
            <Link className="underline" to="/posts?cat=video-editing">
              Video Editing
            </Link>
            <Link className="underline" to="/posts?cat=database">
              Database
            </Link>
            <Link className="underline" to="/posts?cat=copywriting">
              Copywriting
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
