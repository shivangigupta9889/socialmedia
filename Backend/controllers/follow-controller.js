import FollowModel from '../models/Follow.js';
export const dofollow = async (req, res) => {
    let {user1,user2} = req.body;
    
    const follow_data =req.body;
    try {

        const last_user = await FollowModel.find({}).sort({pid:-1}).limit(1);
                if (last_user.length !=0){
                    follow_data.fid = last_user[0].fid+1;
                }else{
                    follow_data.fid = 75000;
                }
        
        follow_data.user1 = user1;
        follow_data.user2 = user2;

        const follow = await FollowModel.create(follow_data);
        return res.status(200).json({ "post": follow })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "data": "Error in DB" });

    }
    

}

export const findFollowee = async (req, res) => {
    try {
        const {user} = req.body;

        // Check if user with the same username already exists
        try {
            const followers = await FollowModel.find({ user1: user });
            if (followers.length > 0) {
                return res.status(200).json({ "followers": followers });
            } else {
                return res.status(404).json({ message: "No followee found for this user" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        } 

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "data": "Internal server error" });
    }
};


export const findFollower = async (req, res) => {
    try {
        const {user} = req.body;

        // Check if user with the same username already exists
        try {
            const followers = await FollowModel.find({ user2: user });
            if (followers.length > 0) {
                return res.status(200).json({ "followers": followers });
            } else {
                return res.status(404).json({ message: "No follower found for this user" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        } 

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "data": "Internal server error" });
    }
};