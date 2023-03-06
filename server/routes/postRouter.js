const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


router.route('/')
    .get(postController.post_index)
    .post(postController.post_create_post)
router.get('/create', postController.post_create_get)
router.route('/:id')
    .get(postController.post_detail)
    .delete(postController.post_delete)


module.exports = router
