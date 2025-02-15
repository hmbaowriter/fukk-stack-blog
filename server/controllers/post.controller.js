import Post from "../models/post.model.js";

const getPosts = async (request, response) => {
  const posts = await Post.find();
  response.status(200).json(posts);
};

const getPost = async (request, response) => {
  const post = await Post.findOne({ slug: req.params.slug });
  response.status(200).json(post);
};

const createPost = async (request, response) => {
  const newPost = new Post(request.body);
  const post = await newPost.save();

  response.status(201).json({
    msg: "Post has been created!!!",
    post: post,
  });
};

const deletePost = async (request, response) => {
  const post = await Post.findByIdAndDelete(request.id);
  response.status(200).json("Post has been deleted!!!");
};

export { getPosts, getPost, createPost, deletePost };
