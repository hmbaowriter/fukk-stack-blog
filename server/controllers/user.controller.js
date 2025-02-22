import User from "../models/user.model.js";

// TODO: getUserSavedPosts
const getUserSavedPosts = async (request, response) => {
  const clerkUserId = request.auth.userId;

  if (!clerkUserId) {
    return response.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  response.status(200).json(user.savedPosts);
};

// TODO: savePost
const savePost = async (request, response) => {
  const clerkUserId = request.auth.userId;
  const postId = request.body.postId;

  // console.log(request);

  if (!clerkUserId) return response.status(401).json("Not authenticated");

  const user = await User.findOne({ clerkUserId });

  //  Check if the visited post is saved or not
  const isSaved = user.savedPosts.some((post) => post === postId);

  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      // If the post is not saved, $push adds it.
      $push: { savedPosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      // If the post is already saved, $pull removes it (toggles saved/unsaved).
      $pull: { savedPosts: postId },
    });
  }

  response.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};

export { getUserSavedPosts, savePost };
