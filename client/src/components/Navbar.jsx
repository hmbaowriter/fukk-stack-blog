import React, { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/logo.png" className="size-8" alt="" />
        <span>blog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={clsx(
            "bg-bg1 absolute top-16 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center gap-8 text-lg font-medium transition-all ease-in-out",
            open ? "-right-0" : "-right-[100%]",
          )}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="">
            <button className="bg-btn text-t2 rounded-3xl px-4 py-2">
              Login 👋
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="">
          <button className="bg-btn text-t2 rounded-3xl px-4 py-2">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
