import Post from "../models/post.model.js";

const increaseVisit = async (request, response, next) => {
  const slug = request.params.slug;

  await Post.findOneAndUpdate({ slug }, { $inc: { visit: 1 } });

  next();
};

export { increaseVisit };
