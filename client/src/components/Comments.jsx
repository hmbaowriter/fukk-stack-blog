import React from "react";
import CommentItem from "./CommentItem";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-t3 text-xl underline">Comments</h1>
      <div className="flex w-full items-center justify-between gap-8">
        <textarea
          placeholder="Write a comment..."
          className="w-full rounded-xl p-4"
        ></textarea>
        <button className="bg-btn text-t2 rounded-xl px-4 py-3 font-medium">
          Send
        </button>
      </div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
};

export default Comments;
