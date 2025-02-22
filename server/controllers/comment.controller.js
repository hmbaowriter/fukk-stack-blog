import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

// TODO: getPostComments
const getPostComments = async (request, response) => {
  const comments = await Comment.find({ post: request.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  response.json(comments);
};

// TODO: addComment
const addComment = async (request, response) => {
  console.log(request.body);
  const clerkUserId = request.auth.userId;
  const postId = request.params.postId;

  if (!clerkUserId) {
    return response.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const newComment = new Comment({
    ...request.body,
    user: user._id,
    post: postId,
  });

  const savedComment = await newComment.save();

  response.status(201).json(savedComment);
};

// TODO: deleteComment
const deleteComment = async (request, response) => {
  const clerkUserId = request.auth.userId;
  const id = request.params.id;

  if (!clerkUserId) {
    return response.status(401).json("Not authenticated");
  }

  const user = User.findOne({ clerkUserId });

  const deletedComment = await Comment.findByIdAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deletedComment) {
    return response
      .status(403)
      .json("You can't delete comments of other people!");
  }

  response.status(200).json("Comment deleted!!!");
};

export { getPostComments, addComment, deleteComment };
