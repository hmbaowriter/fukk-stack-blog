import express from "express";

const router = express.Router();

router.get("/userTest", (request, response) => {
  response.status(200).send("User route");
});

export default router;
