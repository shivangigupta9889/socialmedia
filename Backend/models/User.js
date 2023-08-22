import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    username :{
        type: String,
        required: true,
        unique: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true,
        minlength: 10
    },
    dob:{
        type: String,
        required:true,

    },
    profileImage:{
        type: String,
        required:true,

    },
    uid:{
        type: Number,
        required:true,

    }


})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;