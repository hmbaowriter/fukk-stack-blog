import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (ev) => {
    // if the filter value is not same with current value, change value into current one
    if (searchParams.get("sort") !== ev.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: ev.target.value,
      });
    }
  };

  return (
    <div className="sticky top-8 h-max px-4">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="newest"
            className="border-btn checked:bg-btn bg-t2 size-4 cursor-pointer appearance-none rounded-sm border-[1.5px]"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="border-btn checked:bg-btn bg-t2 size-4 cursor-pointer appearance-none rounded-sm border-[1.5px]"
          />
          Most popular
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="border-btn checked:bg-btn bg-t2 size-4 cursor-pointer appearance-none rounded-sm border-[1.5px]"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="border-btn checked:bg-btn bg-t2 size-4 cursor-pointer appearance-none rounded-sm border-[1.5px]"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=copywriting">
          Copywriting
        </Link>
        <Link className="underline" to="/posts?cat=database">
          Database
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
