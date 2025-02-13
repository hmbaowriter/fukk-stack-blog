import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="bg-t2 hidden items-center justify-center gap-8 rounded-3xl p-4 shadow-lg md:flex xl:rounded-full">
      {/* links */}
      <div className="flex flex-1 flex-wrap items-center gap-4 md:justify-start lg:justify-between">
        <Link to="/posts" className="bg-btn text-t2 rounded-full px-4 py-2">
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-btn/5 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=email-marketing"
          className="hover:bg-btn/5 rounded-full px-4 py-2"
        >
          Email Marketing
        </Link>
        <Link
          to="/posts?cat=video-editing"
          className="hover:bg-btn/5 rounded-full px-4 py-2"
        >
          Video Editing
        </Link>
        <Link
          to="/posts?cat=copywriting"
          className="hover:bg-btn/5 rounded-full px-4 py-2"
        >
          Copywriting
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>

      {/* search */}
      <div className="bg-bg2 flex items-center gap-2 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="border-none bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategories;
