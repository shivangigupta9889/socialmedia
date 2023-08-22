import express from 'express'
import { dofollow,findFollowee,findFollower } from '../controllers/follow-controller.js'
export const routerFollow = express.Router();
routerFollow.post('/',dofollow);
routerFollow.post('/followers',findFollower);
routerFollow.post('/followee', findFollowee);