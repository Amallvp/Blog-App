const router = require('express').Router()
const users = require('../Models/users')

const bcrypt = require('bcrypt');
const saltRounds = 10;

// <<------------REGISTER-------------->> //


router.post('/register', async (req, res) => {

    try {

        const { username, email } = req.body
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds)

        const newUser = await users({ username, email, password: hashPassword })
        const user = await newUser.save()
        const { password, ...others } = user._doc

        res.status(200).json(others)

    } catch (err) {
        res.status(500).json(err)
    }
})

// <<------------LOGIN-------------->> //

router.post('/login', async (req, res) => {

    try {

        const user = await users.findOne({ email: req.body.email })
        if (!user) { return res.status(401).json("wrong credentials") }


        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) { return res.status(402).json("wrong credentials") }

        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router