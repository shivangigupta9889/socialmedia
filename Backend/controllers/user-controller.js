import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';;
export const getAllUser = async (req, res) => {
    let user = {};
    try {
        user = await UserModel.find();
    } catch (err) {
        console.log(err)

    }
    return res.status(200).json({ "user": user })

}

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const { name, username, email, password, dob } = userData;

        // Check if user with the same username already exists
        const exists = await UserModel.findOne({ 'username': username });
        if (exists) {
            return res.status(400).json({ "data": "User already exists" });
        }

        const saltRounds = 10;

        // Hash the password
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);

            // Store the hashed password in the user data
            userData.password = hash;

            // If a file was uploaded, store the image filename
            if (req.file) {
                userData.profileImage = req.file.filename;
            }

            // Create a new user in the database
            const last_user = await UserModel.find({}).sort({uid:-1}).limit(1);
            if (last_user.length !=0){
                userData.uid = last_user[0].uid+1;
            }else{
                userData.uid = 75000;
            }

            const newUser = await UserModel.create(userData);
            return res.status(201).json({ "data": newUser });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ "data": "Error occurred while creating user" });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "data": "Internal server error" });
    }
};


export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ 'username': username });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                req.session.username = username
                req.session.uid = user.uid
                return res.status(200).json({ "message": "User Successfully logged In" });
            } else {
                return res.status(401).json({ "message": "Invalid username or password" });
            }
        } else {
            return res.status(404).json({ "message": "User not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ "message": "Internal server error" });
    }
};