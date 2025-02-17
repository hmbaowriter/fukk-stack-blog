import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import PostListItem from "./PostListItem";

const fetchPosts = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  // console.log(response);
  return response.data;
};

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col gap-12">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
