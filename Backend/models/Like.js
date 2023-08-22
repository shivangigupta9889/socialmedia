import mongoose from 'mongoose'
const Schema = mongoose.Schema
const likeSchema = new Schema({
    lid :{
        type: Number,
        required: true
    },
    pid :{
        type: Number,
        required: true
    },
    count :{
        type: Number,
        required: true
    },
    username :{
        type: String,
        required: true
    }


}, {
    timestamps: true // This option adds 'createdAt' and 'updatedAt' fields
})

const LikeModel = mongoose.model('Like', likeSchema);

export default LikeModel;