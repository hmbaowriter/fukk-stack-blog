import React from "react";
import { format } from "timeago.js";

import Image from "./Image";

const CommentItem = ({ commentItem }) => {
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
      </div>
      <div className="mt-4">
        <p>{commentItem.desc}</p>
      </div>
    </div>
  );
};

export default CommentItem;
