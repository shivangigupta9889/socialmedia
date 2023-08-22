import express from 'express'
import { getPostByPostId,createPost,getAllPostOfUser } from '../controllers/post-controller.js'
import multer from 'multer';
import path from 'path';
export const routerPost = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'c:\\Users\\shiva\\OneDrive\\Desktop\\Projects\\socialmedia\\backend\\post\\';
        console.log(uploadPath)
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
export const upload = multer({ storage: storage });
routerPost.get('/:id',getPostByPostId);
routerPost.post('/',upload.single('profileImage'),createPost);
routerPost.get('/', getAllPostOfUser);