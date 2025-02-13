import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="mb-12 flex flex-col gap-8 xl:flex-row">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w={735}
        />
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to="/test"
          className="text-2xl font-semibold lg:text-3xl xl:text-4xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          sapiente.
        </Link>
        <div className="text-t4 flex items-center gap-2 text-sm">
          <span>Written by</span>
          <Link className="text-btn">John Doe</Link>
          <span>on</span>
          <Link className="text-btn">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quam
          neque consequatur eligendi, minima non, at esse sapiente a distinctio
          mollitia excepturi, enim nobis rem quis? Nemo eligendi nisi fugit?
        </p>
        <Link to="/test" className="text-btn text-sm underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
