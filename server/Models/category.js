const mongoose = require('mongoose')


const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: false
    }

})

const category = new mongoose.model("categories", CategorySchema)

module.exports = category