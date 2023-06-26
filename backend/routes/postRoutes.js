const express = require('express')
const router = express.Router()
const { getPosts, setPost, updatePost, deletePost, getAllPosts } = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getPosts)
router.post('/', protect, setPost)
router.put('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)
router.get('/all', getAllPosts)

module.exports = router