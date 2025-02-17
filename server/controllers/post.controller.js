import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// TODO: Get posts list
const getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json("");
  }
};

// TODO: get a single post by slug
const getPost = async (request, response) => {
  const post = await Post.findOne({ slug: req.params.slug });
  response.status(200).json(post);
};

// TODO: create new post
const createPost = async (request, response) => {
  try {
    const clerkUserId = request.auth.userId;

    if (!clerkUserId) return response.status(401).json("Not authenticated!!!");

    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return response.status(404).json("User not found!!!");
    }

    let slug = request.body.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes

    let baseSlug = slug; // Store original slug for numbering
    let existingPost = await Post.findOne({ slug });
    let counter = 2;

    while (existingPost) {
      slug = `${baseSlug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...request.body });

    const post = await newPost.save();

    console.log(post)

    response.status(201).json({
      msg: "Post has been created!!!",
      post: post,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
};

// TODO: delete a post by ID
const deletePost = async (request, response) => {
  const clerkUserId = request.auth.userId;

  if (!clerkUserId) return response.status(401).json("Not authenticated!!!");

  const user = await User.findOne({ clerkUserId });

  const post = await Post.findByIdAndDelete({
    _id: request.params.id,
    user: user._id,
  });

  response.status(200).json("Post has been deleted!!!");
};

export { getPosts, getPost, createPost, deletePost };
