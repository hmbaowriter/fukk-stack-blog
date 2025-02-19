import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setContent((prev) => prev + `<p><img src="${img.url}" /></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setContent(
        (prev) =>
          prev + `<p><iframe class="ql-video" src="${video.url}" /></p>`,
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (response) => {
      toast.success("Post has been created!!!");
      navigate(`/${response.data.post.slug}`);
      // console.log(response.data)
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login first!</div>;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const data = {
      img: coverImg.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: content,
    };
    mutation.mutate(data);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col gap-6 md:h-[calc(100vh-80px)]">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-1 flex-col gap-6">
        <Upload type="image" setProgress={setProgress} setData={setCoverImg}>
          <button className="bg-t2 text-t3 w-max rounded-xl p-2 text-sm shadow-md">
            Add a cover image
          </button>
        </Upload>
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
        <div className="flex">
          <div className="mr-2 flex flex-col gap-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="bg-t2 flex-1 rounded-xl border-none shadow-md outline-none"
            value={content}
            onChange={setContent}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-btn text-t2 hover:bg-btn/90 disabled:bg-btn/50 mt-4 w-36 cursor-pointer rounded-xl p-2 font-medium disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading" : "Send"}
        </button>
        {"Progress: " + progress}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  );
};

export default Write;
