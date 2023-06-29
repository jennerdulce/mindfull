const express = require('express')
const router = express.Router()
const { getPosts, setPost, updatePost, deletePost, getAllPosts, getPost } = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')

router.get('/all', getAllPosts)
router.get('/', protect, getPosts)
router.get('/post', protect, getPost)
router.post('/', protect, setPost)
router.put('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)


module.exports = router