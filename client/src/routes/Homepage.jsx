import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>•</span>
        <span className="text-t1">Blog and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-t1 text-2xl font-bold md:text-5xl lg:text-6xl">
            Write your thoughts,
            <br />
            turn traffic for your skills
          </h1>
          <p className="text-md text-t1 mt-2 md:mt-8 md:text-xl">
            This is your public journal. Use your brain for creativity, not for
            memorization.
          </p>
        </div>
        {/* animated button */}
        <Link to={"/write"} className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="animatedButton animate-spin text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your stories •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your ideas •
              </textPath>
            </text>
          </svg>
          <button className="bg-btn absolute top-0 right-0 bottom-0 left-0 m-auto flex size-20 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturedPost />
      
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;
