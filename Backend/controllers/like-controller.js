import LikeModel from '../models/Like.js';
export const dolike = async (req, res) => {
    const pid = req.params.id;
    try {
        const like = await LikeModel.findOne({"pid":pid});
        if (like){
            like.count = like.count+1
            like.username = req.session.username;
            LikeModel.updateOne({"pid":pid},like)
            return res.status(200).json({ "data": like })

        }else{
            const last_like = await LikeModel.find({}).sort({lid:-1}).limit(1);
            let likeData = {}
            likeData.pid = pid
            likeData.count = 1
            likeData.username = req.session.username;
            if (last_like.length !=0){
                likeData.lid = last_user[0].uid+1;
            }else{
                likeData.lid = 75000;
            }
            likeData = LikeModel.create(likeData)
            return res.status(200).json({ "data": likeData })
        }
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "data": "Error in DB" });

    }
    

}

export const getlikes = async (req, res) => {
    try {
        const pid = req.params.id;

        // Check if user with the same username already exists
        try {
            const like = await LikeModel.findOne({"pid":pid});
            return res.status(200).json({ "data": like });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ "data": "Error occurred while getting like post" });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "data": "Internal server error" });
    }
};


