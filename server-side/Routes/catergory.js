const router = require('express').Router()
const category=require('../Models/category.js')


// <<------------CREATE CATEGORY-------------->> //

router.post('/', async (req, res) => {
    const newCat =  new category(req.body)

    try {
        const category = await newCat.save()
        res.status(200).json(category)

    } catch (err) {

        res.status(500).json(err)
    }
})


// <<------------GET CATEGORY-------------->> //

router.get('/', async (req, res) => {
    
    try {
        const cat = await category.find()
        res.status(200).json(cat)

    } catch (err) {

        res.status(500).json(err)
    }
})

module.exports = router