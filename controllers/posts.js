import PostNote from "../models/postNote.js";

export const getPosts = async (req, res) => {
    try {
        const postNotes = await PostNote.find();

        req.status(200).json(postNotes);

    } catch (error) {
        req.status(404).json(error.message);
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    const newPost = new PostNote(post);

    try {
        await newPost.save();
        req.status(201).json(newPost);
    } catch (error) {
        req.status(409).json(error.message);
    }
}