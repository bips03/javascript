
const express = require('express')
const router = express.Router();

// get the schema
const Post = require('../models/Posts')

//GET ALL POSTS
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({msg : err})
    }
})

//POST POST TO DATABASE
router.post('/',async(req,res) => {
    // get the body from request object
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    })
    // got our data
    try{
        const savedData = await post.save()
        // save our data in DB
        res.json(savedData)
    }
    catch(err){
        res.json({msg : err})
    }

})

// GET SINGLE POST

router.get('/:id', async (req,res) => {
    try{
        const specificPost = await Post.findById(req.params.id)
        // send our data 
        res.json(specificPost)
    }
    catch(err){
        res.json({msg : err})
    }

    
})

router.delete('/:id', async (req,res) => {
    try{
        const deletedPost = await Post.remove({ _id : req.params.id})
        // delete our data 
        res.json(deletedPost)
    }
    catch(err){
        res.json({msg : err})
    }
})


module.exports = router