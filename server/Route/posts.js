const router = require('express').Router()
const posts = require('../Models/posts')
const category=require('../Models/category.js')

const bcrypt = require('bcrypt');
const saltRounds = 10;

// <<------------CREATE POST-------------->> //

router.post('/create', async (req, res) => {

    try {
        const newPost = await posts(req.body)

        const post = await newPost.save()
        res.status(200).json(post)



    } catch (err) {

        res.status(500).json(err)
    }
})

// <<------------UPDATE POST-------------->> //

router.put('/:id', async (req, res) => {

    const post = await posts.findById(req.params.id)
    if (post.username===req.body.username) {

        try {
            const updatedPost = await posts.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
            res.status(200).json(updatedPost)
        }
        catch {

        }
    }
    else {

        res.status(401).json("not ur post")
    }
})


// <<------------DELETE POST-------------->> //

router.delete('/:id', async (req, res) => {

    const post = await posts.findById(req.params.id)
    if (post.username===req.body.username) {

        try {
             await posts.findByIdAndDelete(req.params.id)
            res.status(200).json("Post Deleted")
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {

        res.status(401).json("not ur post")
    }
})


// <<------------GET POST-------------->> //

router.get('/:id', async (req, res) => {

    try{

        const post = await posts.findById(req.params.id)
        res.status(200).json(post)
    }
   catch (err){
    res.status(500).json(err)
   }

    
})


// <<------------GET ALL POST-------------->> //

router.get('/', async (req, res) => {

    const user= req.query.user
    const cat =req.query.cat

    try{

        let post

if(user){

    const post = await posts.find({username:user})
    res.status(200).json(post)

}else if(cat){
    const post = await posts.find({category:cat})
    res.status(200).json(post)
}

else{ 
    
    const post = await posts.find()
    res.status(200).json(post)
}

    }
   catch (err){
    res.status(500).json(err)
   }

    
})

module.exports = router