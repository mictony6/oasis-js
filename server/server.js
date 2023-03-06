const express = require('express')
const mongoose = require('mongoose')
// const router = express.Router()

const app = express()

//connect to MongoDB
const dbURI = "mongodb+srv://mbitoon:UIY26c4ogH8nENt4@cluster0.sihine0.mongodb.net/oasis?retryWrites=true&w=majority"
mongoose.connect(dbURI)
    .then(result => {
        app.listen(8000)
        console.log("Connected to db")
    })
    .catch(err => console.log(err))

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

const postRouter = require('./routes/postRouter')


app.get('/api', (req, res) => {
    res.json({ name: "Michael Anthony", age: 20 })
})
app.use('/api/post', postRouter)

