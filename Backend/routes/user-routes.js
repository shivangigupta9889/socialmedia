
import express from 'express'
import { getAllUser,createUser,login } from '../controllers/user-controller.js'
import multer from 'multer';
import path from 'path';
export const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'c:\\Users\\shiva\\OneDrive\\Desktop\\Projects\\socialmedia\\backend\\uploads\\';
        console.log(uploadPath)
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
export const upload = multer({ storage: storage });
router.get('/',getAllUser);
router.post('/login',upload.single('profileImage'),createUser);
router.post('/',upload.single('profileImage'), login);


