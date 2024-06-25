const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    desc:{
        type:String,
        required:true,
        unique:false
    },
    photo:{
        type:String,
        default:""
    },
    category:{
        type:Array,
        required:false,
        unique:false
    }
},{timestamps:true})

const posts=new mongoose.model("posts",PostSchema)

module.exports=posts