const router = require('express').Router()
const users = require('../Models/users')
const posts = require('../Models/posts')


const bcrypt = require('bcrypt'); 
const saltRounds = 10;

// <<------------UPDATE USER-------------->> //

router.put('/:id', async (req, res) => {


    if (req.body.userId === req.params.id) {

        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, saltRounds)
            }
            const updatedUser = await users.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true })

            res.status(200).json(updatedUser)
        }
        catch (err) {
            res.status(401).json(err);
        }

    } else {
        res.status(402).json("You can only update your own account");
    }
})



// <<------------DELETE USER-------------->> //

router.delete('/:id', async (req, res) => {


    const user = await users.findById(req.params.id)
    if (user._id.toString() === req.params.id) {

        try {

            if (user) {
                await posts.deleteMany({ username: user.username })
                await users.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been deleted");
            }


        }
        catch (err) {
            res.status(401).json(err);
        }

    } else {
        res.status(402).json("You can only update your own account");
    }
})


// <<------------GET USER-------------->> //

router.get('/:id', async (req, res) => {

    try {

        const user = await users.findById(req.params.id)

        const { password, ...others } = user._doc
        res.status(200).json(others)

    }
    catch (err) {
        res.status(401).json(err);
    }

})

module.exports = router
