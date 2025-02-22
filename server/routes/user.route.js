import express from "express";

import { getUserSavedPosts, savePost } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/saved", getUserSavedPosts);
router.patch("/save", savePost); // PATCH → Updates only specific fields of a resource. PUT → Replaces the entire resource with the new data.

export default router;
