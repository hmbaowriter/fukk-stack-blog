import React from "react";
import { Link } from "react-router-dom";

import Image from "./Image";

const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      {/* First post */}
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w={895}
        />

        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-btn lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        {/* title */}
        <Link
          to="/test"
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          What Is WordPress? Explained for Beginners
        </Link>
      </div>

      {/* Other posts */}
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {/* second */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image
              src="featured2.jpeg"
              className="size-full rounded-3xl object-cover"
              w={298}
            />
          </div>
          {/* details + title */}
          <div className="w-2/3">
            {/* details */}
            <div className="text-small mb-4 flex items-center gap-4 lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-btn">Web Design</Link>
              <span className="">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg lg:text-xl xl:text-2xl"
            >
              A day in life as a designer
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image
              src="featured3.jpeg"
              className="size-full rounded-3xl object-cover"
              w={298}
            />
          </div>
          {/* details + title */}
          <div className="w-2/3">
            {/* details */}
            <div className="text-small mb-4 flex items-center gap-4 lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-btn">Web Design</Link>
              <span className="">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg lg:text-xl xl:text-2xl"
            >
              A day in life as a designer
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image
              src="featured4.jpeg"
              className="size-full rounded-3xl object-cover"
              w={298}
            />
          </div>
          {/* details + title */}
          <div className="w-2/3">
            {/* details */}
            <div className="text-small mb-4 flex items-center gap-4 lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-btn">Web Design</Link>
              <span className="">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg lg:text-xl xl:text-2xl"
            >
              A day in life as a designer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
