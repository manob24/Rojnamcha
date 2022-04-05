import express from 'express';
import mongoose from 'mongoose';

import PostNote from "../models/postNote.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postNotes = await PostNote.find();

        res.status(200).json(postNotes);

    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    const newPost = new PostNote(post);

    try {
        await newPost.save();
        res.send(newPost);
    } catch (error) {
        res.status(409).json(error.message);
    }
}



export const getPost = async (req, res) => { 
    const { id } = req.query;
    try {
        const post = await PostNote.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.query;
    const { title, message } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { message, title, _id: id };

    await PostNote.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostNote.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostNote.findById(id);

    const updatedPost = await PostNote.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
export default router;