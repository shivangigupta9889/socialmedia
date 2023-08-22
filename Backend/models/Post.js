import mongoose from 'mongoose'
const Schema = mongoose.Schema
const postSchema = new Schema({
    pid :{
        type: Number,
        required: true
    },
    username :{
        type: String,
        required: true,
        unique: true
    },
    message :{
        type: String,
        required: true,
        unique: true
    },
    image :{
        type: String,
        required: true,
        minlength: 10
    }


}, {
    timestamps: true // This option adds 'createdAt' and 'updatedAt' fields
})

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;