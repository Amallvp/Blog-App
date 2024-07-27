const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        unique:false
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})

const users=new mongoose.model("users",UserSchema)

module.exports=users