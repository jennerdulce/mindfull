import axios from 'axios'
const API_URL = 'api/posts/'

// Display User Post
// const getPost = async (postID, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     }
//     const response = await axios.get(API_URL + `post/${postID}`, config)

//     if (response.data) {
//         return response.data
//     }
// }

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
    console.log('token: ', token)
    const response = await axios.delete('/' + postID, config)
    console.log('DELETE RESPONSE: ', response)
    // const response = await axios.delete(API_URL + postID, config)
    if (response.data) {
        return response.data
    }
}

const postService = {
    // getPost,
    getPosts,
    createPost,
    deletePost
}

export default postService