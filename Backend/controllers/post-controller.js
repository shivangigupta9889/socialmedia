import PostModel from '../models/Post.js';
export const getPostByPostId = async (req, res) => {
    const pid = req.params.id;
    try {
        const post = await PostModel.findOne({"pid":pid});
        return res.status(200).json({ "post": post })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "data": "Error in DB" });

    }
    

}

export const createPost = async (req, res) => {
    try {
        const postData = req.body;

        // Check if user with the same username already exists
        try {
            const last_user = await PostModel.find({}).sort({pid:-1}).limit(1);
                if (last_user.length !=0){
                    postData.pid = last_user[0].uid+1;
                }else{
                    postData.pid = 75000;
                }
            if (req.file) {
                    postData.image = req.file.filename;
                }
            if (!req.session.username){
                return res.status(500).json({ "data": "Please Login first" });
            }
            postData.username = req.session.username
            const newPost = await PostModel.create(postData);
            return res.status(201).json({ "data": newPost });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ "data": "Error occurred while creating post" });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "data": "Internal server error" });
    }
};


export const getAllPostOfUser = async (req, res) => {
    const username = req.session.username;

    try {
        const posts = await PostModel.find({ username: username });
        if (posts.length > 0) {
            return res.status(200).json({ posts: posts });
        } else {
            return res.status(404).json({ message: "No posts found for this user" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};