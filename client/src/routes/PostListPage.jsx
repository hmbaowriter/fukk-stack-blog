import React, { useState } from "react";
import clsx from "clsx";

import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="bg-btn text-t2 mb-4 rounded-2xl px-4 py-2 text-sm md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={clsx("md:block", open ? "block" : "hidden")}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
