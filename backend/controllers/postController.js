const asyncHandler = require('express-async-handler')

// ** FOR DATABASE **
const Post = require('../models/postModel')

// @desc Get all posts
// @route GET /api/getAllPosts
// @access Private

const getAllPosts = asyncHandler(async (req, res) => {
    
    const posts = await Post.find()
    res.status(200).json(posts)
})

// @desc Get a post
// @route PUT /api/posts/post
// @access Private

const getPost = asyncHandler(async( req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post){
        res.status(400)
        throw new Error('Post not found')
    }

    // check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure logged in user matches post to user
    if(post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    res.status(200).json(post)
})

// @desc Get user posts
// @route GET /api/posts
// @access Private

const getPosts = asyncHandler(async (req, res) => {
    
    const posts = await Post.find({ user: req.user.id })
    res.status(200).json(posts)
})

// @desc Create a post
// @route POST /api/posts
// @access Private

const setPost = asyncHandler(async (req, res) => {
    // Proper method with middleware
    // ** req.body.text pertains to specific post **
    // ** If a Post has no text propety, use a different property within the Post object **
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field') // Utilizes new error middleware created
    }


    // MongoDB request
    const post = await Post.create({
        body: req.body.body,
        title: req.body.title,
        mood: req.body.mood,
        color: req.body.color,
        user: req.user.id
    })
    res.status(200).json(post)
})

// @desc Update an item
// @route PUT /api/posts/:id
// @access Private

const updatePost = asyncHandler(async( req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post){
        res.status(400)
        throw new Error('Post not found')
    }

    // check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure logged in user matches post to user
    if(post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedPost)
})

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Private

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error('Post not found')
    } 

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Post.findByIdAndDelete(req.params.id)

    res.status(200).json({ 
        message: 'Post Deleted',
        id: req.params.id 
    })
})

module.exports = {
    getAllPosts,
    getPosts,
    getPost,
    setPost,
    updatePost,
    deletePost
}