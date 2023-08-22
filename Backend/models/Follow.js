import mongoose from 'mongoose'
const Schema = mongoose.Schema
const followSchema = new Schema({
    fid :{
        type: Number,
        required: true
    },
    user1 :{
        type: Number,
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