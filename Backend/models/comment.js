import mongoose from 'mongoose'
const Schema = mongoose.Schema
const likeSchema = new Schema({
    lid :{
        type: Number,
        required: true
    },
    username :{
        type: String,
        required: true
    },
    user2 :{
        type: Number,
        required: true
    }


}, {
    timestamps: true // This option adds 'createdAt' and 'updatedAt' fields
})

const FollowModel = mongoose.model('Follow', followSchema);

export default FollowModel;