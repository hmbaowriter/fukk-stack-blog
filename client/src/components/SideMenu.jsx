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
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
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
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("general")}
        >
          All
        </span>
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("web-design")}
        >
          Web Design
        </span>
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("development")}
        >
          Development
        </span>
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("databases")}
        >
          Databases
        </span>
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("seo")}
        >
          Search Engines
        </span>
        <span
          className="cursor-pointer underline"
          onClick={() => handleCategoryChange("marketing")}
        >
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
