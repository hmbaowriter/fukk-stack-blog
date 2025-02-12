import React from "react";
import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login first!</div>;
  }

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col gap-6 md:h-[calc(100vh-80px)]">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="mb-6 flex flex-1 flex-col gap-6">
        <button className="bg-t2 text-t3 w-max rounded-xl p-2 text-sm shadow-md">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="What do you think today..."
          className="bg-transparent text-4xl font-semibold outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category:</label>
          <select
            name="category"
            className="bg-t2 rounded-xl border-none p-2 shadow-md outline-none"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="bg-t2 rounded-xl border-none p-4 shadow-md outline-none"
        />
        <ReactQuill
          theme="snow"
          className="bg-t2 flex-1 rounded-xl border-none shadow-md outline-none"
        />
        <button className="bg-btn text-t2 hover:bg-btn/90 mt-4 w-36 cursor-pointer rounded-xl p-2 font-medium disabled:cursor-not-allowed">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
