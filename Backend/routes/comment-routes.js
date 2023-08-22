import express from 'express'
import { dofollow,findFollowee,findFollower } from '../controllers/follow-controller.js'
export const routerFollow = express.Router();
routerFollow.post('/',dolike);
routerFollow.get('/likes',getlikes);