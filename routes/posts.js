import express from "express";

import { getPosts, createPost, getPost, updatePost, deletePost, likePost  } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/getOne', getPost);
router.patch('/updateOne', updatePost);
router.delete('/delete', deletePost);
router.patch('/like', likePost);

export default router;