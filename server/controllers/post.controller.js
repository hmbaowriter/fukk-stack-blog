import ImageKit from "imagekit";

import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// TODO: Get posts list
const getPosts = async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 2;

  const query = {};

  // console.log(request.query);

  const cat = request.query.cat;
  const author = request.query.author;
  const searchQuery = request.query.search;
  const sortQuery = request.query.sort;

  if (cat) {
    query.category = cat;
  }

  if (searchQuery) {
    // If searchQuery exists, perform a case-insensitive search on the "title" field
    // using a regular expression to match titles that contain the searchQuery string.
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");

    if (!user) {
      return res.status(404).json("No post found!");
    }

    query.user = user._id;
  }

  let sortObj = { createdAt: -1 };

  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;
      case "oldest":
        sortObj = { createdAt: 1 };
        break;
      case "popular":
        sortObj = { visit: -1 };
        break;
      case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;
      default:
        break;
    }
  }

  const posts = await Post.find(query)
    .populate("user", "username img")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;

  response.status(200).json({ posts, hasMore });
};

// TODO: get a single post by slug
const getPost = async (request, response) => {
  const post = await Post.findOne({ slug: request.params.slug }).populate(
    "user",
    "username img"
  );
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

    console.log(post);

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

  const role = request.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Post.findByIdAndDelete(request.params.id);
    return response.status(200).json("Post has been deleted!!!");
  }

  const user = await User.findOne({ clerkUserId });

  const post = await Post.findByIdAndDelete({
    _id: request.params.id,
    user: user._id,
  });

  response.status(200).json("Post has been deleted!!!");
};

// TODO: Upload file authentication
const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

const uploadAuth = async (request, response) => {
  const result = imagekit.getAuthenticationParameters();
  response.send(result);
};

export { getPosts, getPost, createPost, deletePost, uploadAuth };
