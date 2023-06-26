import axios from 'axios'
const API_URL = 'api/posts/' // Change

// Display User Posts
const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL, config)

    if (response.data) {
        return response.data
    }
}

// Create Post
const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, postData, config)

    if (response.data) {
        return response.data
    }
}

// Delete Post
const deletePost = async (postID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + postID, config)

    if (response.data) {
        return response.data
    }
}

const postService = {
    getPosts,
    createPost,
    deletePost
}

export default postService