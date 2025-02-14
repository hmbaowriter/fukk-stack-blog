import express from "express";

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comments.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/posts", postRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running!!!");
});
