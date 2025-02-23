import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

import CommentItem from "./CommentItem";

const fetchComments = async (postId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`,
  );
  return response.data;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    },
    onSuccess: () => {
      toast.success("Comment added!");
      // Refresh the query ["comments", postId] to show new comment
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      console.log(error.response.message);
      toast.error(error.response.message);
    },
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="mb-12 flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-t3 text-xl underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-between gap-8"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full rounded-xl border-none bg-white p-4 outline-none"
        />
        <button className="bg-btn text-t2 cursor-pointer rounded-xl px-4 py-3 font-medium">
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!!!"
      ) : (
        <>
          {mutation.isPending && (
            <CommentItem
              commentItem={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {data.map((comment) => (
            <CommentItem
              key={comment._id}
              commentItem={comment}
              postId={postId}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
