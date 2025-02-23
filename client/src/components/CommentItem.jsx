import React from "react";
import { format } from "timeago.js";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

import Image from "./Image";

const CommentItem = ({ commentItem, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${commentItem._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted!!!");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return (
    <div className="bg-t2 mb-3 rounded-xl p-4">
      <div className="flex items-center gap-4">
        {commentItem.user.img ? (
          <img
            src={commentItem.user.img}
            className="size-10 rounded-full object-cover"
            w={40}
          />
        ) : (
          <Image
            src="no-avatar.jpg"
            className="size-10 rounded-full object-cover"
            w={40}
          />
        )}
        <span className="font-medium">{commentItem.user.username}</span>
        <span className="text-t3 text-sm">{format(commentItem.createdAt)}</span>
        {user &&
          (commentItem.user.username === user.username || role === "admin") && (
            <span
              className="cursor-pointer text-xs text-red-300"
              onClick={() => mutation.mutate()}
            >
              Delete
              {mutation.isPending && <span>(in progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{commentItem.desc}</p>
      </div>
    </div>
  );
};

export default CommentItem;
