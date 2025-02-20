import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { IKImage } from "imagekitio-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        {/* <Image src="logo.png" alt="Logo" w={32} h={32} /> */}
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          path="logo.png"
          loading="lazy"
          lqip={{ active: true, quality: 20 }}
          alt="Logo"
          width={36}
          height={36}
        />
        <span className="text-t1">blog</span>
      </Link>
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
            "bg-bg1 text-t1 absolute top-16 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center gap-8 text-lg font-medium transition-all ease-in-out md:h-[calc(100vh-80px)]",
            open ? "-right-0" : "-right-[100%]",
          )}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="bg-btn text-t2 rounded-3xl px-4 py-2">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="text-t1 hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-btn text-t2 cursor-pointer rounded-3xl px-4 py-2">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
