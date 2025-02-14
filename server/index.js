import express from "express";

import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comments.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running!!!");
});
