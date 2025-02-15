import express from "express";

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comments.route.js";
import postRouter from "./routes/post.route.js";
import webhookRouter from "./routes/webhook.route.js";

const app = express();
app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/posts", postRouter);

// error handler (watch here: https://expressjs.com/en/guide/writing-middleware.html)
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    message: error.message || "Something went wrong!!!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running!!!");
});
