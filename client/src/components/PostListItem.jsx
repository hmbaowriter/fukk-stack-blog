import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

import Image from "./Image";

const PostListItem = ({ post }) => {
  return (
    <div className="mb-12 flex flex-col gap-8 xl:flex-row">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        {post.img ? (
          <Image src={post.img} className="rounded-2xl object-cover" w={735} />
        ) : (
          <Image
            src="blog-post-has-no-thumbnail.png"
            className="rounded-2xl object-cover"
            w={735}
          />
        )}
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to={`/${post.slug}`}
          className="text-2xl font-semibold lg:text-3xl xl:text-4xl"
        >
          {post.title}
        </Link>
        <div className="text-t4 flex items-center gap-2 text-sm">
          <span>Written by</span>
          <Link className="text-btn">{post.user.username}</Link>
          <span>on</span>
          <Link className="text-btn">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="text-btn text-sm underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
