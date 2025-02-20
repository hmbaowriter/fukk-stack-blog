import React from "react";

import Image from "./Image";

const CommentItem = () => {
  return (
    <div className="bg-t2 mb-8 rounded-xl p-4">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="size-10 rounded-full object-cover"
          w={40}
        />
        <span className="text-t3 text-sm">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione est
          impedit eligendi ad eos maiores totam. Minus deleniti dolorem
          architecto.
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
