const Post = require('../models/post')
const path = require('path')

const post_index = (req, res) => {
    Post.find()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const post_create_get = (req, res) => {
    res.sendFile('create.html', { root: path.join(__dirname, '../views') })

}

const post_create_post = (req, res) => {
    const post = new Post(req.body)
    post.save()
        .then((result) => {
            res.redirect('/api/post')
        })
        .catch((err) => {
            console.log(err)
        })
}

const post_detail = (req, res) => {
    const id = req.params.id
    Post.findById(id)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const post_delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = {
    post_index,
    post_create_get,
    post_create_post,
    post_delete,
    post_detail
}