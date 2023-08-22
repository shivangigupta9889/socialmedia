import express from 'express'
import { dolike,getlikes } from '../controllers/like-controller.js'
export const routerLike = express.Router();
routerLike.get('/:id',dolike);
routerLike.get('/likes',getlikes);